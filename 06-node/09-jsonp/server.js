// 服务器端自己开启的服务

const express=require("express")
let app=express()
app.get("/newsList",(req,res)=>{
    // res.json({
    //     title:"新闻1",
    //     content:"新闻内容"
    // })

    // 函数名
    // let cb=req.query.callback;
    // res.send(cb+"("+JSON.stringify({ title:'新闻1',content:'新闻内容'})+")")

    // express中针对jsonp格式的返回，直接封装了一个jsonp的方法，将数据返回给浏览器，这种方法就是上面返回函数调用的语法糖
    res.jsonp({ title:'新闻1',content:'新闻内容'})
})
app.listen(3333)

// 没有了跨域问题但是又语法错误，原因是我们拿到的是json数据，不是jsonp包装好的数据，而浏览器是根据jsonp协议去解析结果的，所以报错
// Request URL: http://localhost:3333/newsList?callback=jQuery111309474602978520825_1567341818032&_=1567341818033
// 如果想要jsonp包装好的数据，jsonp规定  返回函数调用，将数据作为函数的参数返回给浏览器

// jsonp方式只支持GET请求，HTTP请求  