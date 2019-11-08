import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// 引入富文本
import VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

Vue.use(VueQuillEditor);

// 请求拦截 设置统一header
  axios.interceptors.request.use(config => {
    // 加载
    if (localStorage.eleToken)
      config.headers.Authorization = localStorage.eleToken
       return config
      console.log(config)
  }, error => {
    return Promise.reject(error)
  })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
