import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router= new Router({
    mode:'hash',    //只有hash能监控到路径变化，路径中有#号
    // mode:'history',
    base:process.env.BASE_URL,
    routes:[
     
    ]
})

// 路由守卫
// router.beforeEach((to, _from, next)=>{
//     const isLogin=localStorage.eleToken ? true : false;
//     if(to.path=="/login"){
//         next()
//     }else{
//         isLogin ? next() : next('/login')
//     }
// })
export default router