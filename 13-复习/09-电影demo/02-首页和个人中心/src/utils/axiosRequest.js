import axios from "axios"
import { Toast } from "cube-ui"
import * as types from "@/store/action-types"
import store from "@/store"

// 请求拦截  token 
// 响应拦截 res.data 
// 保证每一次请求的唯一
class AxiosRequest {
    constructor() {
        // this.baseURL = process.env.NODE_ENV !== "production" ? "http://localhost:3000/api" : "http:api.xxx.com"
        this.baseURL = "http://localhost:3000/api"
        this.timeout = 3000;
        // 在当前的ajax对象，挂一个toast
        this.toast = Toast.$create({
            txt: '正在加载中...',
            time: 0,
        })
        this.queue = {}; // 保存着请求的url
    }
    setInterceptor(instance, url) {
        instance.interceptors.request.use((config) => {
            config.headers.token = localStorage.getItem('token') || ''
            // 有的路由需要缓存，切换了路由之后，如果再切换到已经加载过的页面，就不再重新请求，因为数据已经缓存起来
            // console.log(".........")
            // 给每一次请求都带上一个取消请求的方法，切换tabbar时这个方法执行，然后清空这个方法
            let CancelToken = axios.CancelToken  // 创建一个取消请求的构造器
            // console.log('CancelToken--->',CancelToken)
            // CancelToken---> ƒ CancelToken(executor) {}
            // 给每一个请求都带上这样一个构造器
            config.cancelToken = new CancelToken(function executor(c) {
                // console.log('c--->',c)  // c就是构造函数CancelToken中自带的取消请求的方法
                // c---> ƒ cancel(message) {}
                // 把取消请求也都存起来
                store.commit(types.PUSH_TOKEN,c)
            })
            // console.log(config)
                // 如果一个请求发送多次，那么只有第一次请求，显示动画
            if (Object.keys(this.queue).length === 0) {
                this.toast.show();
            }
            this.queue[url] = url;
            return config;
        }, error => {
            return Promise.reject(error);
        })
        instance.interceptors.response.use((response) => {
            delete this.queue[url]
            if (Object.keys(this.queue).length === 0) {
                this.toast.hide()
            }
            if (response.data.code === 0) {
                return response.data.data
            }
        }, function (error) {
            delete this.queue[url]
            if (Object.keys(this.queue).length === 0) {
                this.toast.hide()
            }
            return Promise.reject(error);
        });
    }
    request(options) {
        let instance = axios.create()
        let config = {
            ...options,
            baseURL: this.baseURL,
            timeout: this.timeout
        }
        this.setInterceptor(instance, options.url)
        return instance(config)
    }
}
export default new AxiosRequest;
