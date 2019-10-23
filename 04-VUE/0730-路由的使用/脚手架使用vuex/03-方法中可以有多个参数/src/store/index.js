import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// new Vuex.Store--创建一个仓库
export default new Vuex.Store({
  // 仓库中的状态
  state: {
    counter:1
  },
// mutations用来修改状态
  mutations: {
    add(state){
      state.counter++
    },
    sub(state){
      state.counter--
    },
    // state是一个参数，函数中也可以有多个参数
    addN(state,obj){
      state.counter+=obj
    }
  },
  // 进行异步操作
  actions: {

  }
})
