let http=require('http')
// http模块创建一个客户端
let client=http.request({
    // 在客户端里可以配置域名，路径等
    hostname:"localhost",
    port:3000,
    path:'/abc',
    // 路径
    // name="hhh"&age=10--请求参数,又叫请求正文
    // get请求的请求正文在?后面加
    // path:"/abc?name='hhh'&age=10",
    method:"post",
    // 请求头
    headers:{
        "Content-type":"application/x-www-form-urlencode"
    }
})
    // 通过客户端.end可以把请求发送出去
    // a=1&b=2&c=3---请求正文，post请求正文自己写
client.end("a=1&b=2&c=3")
