// 放一些路由的钩子
import * as types from "@/store/action-types"
import store from "@/store"

export default {
    // 取消请求
    cancelToken: (to, from, next) => {
        store.commit(types.CLEAR_TOKEN)
        // console.log('cancelToken')
        next()
    },
    // 允许
    permission: async (to, from, next) => {
        // console.log(to)
        // // needLogin表示访问的页面是否需要登录
        let needLogin = to.matched.some(item => item.meta.needLogin)
        let flag = await store.dispatch(types.VALIDATE)
        console.log(needLogin,flag)
        if(needLogin){
            if(!flag){
                next("/login")
            }else{
                next()
            }
        }else{
            if(to.name === 'login'){
                next("/")
            }else{
                next()
            }
        }
        // if (!store.state.hasPermission) {
        //     // 是否需要登录   没有权限
        //     let flag = await store.dispatch(types.VALIDATE) // flag表示是否登录过
        //     // needLogin表示是否需要登录
        //     if (needLogin) {
        //         // 需要登录
        //         if (!flag) {
        //             // 没有登录
        //             next("/login")
        //         } else {
        //             // 登录过来 
        //             next()
        //         }
        //     } else {
        //         // 不需要登录
        //         next()
        //     }
        // } else {
        //     // 有权限  登录过，但是还要去访问login 
        //     if (to.name === "login") {
        //         next("/")
        //     } else {
        //         next()
        //     }
        // }
        next()
    }
}