// Vue.use(Vuex) 时必定会触发Vuex中的install方法
let Vue;
const forEach=(obj,callback)=>{
    Object.keys(obj).forEach(key=>{
        callback(key,obj[key])
    })
}

class Store {
    // 固定参数options     
    constructor(options) {  // new时自动调用constructor方法
        // 得到实例化Store传过来的数据，state,mutations,actions
        // console.log(options)
        // {state: {…}, mutations: {…}, actions: {…}}
        // 得到实例化Store时的数据，state,mutations,actions,getters等
        // 保证每个组件都可以通过this.$store.state.xxx得到vuex中的状态
        // 状态改变时视图需要刷新，此时需要把状态定义在响应式数据中
        this._s=new Vue({   // new Vue时调用constructor函数
            data:{
                state:options.state
            }
        })
        // console.log(options.getters)
        // {myAge: ƒ}


        // getters原理     //  每个组件都可以通过this.$store.getters.xxx获取getters中的数据
        let getters=options.getters || {}    // 得到仓库store.js中的getters
        this.getters={}
        Object.keys(getters).forEach((getterName)=>{
            Object.defineProperty(this.getters,getterName,{  
                // 获取$store.getters中的函数名时会触发get方法
                get:()=>{  // 用箭头函数，是因为箭头函数中没有this，this指向不会发生改变
                    return getters[getterName](this.state)  // 返回函数调用，并把state作为参数传递过去
                }
            })
        })
        

        // mutations原理
        // 得到仓库Store中的mutations
        let mutations=options.mutations || {}
        // 定义一个mutations来修改里面的数据
        this.mutations={}  //是一个对象，因为里面可能有很多函数
        // Object.keys(mutations).forEach(mutationName=>{
        //     // console.log(mutationName)   // add
        //     this.mutations[mutationName]=(payload)=>{
        //         mutations[mutationName](this.state,payload)
        //     }
        // })
        forEach(mutations,(mutationName,value)=>{
            this.mutations[mutationName]=(payload)=>{
                value(this.state,payload)
            }
        })



        // actions原理
        let actions=options.actions || {}
        this.actions={}
        Object.keys(actions).forEach(actionName=>{
            this.actions[actionName]=(payload)=>{
                actions[actionName](this,payload)
            }
        })
        // forEach(actions,(actionName,value)=>{
        //     this.actions[actionName]=(payload)=>{
        //         value(this,payload)
        //     }
        // })
    }
    // 定义方法获取state
    get state(){
        return this._s.state
    }
    // 调用commit时触发mutations中的方法
    // this.$store.commit('add',10)
    commit=(type,payload)=>{
        this.mutations[type](payload)
    }

    dispatch=(type,payload)=>{
        this.actions[type](payload)
    }
}

// Vue.use的时候把Vue构造器传过来 固定参数Vue
const install = (_Vue) => {
    Vue=_Vue
    Vue.mixin({   // Vue中混入了beforeCreate，每个组件创建之前都会执行这个函数
        beforeCreate(){   // 在组件创建之前调用
            // console.log(this.$options)
            // {components: {…}, directives: {…}, filters: {…}, _base: ƒ, beforeCreate: Array(2), …}beforeCreate: (2) [ƒ, ƒ]components: {}directives: {}filters: {}name: "main"render: ƒ render(h)router: VueRouter {__ob__: Observer}store: Storestate: {age: 10}__proto__: Object_base: ƒ Vue(options)__proto__: Object
            // vuex.js?9fde:20 {parent: Vue, _parentVnode: VNode, propsData: undefined, _parentListeners: undefined, _renderChildren: undefined, …}
            if(this.$options && this.$options.store){
                //给每一个组件挂载一个$store
                this.$store=this.$options.store
            }else{
                this.$store=this.$parent && this.$parent.$store
            }
        }
    })
}

export default { install, Store }