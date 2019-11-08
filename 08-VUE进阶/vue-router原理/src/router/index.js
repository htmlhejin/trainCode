import Vue from 'vue'
// 引入自定义的路由管理器
import VueRouter from "./vue-router"
// 引入路由规则
import routes from './routes'

// 使用时一定会触发VueRouter中的install方法
Vue.use(VueRouter)

const router = new VueRouter({
    // to:this.routes,
    // 路由模式
    // mode:'hash',    //只有hash能监控到路径变化，路径中有#号
    mode:'history',   
    base: "/",
    linkActiveClass: "active",
    // 路由规则，把路由规则单独抽离出去,routes.js
    routes
})
export default router
