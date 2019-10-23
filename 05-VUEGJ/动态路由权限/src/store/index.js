import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import {authRoutes} from '../router'

Vue.use(Vuex)

// 定义一个方法转化数据
let formatMenuList=(menuList)=>{
    let arr=[]
    function r(pid){
        return menuList.filter(menu=>{      //filter返回的是一个新数据，我门需要把新数据返回，所以return menulist.filter(menu=>{...,返回到函数调用处，谁调用了r函数，就返回到哪,所以return r(-1)
             //后端所有的路径权限放到新数组中
            if(menu.pid===pid){    //找到对应的对象
                arr.push(menu.auth)
                let children=r(menu.id) //得到每个对象的children
                menu.children=children.length ? children : null
                return true;
            }
        })
    }
    return {m:r(-1),a:arr}
};
// auth:['cart','cart-list','shop','lottery','product']  有权限的路由
// authRoutes是一个数组，里面保存了[{path:'/',children,对应的component}]
let getNeedRoutes=(auth)=>{
    function r(authRoutes){
        return authRoutes.filter(route=>{
            if(auth.includes(route.name)){
                if(route.children){
                    route.children = r(route.children)
                }
            return true
            }
        })
    }
    return r(authRoutes)
}

export default new Vuex.Store({
    state:{
        menuList:[],
        authList:[],    //保存有权限的路由的auth
        hasRules:false  //没有获取过权限，获取完毕后，状态改为true
    },
    mutations:{
        set_menuList(state,m){
            state.menuList=m
        },
        set_authList(state,a){
            state.authList=a,
            state.hasRules=true
        }
    },
    actions:{
        // getMenuList--接口名
        async getMenuList({commit}){
            // 解构赋值，await返回的是对象{data}
        let {data} = await axios.get('http://localhost:3000/role');
        // console.log(data.menuList)
        let menuList = data.menuList
        let {m,a} = formatMenuList(menuList)
        console.log(m,a)        //m是返回的新数组，a是有权限的数据的auth
        commit('set_menuList',m)
        commit('set_authList',a)
        },
        async getAuthRoute({commit,state}){
            // 要拿到所有的权限路由 getNeedRoutes
            let r=getNeedRoutes(state.authList);
            // 当前需要动态添加的路由
            return r
        }
    }
})

