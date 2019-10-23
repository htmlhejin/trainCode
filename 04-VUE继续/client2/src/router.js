import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Register from './views/Register.vue'
import NotFound from './views/404.vue'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import InfoShow from './views/InfoShow.vue'
import FoundList from './views/FoundList.vue'

Vue.use(Router)

const router= new Router({
    mode:'history',
    base:process.env.BASE_URL,
    routes:[
        {
            path:'/',
            redirect:Index
        },
        {
            path:'/index',
            name:'index',
            component:Index,
            children:[
                {path:'/',name:'home',component:Home},
                {path:'/home',name:'home',component:Home},
                {path:'/infoshow',name:'infoshow',component:InfoShow},
                {path:'/foundlist',name:'foundlist',component:FoundList}
            ]
        },
        {
            path:'/register',
            name:'register',
            component:Register
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        
        {
            path:'*',
            component:NotFound
        }
        
    ]
})

// 添加路由守卫
router.beforeEach((to,from,next)=>{
    const isLogin=localStorage.eleToken ? true : false;
    if(to.path=="/login" || to.path=="/register"){
        next();
    }else{
        isLogin ? next() : next('/login')
    }
})
export default router