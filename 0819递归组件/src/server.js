// express用来写接口
let express=require('express')
// 创建应用
let app=express()
// 获取数据
app.get("/getUser",(req,res)=>{
    res.json({name:"hello"})
})
// 监听端口
app.listen(3030)
// 本地接口域名都是localhost