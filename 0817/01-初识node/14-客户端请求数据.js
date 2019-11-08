let http=require('http')
let url=require('url')
let server=http.createServer((req,res)=>{
    let {pathname}=url.parse(req.url)
    // 加上头部，把响应的数据转换成utf8模式
    res.setHeader("content-type","text/html;charset=utf-8")
    if(pathname=='/shop')
    res.end("<h1>商店页面</h1>")
    if(pathname=='/info')
    res.end("<h1>个人中心页面</h1>")
    if(pathname=='/cart')
    res.end("<h1>购物车页面</h1>")
})
server.listen(3000,()=>{
    console.log("服务器启动")
})