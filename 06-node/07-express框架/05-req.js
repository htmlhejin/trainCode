 // req和node中原生node的req不一样，这个req在原生的基础上又进行了封装，增加了一些属性和方法
const express=require("express")
const app=express()
app.get("/abc",(req,res)=>{
    // console.log(req)    // IncomingMessage{}
    // console.log(res)    //ServerResponse{}

    console.log(req.query)  // {},req可以将查询字符串变成对象，不像之前Node中通过querystring.parse那么麻烦
    console.log(req.path)   // / ,req可以得到路径名
    res.send("hello")
})

app.listen(5000)