const express=require("express")
const app=express()
app.use("/",(req,res,next)=>{
    console.log("中间件")
    // 如果next中有参数，会执行错误处理中间件
    next("hello")
})
app.get("/",(req,res)=>{
    res.send("express~1")
})
// 错误处理中间件,里面有四个参数
app.use((err,req,res,next)=>{
    console.log(err)
})
app.listen(5000)