import axios from "axios"
import {Loading,Message} from "element-ui"
import router from "./router"

let loading;
// 开始加载动画
function startLoading(){
    loading=Loading.service({
        lock:true,
        text:"拼命加载中...",
        background:"rgba(0,0,0,0.5)"
    })
}

// 结束加载
function endLoading(){
    loading.close()
}

// 加载动画之前的请求拦截
axios.interceptors.request.use(config=>{
    startLoading()
    // 以后请求时都带着token
    if(localStorage.eleToken){
        config.headers.Authorization=localStorage.eleToken
    }
    return config
},error=>{
    return Promise.reject(error)
})

// 消息提醒之前的响应拦截
axios.interceptors.response.use(response=>{
    endLoading()
    return response;
},error=>{
    endLoading()
    Message.error(error.response.data)
    
    // 看一下token是否过期
    const {status}=error.response
    if(status==401){
        Message.error("token过期了，请重新登陆")
        localStorage.removeItem("eletoken")
        this.$router.push("/login")
    }
    return Promise.reject(error)
})
export default axios;