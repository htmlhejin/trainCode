import Vue from 'vue'
import Router from 'vue-router'
import Name from "./views/Name"
import Version from "./views/Version"
import Home from "./views/Home"

Vue.use(Router)

const router= new Router({
    mode:'hash',    //只有hash能监控到路径变化，路径中有#号
    // mode:'history',
    base:process.env.BASE_URL,
    routes:[
      {
          path:'/',
          redirect:{path:'/home'}
      },
      {
          path:'/home',
          name:'home',
        //   一个路由可以对应多个组件（多视图）
          components:{
              default:Home,
              name:Name,
              version:Version
          }
      },
      {
        path:'/login',
        name:'login',
        component:()=>import("./views/Login.vue")
    },
    {
        path:'/name',
        name:'name',
        component:()=>import("./views/Name.vue")
    },
    {
        path:'/version',
        name:'version',
        component:()=>import("./views/Version.vue")
    },
    {
        path:'/profile',
        name:'profile',
        component:()=>import("./views/Profile.vue")
    },
    {
        path:'/user',
        name:'user',
        component:()=>import("./views/User.vue"),
        children:[
            {
                path:'useradd',
                name:'useradd',
                component:()=>import("./views/UserAdd.vue")
            },
            {
                path:'userlist',
                name:'userlist',
                component:()=>import("./views/UserList.vue")
            },
            {
                path:'userdetail/:id',
                // path:'userdetail',
                name:'userdetail',
                component:()=>import("./views/UserDetail.vue"),
                // 配置文件中使用钩子
                beforeEnter(to,from,next){
                    console.log("beforeEnter")
                    next()
                }
            }
        ]
    },
    {
        path:'*',
        component:()=>import("./views/404.vue")
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