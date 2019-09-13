const express=require("express")
const bodyParser=require("body-parser")
const app=express()
// 使用第三方包
// 以表单的形式传过来
app.use(bodyParser.urlencoded({extended:false}))
// 以json的形式传过来
app.use(bodyParser.json())

app.post("/checkUser",(req,res)=>{
    // 得到发送请求时提交的数据,需要一个第三方包  body-parser
    res.send("77777")
    // 通过req.body得到数据
    // console.log(req.body)   //{ name: 'wangcai', age: '100', score: '60' }
    console.log(req.body.name)  //wangcai
    console.log(req.body.age)   //100
    console.log(req.body.score) //60
})

app.listen(5000)