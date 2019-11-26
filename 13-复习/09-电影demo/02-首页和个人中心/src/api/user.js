import axios from "@/utils/axiosRequest"

// 封装一个是否登录的方法
export const login = (user)=>{
   return axios.request({
       url:'/login',
       //  post请求需要注明method
       method:'POST',
       data:user
   })
}

// 封装一个验证登录的方法
export const validate = ()=>{
    return axios.request({
        url:'/validate'
    })
 }