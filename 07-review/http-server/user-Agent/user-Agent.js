// 也是一个头，根据不同的设备响应不同的项目，如移动端访问淘宝和PC端访问淘宝，页面是不同的
const http=require("http")

http.createServer((req,res)=>{
    // 如果是PC端访问，跳转到百度
    let userAgent=req.headers['user-agent']
    if(userAgent.includes("iPhone")){
        res.statusCode=302 // 临时重定向
        res.setHeader("Location","http://www.baidu.com")
        res.end()
    }else{  // 如果是移动端访问，跳转到京东
        res.statusCode=302
        res.setHeader("Location","http://www.jd.com")
        res.end()
    }
}).listen(4000)
