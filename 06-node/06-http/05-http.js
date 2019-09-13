let http=require("http")
let fs=require("fs")
let path=require("path")
let url=require("url")
// 服务器给客户端返回的数据有两类：json、静态资源（html,css,imgs,js）
let server=http.createServer(function(req,res){
    let {pathname}=url.parse(req.url,true)   //true自动把查询字符串解析成对象 { name: '"hello"' }
    let absPath=path.join(__dirname,pathname)
    // console.log(absPath)
    fs.stat(absPath,(err,statObj)=>{
        if(err){
            console.log(err)
            res.statusCode=404
            res.end("not found")
            return ;    //结束程序
        }
        if(statObj.isFile()){   //表示读取的是一个文件
            fs.createReadStream(absPath).pipe(res)  //通过Pipe流到res，res中有了数据，相应给客户端
        }
        console.log(statObj)
    })

})
let port=5000
server.listen(port,function(){
    console.log(`服务器运行在${port}端口上`)
})