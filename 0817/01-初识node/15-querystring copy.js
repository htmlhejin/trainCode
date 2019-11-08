// querystring--把query解析成对象

const http=require('http')
const url=require('url')    //找到路径名pathname和查询字符串query
const querystring=require('querystring')
// 每改变一次服务器代码需要重启服务器
let server=http.createServer((req,res)=>{
    let {pathname}=url.parse(req.url)
    let arr=[]
    // console.log(pathname)  // /abc
    if(pathname=='/abc')
    req.on("data",(chunk)=>{
        arr.push(chunk) 
    })
    req.on("end",()=>{
        // console.log(arr)  //[ <Buffer 61 3d 31 26 62 3d 32 26 63 3d 33> ]
       let concat=Buffer.concat(arr)
    //    console.log(concat)  //<Buffer 61 3d 31 26 62 3d 32 26 63 3d 33>
        console.log(concat.toString())  //a=1&b=2&c=3
        res.write(concat)
        res.end()
    })
})
server.listen(3000,()=>{
    console.log("服务器已启动...")
})
