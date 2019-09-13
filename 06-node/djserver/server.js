// 接口文件

const express=require("express")
// const mongoose=require("./model/db")
const mongoose=require("mongoose")
const bodyParser=require("body-parser") 
// 假如token没有过期，token的生命周期内用户又去登录，此时验证一下token，如果有token，不需要登录，直接跳到首页面即可
// passport用来验证token,也可以验证其他很多东西
const passport =require("passport")
let app=express()



// 连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/djcms").then(()=>{
    console.log(`数据库连接成功`)
}).catch(err=>{
    console.log(err)
})

//引入自定义模块
const users=require('./routes/api/users')
const profile=require("./routes/api/profile")
const profile2=require("./routes/api/profile2")



// 配置body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// 一级路由
app.use("/api/users",users)
app.use("/api/profile",profile)
app.use("/api/profile2",profile2)

// 配置passport
app.use(passport.initialize())  // 初始化passport
// 配置passport非常繁琐，把它专门抽离出去，然后再引进来
// 导出的是一个函数，引入的时候调用这个函数，把passport作为参数传递过去，然后进行配置
require("./config/passport")(passport)  // 引入配置文件

let port=3000
app.listen(port,()=>{
    console.log(`server is running on ${port}端口`)
})