const express=require("express")
const app=express()

// 路由句柄就是回调函数（req,res）=>{}
// app.get("/my",function(req,res){
//     res.send("my1")  //my1,只执行第一个句柄
// },function(req,res){
//     res.send("my2")
// })
// 只响应my1，当设置两个回调函数时，第二个回调函数不执行，如果想执行，需要在第一个回调函数中调用next()

// 这里的req,res在原生基础上又进行了封装
app.get("/my",function(req,res,next){
    // res.send 封装了res.setHeader(), res.write(),res.end()
    res.send("my1")
    next()
},function(req,res){
    // res.send 封装了res.setHeader(), res.write(),res.end()
    // res.send("my2")
    console.log("my6")  //my6
})
// 结果仍只执行第一个回调    Cannot set headers after they are sent to the client

app.listen(5000)