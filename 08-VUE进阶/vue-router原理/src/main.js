import Vue from 'vue'
import App from './App.vue';
import router from './router/index'   // 后面没有写默认是./router/index.js
// 根文件main.js中注册store,这样所有组件都可以使用store中的数据
// import store from './store.js'

Vue.config.productionTip = false

new Vue({
  name:'main',
  router,
  // store,
  render: h => h(App) //render是渲染，是钩子函数
}).$mount('#app')
