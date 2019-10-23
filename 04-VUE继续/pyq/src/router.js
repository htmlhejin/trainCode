import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Register from './views/Register'
import Login from './views/Login'
import AddressBook from './views/AddressBook'

Vue.use(Router)

const router= new Router({
    mode:'history',
    base:process.env.BASE_URL,
    routes:[
      {
          path:'/',
          redirect:Index
      },
      {
          path:'/index',
          name:'index',
          component:Index,
          children:[
            {
                path:'/',
                name:'wchart',
                component:()=>import("./views/Wchart.vue")
            },
            {
                path:'/wchart',
                name:'wchart',
                component:()=>import("./views/Wchart.vue")
            },
            {
                path:'/abook',
                name:'abook',
                component:AddressBook
            },
            {
                path:'/find',
                name:'find',
                component:()=>import("./views/Find.vue")
            },
            {
                path:'/mine',
                name:'mine',
                component:()=>import("./views/Mine.vue")
            }
          ]
      },
      {
        path:'/register',
        name:'register',
        component:Register
    },
    {
        path:'/login',
        name:'login',
        component:Login
    },
    
    ]
})


export default router