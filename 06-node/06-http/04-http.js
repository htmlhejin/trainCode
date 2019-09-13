let http=require("http")
let fs=require("fs")
let path=require("path")
let url=require("url")
// 服务器给客户端返回的数据有两类：json、静态资源（html,css,imgs,js）
let server=http.createServer(function(req,res){
    // console.log(url.parse(req.url)) //url是一个对象，里面主要关注pathname,query
    
    let {pathname,query}=url.parse(req.url,true)   //true自动把查询字符串解析成对象 { name: '"hello"' }
    console.log(pathname)   // /index.html
    // console.log(query)  //不加true,name=%22hello%22  

    // 得到index.html绝对路径
    let absPath=path.join(__dirname,pathname)
    console.log(absPath)    //D:\huashantrain\1907--1912\0820\index.html

    // fs中的api  stat，判断路径的状态,看路径是文件还是文件夹
    fs.stat(absPath,(err,statObj)=>{
        if(err){
            console.log(err)
            res.statusCode=404
            res.end("not found")
            return ;    //结束程序
        }
        console.log(statObj)
        // Stats {
        //     dev: 3731869237,
        //     mode: 33206,
        //     nlink: 1,
        //     uid: 0,
        //     gid: 0,
        //     rdev: 0,
        //     blksize: undefined,
        //     ino: 562949953624276,
        //     size: 401,
        //     blocks: undefined,
        //     atimeMs: 1566354809053.3572,
        //     mtimeMs: 1566354956953.8435,
        //     ctimeMs: 1566354956953.8435,
        //     birthtimeMs: 1566354809053.3572,
        //     atime: 2019-08-21T02:33:29.053Z,
        //     mtime: 2019-08-21T02:35:56.954Z,
        //     ctime: 2019-08-21T02:35:56.954Z,
        //     birthtime: 2019-08-21T02:33:29.053Z }
    })

})
let port=5000
server.listen(port,function(){
    console.log(`服务器运行在${port}端口上`)
})