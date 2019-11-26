import Vue from 'vue'
import App from './App.vue';

import router from './router'

// 根文件main.js中注册store,这样所有组件都可以使用store中的数据
import store from './store'

Vue.config.productionTip = false
import "bootstrap/dist/css/bootstrap.css"

router.beforeEach((to,from,next)=>{
  console.log("main中的钩子beforeEach")
  next()
})
// 比如路径更新时，浏览器会解析，解析时会跳转的钩子
router.beforeResolve((to,from,next)=>{
  console.log("beforeResolve")
  next()
})
router.afterEach((to,from,next)=>{
  console.log("afterEach")
})


// 任何时候先走main中的钩子，
// 跳转到新页面，先走main中的钩子beforeEach，再走配置文件router中的钩子，再走组件中的钩子，再走afterEach
// 如果改变路径，路由会解析，解析后先走main中的钩子，再走组件中的钩子，再走main中的beforeResolve(路由解析时会跳转的钩子)
new Vue({
  router,
  store,
  render: h => h(App) //render是渲染，是钩子函数
}).$mount('#app')
