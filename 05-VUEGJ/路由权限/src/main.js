import Vue from 'vue'
import App from './App.vue';

import router from './router'

// 根文件main.js中注册store,这样所有组件都可以使用store中的数据
import store from './store'

Vue.config.productionTip = false
import "bootstrap/dist/css/bootstrap.css"

router.beforeEach((to,from,next)=>{
  let flag= to.matched.some(match=>match.meta && match.meta.needLogin);
  let isLogin=localStorage.getItem('login');
  if(flag){   //需要登陆
    if(isLogin){    //有标识
      if(to.name=='login'){
        next('/')
      }else{
        next()
      }
    }else{
      next('/login')
    }
  }else if(to.name=='login'){ //不需要登陆却访问login
    if(isLogin){
      next('/')
    }else{
      next()
    }
  }else{
    next()
  }
})

// router.beforeEach((to,from,next)=>{
//   // console.log(to)
//   // 判断哪些路径需要校验，哪些不需要，match中有meta并且需要登陆的
//   let flag= to.matched.some(match=>match.meta && match.meta.needLogin);
//   if(flag){ //需要登陆
//     // 先判断是否有标识
//     let isLogin=localStorage.getItem('login');
//     if(isLogin){
//       next()    //有一个缺点就是登陆之后还可以进登陆页面，else if优化
//     }else{
//       next('/login')
//     }
//   }else{
//     next()
//   } 
// })

// 任何时候先走main中的钩子，
// 跳转到新页面，先走main中的钩子beforeEach，再走配置文件router中的钩子，再走组件中的钩子，再走afterEach
// 如果改变路径，路由会解析，解析后先走main中的钩子，再走组件中的钩子，再走main中的beforeResolve(路由解析时会跳转的钩子)
new Vue({
  router,
  store,
  render: h => h(App) //render是渲染，是钩子函数
}).$mount('#app')
