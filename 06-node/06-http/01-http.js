let http=require("http")
// function(req,res){}  当有请求过来时会执行这个函数
let server=http.createServer(function(req,res){
    // console.log(req)    //IncomingMessage{}
    console.log(req.url)    // /  后端的路由，一个路由对应一个资源
})
let port=3000
server.listen(port,()=>{
    console.log(`服务器运行在${port}端口`)
})