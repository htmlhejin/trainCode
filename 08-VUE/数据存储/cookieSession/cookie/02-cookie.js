const http=require("http")
const queryString = require("querystring")
http.createServer((req,res)=>{
    let arr=[];
    // 设置cookie
    res.setCookie=function(key,value,options={}){
        // res.setHeader("Set-Cookie","name=wangcai;path='/write';") 
        let opts=[];
        if(options.domain){
            opts.push(`domain=${options.domain}`)
        }
        if(options.path){
            opts.push(`path=${options.path}`)
        }
        if(options.maxAge){
            opts.push(`max-age=${options.maxAge}`)
        }
        if(options.httpOnly){
            opts.push(`httpOnly=${options.httpOnly}`)
        }
        // console.log(opts)  // [ 'max-age=10' ]
        // console.log(opts.join(";"))  // max-age=10;httpOnly=true
        // console.log(opts.join(","))  // max-age=10,httpOnly=true
        // opts.join(";")   // 把数组转成字符串，并以;分割
        arr.push(`${key}=${value};${opts.join(";")}`)
        // console.log(arr);  // [ 'name=wangcai;' ]
        // console.log(arr.join(""))   // name=wangcai;age=100;
        // res.setHeader("Set-Cookie","name=wangcai;max-age=10;")
        // let arr2=arr.join("")   // res.setHeader("Set-Cookie",arr2)只能设置一个cookie
        res.setHeader("Set-Cookie",arr)
        // console.log(arr[0])   // name=wangcai;httpOnly=true
        // res.setHeader("Set-Cookie",arr[0])
    }

    // 获取cookie,浏览器再次请求带着cookie,服务器根据请求的数据得获取cookie
    req.getCookie=function(key){
        // console.log(req.headers)
         // { host: 'localhost:3030',
        //   connection: 'keep-alive',
        //   'cache-control': 'max-age=0',
        //   'upgrade-insecure-requests': '1',
        //   'user-agent':
        //    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
        //   accept:
        //    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        //   'accept-encoding': 'gzip, deflate, br',
        //   'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        //   cookie: 'name=wangcai' }

        // console.log(req.headers.cookie)   // name=wangcai
        // console.log(typeof req.headers.cookie)   // string

        // 要获取cookie,需要把cookie 字符串转成对象
        // console.log(queryString.parse(req.headers.cookie))   // [Object: null prototype] { name: 'wangcai; age=100' }
        // console.log(queryString.parse(req.headers.cookie,";"))   // [Object: null prototype] { name: 'wangcai', ' age': '100' }
        let obj=queryString.parse(req.headers.cookie,";");
        // console.log(obj)  // undefined
        // console.log(typeof obj)
        return obj[key];
    }


    if(req.url==="/write"){
        // res.setCookie("name=wangcai;max-age=10")
        res.setCookie("name","wangcai")  // 给浏览器种植cookie
        res.setCookie("age","100")   // 给浏览器种植cookie
        // res.setCookie("name","wangcai",{maxAge:10,httpOnly:true})   
        // res.setCookie("name","wangcai",{httpOnly:true})   
        // res.setCookie("name","wangcai",{path:"/write"});

        res.end("write ok ")
        return 
    }
    if(req.url==="/read"){
        req.getCookie("name")
        // 再次请求时，服务器就可以从请求头中得到cookie，把cookie响应回去
        // res.end(req.headers.cookie || "empty" )
        res.end(req.getCookie("name") || "empty")

    }
}).listen(3030)