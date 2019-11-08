const http=require("http")
http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("welcome ")
    }
    if(req.url==="/write"){
        // res.setHeader("Set-Cookie","name=wangcai")   // 种植cookie
        // res.setHeader("Set-Cookie","name=wangcai;domain=.wangcai.cn;")   //  设置domain，表示哪些域名可以访问
        res.setHeader("Set-Cookie","name=wangcai;path='/write';")   //  设置path,表示哪些路径可以访问，不设置默认是/，表示只要是以/打头的路径都可以访问
        // res.setHeader("Set-Cookie","name=wangcai;max-age=10;")   //  max-age表示cookie存在时间，不设置默认是session，session意即会话结束时cookie消亡，即浏览器关闭时，cookie消亡
        // res.setHeader("Set-Cookie","name=wangcai;httpOnly=true")  //  httpOnly不设置默认是false,如果设置为true,就不能通过js脚本修改cookie的值，可以有效防止xss的攻击
        // res.setHeader("Set-Cookie",["name=wangcai","age=10"])   // 如果种植多个cookie，以数组的形式响应
        res.end("write ok ")
        return 
    }
    if(req.url==="/read"){
        //再次请求时，服务器就可以从请求头中得到cookie，把cookie响应回去
        res.end(req.headers.cookie || "empty" )
    }
}).listen(3030)