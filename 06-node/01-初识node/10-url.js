const http=require('http')
const url=require('url')
// 每改变一次服务器代码需要重启服务器
let server=http.createServer((req,res)=>{
    // 通过req.url得到在浏览器输入的路径
    // http://localhost:3000/abc?name=lll
    console.log(req.url)    //在服务器端打印  /
    // parse--解析，可以通过parse方法解析url,解析成一个对象，方便拿到路径中的路径名pathname和查询字符串query
    let {pathname,query}=url.parse(req.url)
    console.log(pathname,query) ///abc  name=lll
    // console.log(pathname,query.name)   //解析出来的查询字符串不是一个对象
    res.write("hello")
    res.end()
})
server.listen(3000,()=>{
    console.log("服务器已启动...")
})
