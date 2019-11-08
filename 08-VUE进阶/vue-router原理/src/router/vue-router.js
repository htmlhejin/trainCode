// 手写路由管理器vue-router

class HistoryRoute{
    constructor(){
        // current表示路径   /home或/about,当点击前进后退箭头时会用到HistoryRoute.current，下面根据路由跳转响应组件时需要用到current ,/或/home或/about
        this.current = null
    }
}

class VueRouter{
    constructor(options){   // constructor指向创建这个对象的函数  下面定义的这些变量都将挂在VueRouter实例上
        // 得到路由模式
        this.mode=options.mode || "hash"
        // 实例化HistoryRoute挂在VueRouter组件上，this指向VueRouter这个类
        this.history=new HistoryRoute()
        // 得到路由规则
        this.routes=options.routes || []
        // 转换后的数据形式  {'/home':Home}
        this.routesMap=this.createMap(this.routes)
        this.init()
    }
    // 得到路由的模式
    init(){
        // hash的原理是location，location.hash表示访问的路径，还有两个事件，load,hashchange
        if(this.mode==="hash"){
            // location是浏览器内部的一个api
            // console.log(location.hash)  //  #/  #/home  #/about

            location.hash ? "" : location.hash="/"

            // 当页面加载完毕后触发load事件
            window.addEventListener("load",()=>{
                // console.log(location.hash.slice(1))  //   /  /home  /about
                // current保存了响应的路径
                this.history.current = location.hash.slice(1)   //  去掉#是为了下面匹配{path:'/home'}时可以匹配到
                // console.log(this.history.current)   // /  /home  /about
            })
            // 点击前进后退按钮时才会hashchange事件
            window.addEventListener("hashchange",()=>{
                this.history.current=location.hash.slice(1)
                // console.log(this.history.current)
            })
        }
        // history模式，靠的是popstate，location.pathname表示访问的路径
        else{
            location.pathname ? "" : location.pathname = "/"
            // console.log(location.pathname)   //  /   /home    /about
            // 页面加载完毕后触发load事件
            window.addEventListener("load",()=>{
                this.history.current=location.pathname
                // console.log("----",this.history.current)
            })
            // 当用户点击回退或前进按钮时才会触发popstate事件
            window.addEventListener("popstate",()=>{
                this.history.current=location.pathname
                // console.log(this.history.current)
            })
        }
    }
    // $router中常见方法
    push(){}
    back(){}
    go(){}
    // 定义一个方法，把数组形式的路由转变成对象形式，即[{path:'/home',component:'Home'}]转变成{'/home':Home},这样写，下面根据路径渲染组件时较为简洁，方便
    createMap(routes){
        // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
        // total--初始值，或者计算结束后返回的值，当前值，当前元素的索引(可选)，当前元素所属数组(可选)，initialValue可选，传递给函数的初值
        return routes.reduce((memo,current)=>{
            // console.log(memo)
            memo[current.path]=current.component
            return memo
        },{})
    }
}

// install方法中一个固定的参数，Vue
VueRouter.install=function(Vue){
    // 将{}中的对象混入到Vue组件中,这样所有的后代组件都可以使用
    Vue.mixin({
        // 每个组件中混入一个钩子函数，组件创建前自动调用
        // 创建$router,$route对象  创建router-view组件,router-link组件
        beforeCreate(){
            // console.log(this.$options.name)
            // console.log(this.$options)
                // {components: {…}, directives: {…}, filters: {…}, _base: ƒ, beforeCreate: Array(2)}beforeCreate: (2) [ƒ, ƒ]components: {}directives: {}filters: {}_base: ƒ Vue(options)__proto__: Object
                // {components: {…}, directives: {…}, filters: {…}, _base: ƒ, beforeCreate: Array(2), …}beforeCreate: (2) [ƒ, ƒ]components: {}computed: {}data: ƒ mergedInstanceDataFn()directives: {}filters: {}_base: ƒ Vue(options)__proto__: Object
                // {components: {…}, directives: {…}, filters: {…}, _base: ƒ, beforeCreate: Array(2), …}beforeCreate: (2) [ƒ, ƒ]components: {}directives: {}filters: {}render: ƒ render(h)router: VueRouterhistory: HistoryRoute {current: ""}mode: "hash"routes: Array(2)0: {path: "/home", component: {…}}component: {render: ƒ, staticRenderFns: Array(0), _compiled: true, beforeCreate: Array(1), beforeDestroy: Array(1), …}beforeCreate: [ƒ]0: ƒ ()length: 1__proto__: Array(0)beforeDestroy: [ƒ]render: ƒ ()staticRenderFns: []__file: "src/views/Home.vue"_compiled: true__proto__: Objectpath: "/home"__proto__: Object1: {path: "/about", component: {…}}length: 2__proto__: Array(0)routesMap: {/home: {…}, /about: {…}}__proto__: Objectstore: Store {_committing: false, _actions: {…}, _actionSubscribers: Array(0), _mutations: {…}, _wrappedGetters: {…}, …}_base: ƒ Vue(options)__proto__: Object
                // {parent: Vue, _parentVnode: VNode, propsData: undefined, _parentListeners: undefined, _renderChildren: undefined, …}
                // 只有一个对象中有router属性
            // 得到$router,$route
            if(this.$options && this.$options.router){
                this._router=this.$options.router  // 得到router赋给_router
                this._root=this  // 得到根组件，赋给_root

                // 得到根组件，得到router，在后代组件中就可以使用Vue实例和router

                // 监控路径变化，路径变化视图就更新
                Vue.util.defineReactive(this,"xxx",this._router,history)
            }else{
                // 没有router，去父级组件找，把父组件中的Vue实例赋给子组件，这样子组件就可以使用根组件的路由，状态等
                this._root=this.$parent._root
            }
            // defineProperty(obj,prop,descriptor),
            // obj:要定义的属性的对象；prop：要定义或修改的对象的属性；descriptor：要定义或修改的属性值
            Object.defineProperty(this,"$router",{    // this表示每一个组件
                get(){  // 获取$router时，调用get,返回this._root._router，类似的还有一个set方法，设置$router时调用set方法
                    return this._root._router
                }
            })
            Object.defineProperty(this,"$route",{
                get(){  // 访问$route时，自动调用get方法
                    return {
                      current:this._root._router.history.current
                }
                }
            })
        }
    }),
    // 定义全局组件router-link   返回a标签
    Vue.component('router-link',{
        props:{
            to:{
                type:String
            }
        },
        render(h){
            let mode=this._root._router.mode    //  jsx
            return <a href={mode==='hash' ? `#${this.to}` : this.to}>{this.$slots.default}</a>
        }
    })
    Vue.component('router-view',{  //  对应相对路径
        render(h){
            let current=this._root._router.history.current    //  jsx
            let routesMap=this._root._router._routesMap
            return h(routesMap['/home'])
        }
    })
}

// 把类导出去
export default VueRouter


// console.log(Vue)
// ƒ Vue (options) {
//     if ( true &&
//       !(this instanceof Vue)
//     ) {
//       warn('Vue is a constructor and should be called with the `new` keyword');
//     }
//     this._init(options);
//   }

// console.log(options)
        // {mode: "history", linkActiveClass: "active", base: "/", routes: Array(2)}
        // base: "/"
        // linkActiveClass: "active"
        // mode: "history"
        // routes: (2) [{…}, {…}]