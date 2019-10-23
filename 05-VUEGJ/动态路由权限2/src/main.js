import Vue from 'vue'
import App from './App.vue';
import router from './router'
// 根文件main.js中注册store,这样所有组件都可以使用store中的数据
import store from './store/index.js'

// /把数据渲染到页面上，需要用到element-ui
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false
import "bootstrap/dist/css/bootstrap.css"

// 根据权限 动态添加路由   后端返回数据就有权限，没有返回就没有权限，返回的有权限的路由带有auth,没有权限的可以在router.js中配置
// 路由分成两个部分，
router.beforeEach(async (to,from,next)=>{
  if(!store.state.hasRules){
    await store.dispatch('getMenuList')
    let r=await store.dispatch('getAuthRoute')
    router.addRoutes(r)
    next()
  }else{
    next()
  }
})


new Vue({
  router,
  store,
  render: h => h(App) //render是渲染，是钩子函数
}).$mount('#app')
