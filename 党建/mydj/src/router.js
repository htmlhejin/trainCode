import Vue from 'vue'
import Router from 'vue-router'
import layout from './views/layout/index'

Vue.use(Router)

const router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:'/',
    redirect:"/login",
  },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('./views/admin/login')
    },
    {
      path: "/user",
      name:"用户管理",
      redirect:"/user/list",
      component: layout,
      children:[
          {
            path: "/user/list",
            name:"用户列表",
            component: ()=>import('./views/user/list')
          },
          {
            path: "/user/cxyh",
            name:"查询用户",
            component: ()=>import('./views/user/cxyh')
          },
          {
            path: "/user/add",
            name:"增加用户",
            component: ()=>import('./views/user/add')
          }
      ]
    },
    {
      path: "/dyhd",
      name:"党员互动",
      redirect:"/dyhd/list",
      component: layout,
      children:[
          {
            path: "/dyhd/list",
            name:"帖子列表",
            component: ()=>import('./views/dyhd/list')
          },
      ]
    },
    {
      path: "/slider",
      name:"轮播图列表",
      redirect:"/slider/list",
      component: layout,
      children:[
          {
            path: "/slider/list",
            name:"轮播图列表",
            component: ()=>import('./views/slider/list')
          },
          {
            path: "/slider/add",
            name:"add",
            component: ()=>import('./views/slider/add')
          }
      ]
    },
    {
      path: "/mzpy",
      name:"民主评议",
      redirect:"/mzpy/list",
      component: layout,
      children:[
          {
            path: "/mzpy/list",
            name:"评议列表",
            component: ()=>import('./views/mzpy/list')
          },
          {
            path: "/mzpy/add",
            name:"发起评议",
            component: ()=>import('./views/mzpy/add')
          },
      ]
    },
    {
      path: "/news",
      name:"新闻管理",
      redirect:"/news/list",
      component: layout,
      children:[
          {
            path: "/news/list",
            name:"新闻列表",
            component: ()=>import('./views/news/list')
          },
          {
            path: "/news/add",
            name:"添加新闻",
            component: ()=>import('./views/news/add')
          },
          {
            path: "/news/search",
            name:"查询新闻",
            component: ()=>import('./views/news/search')
          }
      ]
    },
    {
      path: "/xdzj",
      name:"心得总结",
      redirect:"/xdzj/list",
      component: layout,
      children:[
          {
            path: "/xdzj/list",
            name:"总结列表",
            component: ()=>import('./views/xdzj/list')
          },
          {
            path: "/xdzj/info",
            name:"info",
            component: ()=>import('./views/xdzj/info')
          }
      ]
    },
    {
      path: "/sxhb",
      name:"思想汇报",
      redirect:"/sxhb/list",
      component: layout,
      children:[
          {
            path: "/sxhb/list",
            name:"汇报列表",
            component: ()=>import('./views/sxhb/list')
          },
          {
            path: "/sxhb/info",
            name:"info",
            component: ()=>import('./views/sxhb/Info')
          }
      ]
    },
  ]
})

// 路由守卫
// router.beforeEach((to,from,next)=>{
//   const isLogin=localStorage.eleToken? true :false;
//   if(to.path=="/"||to.path=="/login"){
//     next();
//   }else{
//     isLogin ?next():next("/");
//   }
// })
export default router;