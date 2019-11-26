import Vue from "vue"
import Router from "vue-router"
import App from "../App.vue"

Vue.use(Router)

const router = new Router({
    mode:'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path:'/',
            name:'app',
            component:App
        },
        {
            path:'/home',
            name:'home',
            component:()=>import("../views/home")
        },
        {
            path:'/profile',
            name:'profile',
            component:()=>import("../views/profile")
        },
        {
            path:'/movie',
            name:'movie',
            component:()=>import("../views/movie")
        }
    ]
})

export default  router;