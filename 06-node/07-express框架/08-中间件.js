const express=require("express")
const app=express()
// app.use([path])

app.use("/",(req,res,next)=>{
    console.log("中间件1")
    next()
})
app.use("/my",(req,res,next)=>{
    console.log("中间件2")
    next()
})
// 如果没有写路径，所有的请求都会使用这个中间件, 即访问/时打印出"所有请求都使用该中间件"，访问/my时也会打印出"所有请求都使用该中间件"
// app.use(()=>{
//     console.log("所有请求都使用该中间件")
        // next()
// })
app.use("*",(req,res,next)=>{
    console.log("所有请求都使用该中间件")
    next()
})

app.get("/",(req,res)=>{
    res.send("响应数据")
})
// 请求/my时，中间件1，中间件2都打印出来，因为 /my 也访问到了 /
app.get("/my",(req,res)=>{
    res.send("响应数据my")
})

app.listen(5000)