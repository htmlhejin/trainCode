let http=require('http')
// 创建客户端
let server=http.request({
    hostname:'localhost',
    port:3000,
    path:'/abc',
    headers:{
        "Content-type":"application/x-www-form-urlencode"
    },
    method:'post',
})
server.end("a=1&b=2&c=3")