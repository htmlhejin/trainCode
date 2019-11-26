// 入口文件
import Vue from "vue"
import App from "./app"

// 自己定义一个$dispatch方法
Vue.prototype.$dispatch = function(eventName,value){
    // 找到父组件
    let parent = this.$parent // 谁调用了$dispatch,this指向谁  
    while(parent){
        // 内部还是触发父中的方法
        parent.$emit(eventName,value)
        // 一直向上找
        parent = parent.$parent
    }  
}

// Vue.prototype.$bus = function(){
//     return new Vue()
// }
// // 简写
// Vue.prototype.$bus=()=>new Vue()
// 再简写   相当于在原型上面挂了一个vue实例,每一个组件都可以使用$bus这个vue实例
Vue.prototype.$bus = new Vue()
new Vue({
    el:"#app",
    render:h=>h(App)
})