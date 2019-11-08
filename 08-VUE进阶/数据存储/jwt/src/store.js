import Vue from 'vue'
import Vuex from 'vuex'

import {login,validate} from "./api/user"
import {setLocal} from "./libs/local"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        username:"wangcai",
        isshowLoading:false 
    },
    mutations:{
       showLoading(state){
           state.isshowLoading=true
       },
       hideLoading(state){
        state.isshowLoading=false
       },
       setUserName(state,username){
        state.username=username
       }
    },
    actions:{
        // 调用接口是异步的
        async toLogin({commit},username){
            let r = await login(username)
            // console.log(r)
            if(r.code==0){
                // 登录成功
                commit('setUserName',r.username)
                // 保存token
                setLocal("token",r.token)

            }else{
                return Promise.reject(r.data)
            }
        },
        async validate({commit}){
            let r = await validate()
            // console.log(r)   // {code: 1, data: "token过期了"}
            if(r.code==0){
                setLocal("token",r.token)   // 验证通过，重新保存token
            }
            return r.code==0  // 返回true或false，即返回token是否合法
        }
    }
})

