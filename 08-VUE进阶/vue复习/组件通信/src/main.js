import Vue from 'vue'
import App from './App.vue';
import router from './router.js' 
// 根文件main.js中注册store,这样所有组件都可以使用store中的数据
import store from './store.js'


Vue.config.productionTip = false

// 创建根实例，并配置一些挂载项
new Vue({
  name:'main',
  router,
  store,
  render: h => h(App) //render是渲染，是钩子函数
}).$mount('#app')
