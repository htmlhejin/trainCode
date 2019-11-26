import Vue from 'vue'
import Router from 'vue-router';
import Home from "./views/Home.vue"
import Login from "./views/Login.vue"
import Profile from "./views/Profile.vue"
// import store from "./store"

Vue.use(Router)

const router= new Router({
    mode: 'history',
    routes: [
        { path: "/", name: "home", component: Home,meta:{needLogin:true} },
        { 
            path: "/login",
             name: "login", 
             component: Login,
            //  meta:{needLogin:true}  //添加一个字段，需要用通过meta添加
        },
        { path: "/profile", name: "profile", component: Profile,meta:{needLogin:true} },
    ]
})



export default router;








