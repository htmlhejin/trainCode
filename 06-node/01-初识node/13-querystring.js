// querystring--把query解析成对象

const http=require('http')
const url=require('url')    //找到路径名pathname和查询字符串query
const querystring=require('querystring')  //把字符串转成对象
// 每改变一次服务器代码需要重启服务器
let server=http.createServer((req,res)=>{
    let {pathname}=url.parse(req.url)
    // console.log(pathname)  ///abc
    if(pathname="/abc"){
        let arr=[]
        // 需要接收post的请求正文  --data
        // 每流一滴水触发一次data事件，水流完了触发end事件
        req.on("data",(chunk)=>{
            arr.push(chunk)
        })
        req.on("end",()=>{
            // console.log(arr)    //[ <Buffer 61 3d 31 26 62 3d 32 26 63 3d 33> ]
            
            // let str=Buffer.concat(arr)  //concat--连接Buffer
            
            // console.log(str)    //<Buffer 61 3d 31 26 62 3d 32 26 63 3d 33>
            let str=Buffer.concat(arr).toString()
            // console.log(str) //a=1&b=2&c=3
            
            // 服务器把字符串转成对象响应给客户端
            let obj = querystring.parse(str)
            // res.write(obj)  //报错，不能直接打印对象
            console.log(obj)   //{ a: '1', b: '2', c: '3' }
            // res.write(JSON.stringify(obj))
            res.write(str)
            res.end()
        })
    }
})
server.listen(3000,()=>{
    console.log("服务器已启动...")
})
