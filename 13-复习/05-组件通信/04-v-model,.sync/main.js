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
        // 如果
        parent = parent.$parent
    }  
}

new Vue({
    el:"#app",
    render:h=>h(App)
})