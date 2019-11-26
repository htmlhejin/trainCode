import Vue from "vue"
import Router from "vue-router"
import loadable from "@/utils/loading.js"
import hooks from "./hook"
import Home from "@/views/home"

Vue.use(Router)

const router = new Router({
    mode:'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path:'/',
            name:'home',
            // 加载组件时有个动画
            component:Home,
            // 给路由添加一个标识
            meta:{
                idx:1,
                keepalive:true
            }
        },
        {
            path:'/movie',
            name:'movie',
            component:()=>import("../views/movie/index.vue"),
            meta:{
                idx:2,
                keepalive:true,
                needLogin:true
            }
            
        },
        {
            path:'/profile',
            name:'profile',
            component:loadable(()=>import("../views/profile/index.vue")),
            meta:{
                idx:3,
                keepalive:true,
            },
            
        },
        {
            path:'/login',
            name:'login',
            component:loadable(()=>import("../views/login/index.vue")),
        }
    ]
})

Object.values(hooks).forEach(hook=>{
    // 每次切换到新的路由，就取消之前的路由的请求
    router.beforeEach(hook)
    // router.beforeEach((to,from,next)=>{next()})
})

export default  router;