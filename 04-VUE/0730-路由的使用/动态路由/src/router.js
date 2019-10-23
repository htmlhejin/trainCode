import Vue from 'vue'
import Router from 'vue-router'
import Detail from './views/Detail.vue'
import List from './views/List.vue'

Vue.use(Router)   //Vue使用这个路由

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // 配置规则
  routes: [
    {
      path: "/detail/:id",
      // path:"detail/:name/:age",
      component: Detail
    },
    {
      path: "/list",
      component: List
    }
  ]
})
