import Vue from 'vue'
import App from './App.vue';

import router from './router'

// 根文件main.js中注册store,这样所有组件都可以使用store中的数据
import store from './store'

Vue.config.productionTip = false
import "bootstrap/dist/css/bootstrap.css"





new Vue({
  router,
  store,
  render: h => h(App) //render是渲染，是钩子函数
}).$mount('#app')
