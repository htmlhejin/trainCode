import Vue from "vue"
import Vuex from "vuex"
import home from "./modules/home"
import * as types from "@/store/action-types"
import { login, validate } from "@/api/user"
import { Toast } from "cube-ui"
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home
    },
    // 存放很多不同组件的不同状态
    state: {
        ajaxToken: [],  // 保存了所有页面的所有的请求
        user: {},  // 存放用户信息
        hasPermission: false   // 没有登录就没有权限访问
    },
    mutations: {
        [types.PUSH_TOKEN](state, cancelFun) {
            // 把取消请求的方法也保存起来
            state.ajaxToken = [...state.ajaxToken, cancelFun]
        },
        [types.CLEAR_TOKEN](state) {
            state.ajaxToken.forEach(cancelFun => cancelFun())   // 取消请求函数执行
            state.ajaxToken = []  // 切换路由时之前的页面中不再有请求
        },
        [types.SET_USER](state, payload) {
            state.user = payload
            state.hasPermission = true
        }
    },
    actions: {
        async [types.LOGIN]({ commit }, user) {
            // 登录时可能会出现断网的情况，用try,catch来处理异常
            try {
                let res = await login(user)
                // console.log(res)
                // 数据持久化
                localStorage.setItem("token", res.token)
                commit(types.SET_USER, res)
            } catch (e) {
                Toast.$create({
                    txt: '登录失败',
                    time: 300
                }).show()
            }
        },
        async [types.VALIDATE]({ commit }) {
            try {
                let user = await validate()
                // 要么返回一堆用户信息，要么返回未登录
                commit(types.SET_USER, user)
                if (user == undefined) {
                    return false;
                }
                console.log(user)  //
                return true;
            }
            catch (e) {
                console.log("catch..")
                return false;
            }
        }
    }
})

