// querystring--把query解析成对象

const http=require('http')
const url=require('url')    //找到路径名pathname和查询字符串query
const querystring=require('querystring')    //解析查询字符串query
// 每改变一次服务器代码需要重启服务器
let server=http.createServer((req,res)=>{
    let {pathname,query}=url.parse(req.url)
    let r=querystring.parse(query)
    console.log(r)  //[Object: null prototype] { name: 'hhh' }
    console.log(r.name)     //hhh
    res.write("hello")
    res.end()
})
server.listen(3000,()=>{
    console.log("服务器已启动...")
})
