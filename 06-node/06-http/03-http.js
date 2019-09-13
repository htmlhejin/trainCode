// 模拟post请求
let http = require("http")
let url = require("url")
let querystring = require("querystring")
let server = http.createServer(function (req, res) {
    //    req是可读流
    // 通过postman发送请求，用流接收
    let arr = []
    req.on("data", (chunk) => {
        arr.push(chunk)
    })
    req.on("end",()=>{
        let str=Buffer.concat(arr).toString()
        // console.log(str)    //name=wangcai&age=100

        let strObj=querystring.parse(str)
        console.log(strObj) // { name: 'wangcai', age: '100' }

        // 状态码
        res.statusCode=200
        res.setHeader("a","1")
        // 把对象转成字符串
        // res.end()
        // res.end(JSON.stringify(strObj))  //在postman中显示
    })

})
let port = 5000
server.listen(port, () => {
    console.log(`服务器运行在${port}端口`)
})