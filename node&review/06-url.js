const http=require("http")
const url=require("url")
let server = http.createServer((req,res)=>{
    res.end("hello")
    console.log(req.url)    ///abc?name=wangcai
    let {pathname,query}=url.parse(req.url)
    console.log(pathname)   ///abc
    console.log(query)      //name=wangcai
})
server.listen(3000)