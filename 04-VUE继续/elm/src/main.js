import Vue from 'vue'
import App from './App.vue'
import router from './router'   //引入路由
import store from './store'     //引入状态
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// Indicator是请求的一个动画
import {Indicator} from 'mint-ui'

Vue.config.productionTip = false
Vue.prototype.$axios=axios

// 创建并挂载根实例
new Vue({
  router, //通过router注入路由，整个应用都有路由功能，任何组件通过this.$router.xxx可以访问路由器
  store,  //通过store引入状态，所有组件都可以访问状态
  render: h => h(App)
}).$mount('#app')


// 请求拦截
axios.interceptors.request.use(
  config=>{
    Indicator.open();
    return config
  },
  error=>{
    return Promise.reject(error)
  }
);

axios.interceptors.response.use(
  response=>{
    Indicator.close();
    return response
  },
  error=>{
    Indicator.close();
    return Promise.reject(error)
  }
);
