const querystring=require("querystring")
const http=require("http")
const url=require("url")
let server = http.createServer((req,res)=>{
    res.end("hello")
    // 把url解析成一个对象，可以得到pathname,query
    let {pathname,query}=url.parse(req.url)
    console.log(query)  //name=wangcai&age=100
    let r=querystring.parse(query)
    console.log(r)  //{ name: 'wangcai', age: '100' }
})
server.listen(3000)