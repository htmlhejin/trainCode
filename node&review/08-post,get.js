const http=require("http")
// 浏览器可以请求数据，js代码也可以
// 利用js代码创建一个客户端，客户端去请求代码
let client=http.request({
    hostname:"localhost",
    port:3000,
    path:"/abc",   //
    method:"post",
    headers:{
        "Content-Type":"application/x-www-form-urlencoded"
    }
})
// post请求，请求正文自己写，提交
client.end("a=1&b=2")   //请求正文
