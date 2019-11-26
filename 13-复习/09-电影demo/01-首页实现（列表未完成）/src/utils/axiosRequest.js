import axios from "axios"
import { Toast } from "cube-ui"

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
    // 设置拦截
    setInterceptor(instance, url) {
        // 请求拦截
        instance.interceptors.request.use((config) => {
            // DOTO...
            if (Object.keys(this.queue).length === 0) {
                // 显示出loading 
                this.toast.show();
            }
            this.queue[url] = url;
            // console.log("请求拦截")
            return config;
        }, error => {
            // DOTO...
            return Promise.reject(error);
        })
        // 响应拦截
        instance.interceptors.response.use((response) => {
            // DOTO...
            // 删除queue中的url
            delete this.queue[url]
            if (Object.keys(this.queue).length === 0) {
                // 显示出loading 
                this.toast.hide()
            }

            // console.log("响应拦截")
            if (response.data.code === 0) {
                return response.data.data
                // return new Promise((resolve, reject) => {
                    // setTimeout(() => {
                        // resolve(response.data.data);  // 过滤一下数据
                    // }, 3000)
                // })
            }
        }, function (error) {
            // DOTO...
            delete this.queue[url]
            if (Object.keys(this.queue).length === 0) {
                // 显示出loading 
                this.toast.hide()
            }
            return Promise.reject(error);
        });
    }
    request(options) {
        // instance 就可以发出一个请求 返回promise
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
// 导出ajax对象
export default new AxiosRequest;

// let ax = new AxiosRequest()
// ax.request({url:"/getnews",methods:"post","name:"xx"}).then(data=>{})