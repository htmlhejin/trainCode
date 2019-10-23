import axios from "axios"
import router from "./router"



// 加载动画之前的请求拦截
axios.interceptors.request.use(config=>{
    // 以后请求时都带着token
    if(localStorage.wxToken){
        config.headers.Authorization=localStorage.wxToken
        return config
    } 
},error=>{
    return Promise.reject(error)
})

// 消息提醒之前的响应拦截
axios.interceptors.response.use(response=>{
    return response
},error=>{
    // // 看一下token是否过期
    const {status} = error.response
    if(status==401){
        alert("token过期了，请重新登陆")
        localStorage.removeItem('wxToken')
        router.push('/login')
    }else
        alert(error.response.data)
    
    return Promise.reject(error)
})
export default axios;