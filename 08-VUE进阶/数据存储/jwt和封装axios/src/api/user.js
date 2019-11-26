// 存放请求的接口
import axios from "../libs/ajaxRequest"

// 暴露出一个方法,调用接口
export const getUser=()=>{
    return axios.request({
        url:"/user",
        method:"get"
    })
}

// 暴露登录方法，调用接口
export const login=(username)=>{
    return axios.request({
        url:"/login",
        method:"post",
        data:{
            username
        }
    })
}

export const validate=()=>{
    return axios.request({
        url:'/validate',
        method:"get"
    })
}