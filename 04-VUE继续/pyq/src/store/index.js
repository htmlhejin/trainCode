import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num:1
  },
  mutations:{
    addNum(state){
     state.num++
    }
  },
  actions:{
    //  如果把异步放在mutaions中，使用程序在调试面板中很难调试，可以把异步放到actions
        // actions和mutations中不同之处在于:
        // action提交也是mutations，不能直接修改状态
        // actions可以包含任意的异步操作
        // actions函数接收一个与store实例具有相同方法的属性的context属性，可以通过context.commit提交，也可以通过context.state获取state
    addAsyncNum(context){
      setTimeout(function(){
        context.commit("addNum")
      },2000)
    }
  }

})