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
        arr.push(`${key}=${value};${opts.join(";")}`)
        // res.setHeader("Set-Cookie","name=wangcai;max-age=10;")
        res.setHeader("Set-Cookie",arr)
    }

    // 获取cookie,浏览器再次请求带着cookie,服务器根据请求的数据得获取cookie
    req.getCookie=function(key){
        let obj=queryString.parse(req.headers.cookie,";");
        return obj[key];
    }

    // 写一个案例，显示第几次访问服务器
    if(req.url==="/visit"){
        res.setHeader("Content-type","text/plain;charset=utf8");  // 纯文本格式显示，避免乱码
        let visit = req.getCookie("visit")   
        // cookie中添加一个cookie字段，显示访问次数
        if(visit){  
            // 再次访问时visit+1,显示第几次访问
            // console.log(visit-0+1)  // 2
            // console.log(typeof visit-0+1)   // NaN
            visit=visit-0+1;   // 次数加1
            res.setCookie("visit",visit+"",{maxAge:10})   // cookie中的值也要变   visit+""表示变成字符串,cookie中的字段的值都是字符串，不变也ok

        }else{   // 第一次访问时没有visit字段,设置cookie
            visit = 1
            res.setCookie("visit","1")
        }
        res.end(`这是第${visit}次访问`)
    }
    if(req.url==="/write"){
        res.setCookie("name","wangcai")  // 给浏览器种植cookie
        res.setCookie("age","100")   // 给浏览器种植cookie

        res.end("write ok ")
        return 
    }
    if(req.url==="/read"){
        // 再次请求时，服务器就可以从请求头中得到cookie，把cookie响应回去
        // res.end(req.headers.cookie || "empty" )
        res.end(req.getCookie("name") || "empty")

    }
}).listen(3030)