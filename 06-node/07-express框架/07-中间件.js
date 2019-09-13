// 所谓中间件，就是回调函数，该回调函数中有3个参数，req,res,next，和路由句柄差不多
const express=require("express")
const app=express()
// app.use  意即使用中间件
app.use("/",(req,res,next)=>{
    console.log("中间件1")
    next()
})
app.use("/",(req,res,next)=>{
    console.log("中间件2")
    next()   //如果没有next(),得不到最后响应的数据
})
app.get("/",(req,res)=>{
    res.send("你好,express")
})
app.listen(5000)
