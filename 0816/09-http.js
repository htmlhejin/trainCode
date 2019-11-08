// 引入http模块
const http=require('http')
// http://  协议 也有https
// localhost:域名
// 3000:端口
// /abc:路径名
// name="zhangsan" :查询字符串
//  /abc/name="zhangsan"  路径=路径名+查询字符串
// #5678  hash
// http://localhost:3000/abc?name="zhangsan"#5678 路径名和查询字符串之间用?隔开
let server=http.createServer((req,res)=>{   //req表示请求，res表示响应
    res.write("hello")  //响应hello 修改了服务器的代码需要重新启动服务器
    res.end()   //响应结束
})
// 监听服务器
server.listen(3000,()=>{    //端口随便写
    console.log("服务器已启动...")
})