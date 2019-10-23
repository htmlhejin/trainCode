import Vue from 'vue'
// 引入手写的vuex，模拟vuex原理
// import Vuex from './vuex'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        age:10,
        name:"wangcai"
    },
    getters:{
        myAge(state){
            return state.age+100
        },
        myName(state){
            return state.name
        }
    },
    mutations:{
        add(state,payload){
            state.age += payload
        },
        sub(state,payload){
            state.age -= payload
        }
    },
    actions:{
        acAdd({commit},payload){
            commit("add",payload)
        },
        acSub({commit},payload){
            commit("sub",payload)
        }
    }
})

