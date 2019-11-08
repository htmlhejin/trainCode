// const express = require("express")
// const app = express();
// // 中间件  执行是有顺序的
// app.use("/",function(req,res,next){
//     console.log("这是一个中间件2...")
//     next()
// })
// app.use("/abc",function(req,res,next){
//     console.log("这是一个中间件1...")
//     next()
// })

// // 访问/abc时也访问到了/,先执行哪一个与中间件的顺序有关，如果/abc在/前面，先打印这是一个中间件1...
// app.get("/abc",function(req,res){
//     res.send("你好，express")
// })
// app.listen(3000)


const express = require("express")
const app = express();
// 中间件  执行是有顺序的
app.use(function(req,res,next){
    console.log("这是一个中间件2...")
    next(new Error("hello"))
})

// 访问/abc时也访问到了/,先执行哪一个与中间件的顺序有关，如果/abc在/前面，先打印这是一个中间件1...
app.get("/",function(req,res){
    res.send("你好，express")
})
app.use(function(err,req,res,next){
    console.log(err)    //Error: hello
})
app.listen(3000)