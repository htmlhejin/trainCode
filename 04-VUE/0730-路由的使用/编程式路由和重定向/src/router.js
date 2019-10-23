import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)   //Vue使用这个路由

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // 配置规则
  routes: [
   {
      path:'/home',
      name:'home',
      component:Home
    }
  ]
})
