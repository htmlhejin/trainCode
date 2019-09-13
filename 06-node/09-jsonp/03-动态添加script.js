const express=require("express")
const path=require("path")
const app=express()

// console.log(__dirname)  
//D:\huashantrain\1907--1912\06-node\09-jsonp

// console.log(path.join(__dirname,"public"))
// D:\huashantrain\1907--1912\06-node\09-jsonp\public

// app.use(express.static(path.join(__dirname,"/public")))

// console.log(path.join(__dirname,"/public"))
// D:\huashantrain\1907--1912\06-node\09-jsonp\public

app.get("/jsonp",(req,res)=>{
    // res.send("alert('hello')")  //返回js代码  

    // res.send("hello")   
    // jsonp:1 Uncaught ReferenceError: hello is not defined
    // at jsonp:1 

    // 浏览器得到我们定义的函数名，然后可以做出响应
    let f=req.query.callback
    res.send(f+"("+99+")")
})
    //  目前，我们是在服务端输出js代码，在浏览器端并不能拿到返回的数据
    // 我们需要定义一个函数，请求时以query方式带过去，告诉浏览器函数名，这样就可以拿到返回的数据


app.listen(3000)