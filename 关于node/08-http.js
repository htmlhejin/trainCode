const http=require('http')
// 利用http模块可以创建一个服务器,用createServer这个api
let server=http.createServer((req,res)=>{   //req表示请求，res表示响应
    res.write("hello")  //响应hello 修改了服务器的代码需要重新启动服务器
    res.end()   //响应结束
})
// 监听服务器
server.listen(3000,()=>{    //端口随便写
    console.log("服务器已启动...")
})