// 自己封装一个axios
import axios from "axios"
import store from "../store"
import {getLocal} from "./local"
class AjaxRequest{
    constructor(){  // 构造函数  // new AjaxRequest时自动调用constructor方法
        // baseURL,本地配置的代理，理论上可以不用baseURL   //生产环境的话访问自己服务器的路径
        this.baseURL=process.env.NODE_ENV=="production" ? "/" : "http://localhost:3030"  // 开发环境的话路径是后端自己写的路径
        this.timeout=3000   // 请求超时时间
        this.queue={};   // 存放多次请求
    }
    // 存放很多options，包括内置的和用户传过来的
    merge(options){
        this.timiout=3000   // 请求超时时间
        // console.log(...options)
        // ...展开运算符
        return {...options,baseURL:this.baseURL,timiout:this.timiout}
    }
    // 封装拦截的方法
    setInterceptor(instance,url){  // config表示请求时传过来的数据     拦截
        // 请求拦截
        // console.log(".....")
        instance.interceptors.request.use(config=>{
            // 登录请求时会返回token，到时候把token以头的形式响应回去，  先添加一个认证的头
            config.headers.Authorization = getLocal("token");
            // console.log(this.queue)  // {}
            // console.log(Object.keys(this.queue))  // []
            if(Object.keys(this.queue).length==0){  //  只有第一次请求时加载动画
                store.commit('showLoading')
            }
            this.queue[url]=url
            return config   // 把请求拦截的信息返回，程序继续
        })
        // 响应拦截
        instance.interceptors.response.use(res=>{
            delete this.queue[url]
            if(Object.keys(this.queue).length==0){  //  第一次响应时关闭动画
                store.commit('hideLoading')
            }
            return res.data   // 把响应的数据返回
        })
    }

        // 发出请求
    request(options){
        // 创建一个axios实例
        let instance = axios.create()
        this.setInterceptor(instance,options.url)  // 进行请求拦截
        let config = this.merge(options)
        // axios执行后返回promise,instance()表示执行实例
        return instance(config)
    }
    // request("/user","post","name=z3")
}

export default new AjaxRequest  // 把对象导出去

