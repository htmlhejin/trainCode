// 封装首页中的请求方法
// 使用自己封装的axios
import axios from "../utils/axiosRequest"
import store from "../store"

// 封装电影分类的方法   ,看代码可知该方法返回一个promise
// 封装电影分类的方法 
export const ajaxCategory = ()=>{
    return axios.request({
        url:"/category"
    })
}

// 封装请求轮播图的方法
export const ajaxSlides = ()=>{
    return axios.request({
        url:"/slides"
    })
}

// 封装请求电影列表的方法
export const ajaxMovieList = (size,offset)=>{
    // console.log(store.state)
    return axios.request({
        url:`/lessonList/${store.state.home.currentMovie}?size=${size}&offset=${offset}`
    })
}

// ajaxRequest().then()