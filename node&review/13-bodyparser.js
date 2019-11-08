const express=require("express")
const bodyParser=require("body-parser")
const app=express();

app.use(bodyParser.urlencoded({extended:false})),
app.use(bodyParser.json()),

app.post("/user",(req,res)=>{
    // console.log(req.body)   //{ name: 'wangcai', age: '100' }
    res.send("接收到")
}),

app.listen(3000)

// 每次改动代码需要重启服务器