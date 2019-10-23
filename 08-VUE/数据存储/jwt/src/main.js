import Vue from 'vue'
import App from './App.vue';
import router from './router.js' 
// 根文件main.js中注册store,这样所有组件都可以使用store中的数据
import store from './store.js'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

Vue.use(iView)   // use的本质是install

// import axios from "./libs/ajaxRequest"

Vue.config.productionTip = false


router.beforeEach(async (to,from,next)=>{  // beforeEach  路由切换之前执行这个钩子
  let isLogin = await store.dispatch('validate')
  // console.log(isLogin)   // true    true表示已经登录过了，token合法
  // console.log(to)  
  // to.matched.some((match)=>{
  //   return match.meta.needLogin   // 添加一个needLogin属性
  // })
  let needLogin = to.matched.some(match=> match.meta.needLogin)   
  if(needLogin){  // 需要登录
    if(isLogin){    // 已经登录过了，有token
      next()
    }else{
      next("/login")
    }
  }
  else{  // 不需要登录
    if(isLogin &&  to.path=="/login"){
      next("/")
    }else{
      next()
    }
  }
})

// 创建根实例，并配置一些挂载项
new Vue({
  router,
  store,
  render: h => h(App) //render是渲染，是钩子函数
}).$mount('#app')
