import Vue from 'vue'
// 引入 路由管理器(vue-router)
import Router from 'vue-router'

Vue.use(Router)

// 创建一个router实例，在里面配置路由
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      component: () => import("./views/Index.vue"),
      children: [
        {
          path: '/',
          redirect: '/home'
        },
        {
          path: '/home',
          name: 'home',
          component: () => import("./views/Home.vue")
        },
        {
          path: '/order',
          name: 'order',
          component: () => import("./views/Order.vue"),
          children:[
            {
              path:'/addAddress',
              name:'addAddress',
              component:()=>import ("./views/order/AddAddress.vue")
            },
            {
              path:'/myAddress',
              name:'myAddress',
              component:()=>import ("./views/order/MyAddress.vue")
            }
          ]
        },
        {
          path: '/me',
          name: 'me',
          component: () => import("./views/Me.vue")
        },
        {
          path: '/address',
          name: 'address',
          component: () => import("./views/Address.vue")
        },
        {
          path: '/city',
          name: 'city',
          component: () => import("./views/City.vue")
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("./views/Login.vue")
    },
    {
      path: '/search',
      name: 'search',
      component: () => import("./views/Search.vue")
    },
    {
      path: '/shop',
      name: 'shop',
      redirect:'/goods',
      component: () => import("./views/shop/Shop.vue"),
      children: [
        {
          path: '/goods',
          name: 'goods',
          component: () => import("./views/shop/Goods.vue")
        },
        {
          path: '/comments',
          name: 'comments',
          component: () => import("./views/shop/Comments.vue")
        },
        {
          path: '/seller',
          name: 'seller',
          component: () => import("./views/shop/Seller.vue")
        }
      ]
    }
  ]
})