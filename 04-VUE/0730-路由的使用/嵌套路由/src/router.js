import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Find from './views/Find.vue'
import Setting from './views/Setting.vue'
import Login from  './views/Login.vue'
import Register from  './views/Register.vue'

Vue.use(Router)   //Vue使用这个路由

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // 配置规则
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/find',
      name:'find',
      component:Find
    },
    {
      path:'/setting',
      name:'setting',
      component:Setting,
      children:[
        {
        path:'/setting/login',
        name:'login',
        component:Login,
      },
      {
        path:'/setting/register',
        name:'register',
        component:Register,
      }
    ]
    }
  ]
})
