import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router= new Router({
    mode:'hash',    //只有hash能监控到路径变化，路径中有#号
    // mode:'history',
    base:process.env.BASE_URL,
    routes:[
      {
         path:'/',
         name:'index',
         component:()=>import("./views/MyForm/Index.vue")
      },
      {
         path:'/notice',
         name:'notice',
         component:()=>import("./views/MyForm/KNotice.vue")
      },
     {
        path:'/form',
        name:'form',
        component:()=>import("./views/MyForm/Form.vue")
     },
     {
        path:'/formitem',
        name:'formitem',
        component:()=>import("./views/MyForm/FormItem.vue")
     },
     {
        path:'/input',
        name:'input',
        component:()=>import("./views/MyForm/Input.vue")
     }
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