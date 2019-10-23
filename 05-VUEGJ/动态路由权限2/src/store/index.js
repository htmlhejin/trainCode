import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import { authRoutes } from "../router"

Vue.use(Vuex)

// 把后端数据转成我们所需要的数据
let formatMenuList = (menuList) => {
    let arr = []  //存放权限路由
    function r(pid) {
        return menuList.filter(menu => {
            if (menu.pid === pid) {
                arr.push(menu.auth)
                let children = r(menu.id)
                menu.children = children.length ? children : null
                return true
            }
        })
    }
    return { m: r(-1), a: arr }  //m存放一级标题，a存放auth
}

// 得到权限路由
let getNeedRoutes = (auth) => {
    function r(authRoutes) {
        return authRoutes.filter(route => {
            if (auth.includes(route.name)) {
                if (route.children) {
                    route.children = r(route.children)
                }
            }
            return true
        })
    }
    return r(authRoutes)
}

export default new Vuex.Store({
    state: {
        menuList: [],
        authList: [],    //存放auth
        hasRules: false,
    },
    mutations: {
        set_menuList(state, m) {
            state.menuList = m
        },
        set_authList(state, a) {
            state.authList = a
            state.hasRules = true
        }
    },
    actions: {
        // 如果没有权限，获取后端数据   {commit}是上下文
        async getMenuList({ commit }) {
            let { data } = await axios.get("http://localhost:3000/role")
            let { m, a } = formatMenuList(data.menuList)
            // console.log(m,a)
            commit("set_menuList", m)
            commit("set_authList", a)
        },
        // 得到动态添加的路由
        async getAuthRoute({ commit, state }) {
            let r = getNeedRoutes(state.authList)
            return r;   //当前需要动态添加的路由
        }
    },
})

