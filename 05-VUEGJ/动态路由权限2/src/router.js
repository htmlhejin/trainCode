import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/Home"

Vue.use(Router)
let defaultRoutes=[
    {
        path:"/",
        name:'home',
        component:Home
    },
    {
        path:"*",
        component:()=>import("./views/404.vue")
    },
]
export let authRoutes=[
    {
        path:"/cart",
        name:'cart',
        component:()=>import("./components/menu/cart.vue"),
        children:[
         {
             path:"cartlist",
             name:'cartlist',
             component:()=>import("./components/menu/cartlist.vue"),
             children:[
                 {
                     path:"product",
                     name:'product',
                     component:()=>import("./components/menu/product.vue")
                 },
                 {
                     path:'lottery',
                     name:'lottery',
                     component:()=>import("./components/menu/lottery.vue")
                 }
             ]
         }
        ]
    },
    {
     path:"/shop",
     name:'shop',
     component:()=>import("./components/menu/shop.vue")
 },
 {
     path:"/profile",
     name:'profile',
     component:()=>import("./components/menu/profile.vue")
 },
]

const router= new Router({
    // mode:'hash',    //只有hash能监控到路径变化，路径中有#号
    mode:'history',
    base:process.env.BASE_URL,
    routes:defaultRoutes
})
export default router
