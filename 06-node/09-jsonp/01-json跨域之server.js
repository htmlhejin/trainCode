// 客户端自己开启的服务

const express=require("express")
const path=require("path")
let app=express()
app.use(express.static(path.join(__dirname+"public")))

app.get("/",(req,res)=>{
    // console.log(__dirname)  //D:\huashantrain\1907--1912\06-node\09-jsonp
    res.sendFile(path.join(__dirname,"public/01-json跨域之browser.html"))
})

app.listen(4444)