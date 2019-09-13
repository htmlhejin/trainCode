// express:快速的，迅速的 意思,基于node.js平台，快速，开放，极简的web开发框架
// 载入express模块
const express=require("express")
// 利用express创建一个应用
let app=express()
// 后端中一个路由对应一个资源

// 给一个请求，交给谁来处理，交给的过程就是路由
// 应用级别的路由，在app对象上设置
app.get("/",function(req,res){
    // res.end("hello express")
    res.send("hello express")
})
app.get("/user",function(req,res){
    res.send("用户")
})
app.get("/list",function(req,res){
    res.send("列表")
})

// 监听一个端口
app.listen(5000)