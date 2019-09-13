// 作为回调函数的第二个参数，res在原生node的基础上又进行了封装，增加了一些方法和属性
const express=require("express")
const path=require("path")
const app=express()
app.get("/my",(req,res)=>{
    // res.send("hello my")  //hello my  //可以是普通字符串
    // res.send("<h1>express</h1>") //express    //也可以是html标签，不需要写其他的头信息

    //可以发送文件夹
    // console.log(__dirname)  //D:\huashantrain\1907--1912\0820
    // res.sendFile(__dirname + "/06-indx.html") // 前面没有. D:\huashantrain\1907--1912\0820\06-indx.html 
    //得到// vue
         // react

    // 有时候文件名前面的/忘记写，可以使用join
    // res.sendFile(path.join(__dirname,"06-indx.html"))

    // 可以发送json格式的字符串
    // res.json({name:"haha",age:10})  //{"name":"haha","age":10}

    // 可以重定向
    res.redirect('/login')
})
app.get("/login",(req,res)=>{
    res.send("登陆页面")
})

app.listen(5000)