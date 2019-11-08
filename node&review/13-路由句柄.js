const express=require("express")
const app=express()
//路由句柄其实就是回调函数，就是中间件
app.get("/abc",(req,res)=>{
    // console.log(req.url)    // /abc?name=wangacai
    console.log(req.path)    ///abc
    console.log(req.query)    // { name: 'wangacai' }
    // res.send("hello")
})

app.listen(3000)