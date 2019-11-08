import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


const router = new Router({
    // mode:'hash',    //只有hash能监控到路径变化，路径中有#号
    mode: 'history',
    linkActiveClass:'active',
    base: process.env.BASE_URL,
    routes: [
    ]
})
export default router
