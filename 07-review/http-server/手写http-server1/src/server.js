// 开启一个服务，当输入Myserver -p 8080时也可以像原生的那样输出指定端口
import http from "http"
import url from "url"
import fs from "fs"
import path from "path"
let {readdir,stat} = fs.promises
//要想使用gzib形式压缩文件，需要引入压缩文件的包 zlib
import zlib, { createGzip, createInflate } from "zlib"
// 对内容进行摘要，引入与内容有关的包
import crypto from "crypto"

// 引入第三方模块
import chalk from "chalk"
import mime from "mime"
import ejs from "ejs"


// 同步读取，读取的值返回到template中
// console.log(__dirname)  // D:\huashantrain\1907--1912\review\http-server\dist
let template=fs.readFileSync(path.join(__dirname,"../template.html"),"utf-8")
// console.log(template)

class Server{
    constructor(config){
        this.port=config.port
        this.template=template  //把模板放在实例上，其他地方可以通过this来获取
    }
    async handleRequest(req,res){
        let {pathname} = url.parse(req.url,true)     //true表示把查询字符串也一并解析
        // pathname有可能是中文，浏览器自动编码，我们需要手动解码，即转成中文,浏览器才能识别
        pathname=decodeURIComponent(pathname)
        // console.log(process.cwd())   // D:\huashantrain\1907--1912\review\http-server

        // 访问http://127.0.0.1:8080 时
        // console.log(pathname)   // /
        let filePath = path.join(process.cwd(),pathname)    // 得到绝对路径 
        //  D:\huashantrain\1907--1912\review\http-server\dist\   默认托管的是dist下面的文件 
        // console.log(filePath)

        // try中可能有不存在的变量等等   
        try{
            let statObj=await stat(filePath)  // stat判断filePath是一个文件还是文件夹，也有肯=可能不存在，看用户输入的是什么
            if(statObj.isDirectory()){
                // console.log("目录")
                // 是目录，读取目录下的文件
                let dirs=await readdir(filePath)
                // console.log(dirs)   // [ 'a', 'main.js', 'server.js' ]
                // 把目录渲染出来
                let templateStr=ejs.render(this.template,{dirs,path:pathname==="/" ? "" : pathname})
                res.setHeader("Content-Type","text/html;charset=utf-8")
                res.end(templateStr)
            }else{
                // 如果是一个文件，把文件中的内容显示出来
                this.sendFile(filePath,req,res,statObj)
                // console.log("文件夹")
            }
        }catch(e){      // catch 用来捕获异常，有异常时抛出一个错误
            this.sendError(e,req,res)
        }
    }
    gzip(filePath,req,res,statObj){
        // 有的文件需要压缩，有的不需要，所以压缩前首先要判断一下
        const encoding=req.headers["accept-encoding"]
        if(encoding){   // match(//)  //表示正则
            if(encoding.match(/gzip/)){   // 如果是以gzip的形式进行压缩
                res.setHeader('Content-Encoding','gzip')    // 设置一个响应头，表示浏览器以gzip的形式压缩文件并返回给客户端
                return zlib.createGzip()     // 以gzip形式压缩，返回一个转化流
            }else if(encoding.match(/deflate/)){     // 如果是以deflate的形式进行压缩
                res.setHeader('Content-Encoding','deflate')
                return zlib.createDeflate()  // 以deflate形式压缩，返回一个转化流
            }
            // 不以以上两种形式压缩
            return false
        }else{
            // 不需要压缩
            return false
        }
    }
    sendError(e,req,res){
        console.log(e)    
        res.statusCode=404
        res.end("Not Found")
    }
    // 定义一个方法看是否有缓存
    cache(filePath,req,res,statObj){
        let lastModified=statObj.ctime.toGMTString() // 得到最后修改的时间
        // 设置一个响应头，表示最后修改的时间
        res.setHeader("Last-Modified",lastModified)
        // 设置一个响应头，只要文件被修改，就自动生成一个请求头If-Modified-Since，表示上一次修改的时间
        let ifModifiedSince =  req.headers['if-modified-since']  // 得到上一次修改的时间
        if(ifModifiedSince !== lastModified){
            // 文件被修改，要走网络
            return false
        }
        return true // 走缓存
    }
    // 定义一个方法来显示文件夹中的内容
    sendFile(filePath,req,res,statObj){
        // 强制缓存    Cache-Control   
        // 设置一个头，10秒之内不要再访问，如果再访问，就访问缓存中的数据
        // res.setHeader("Cache-Control","max-age=10")
        // 走网络，但是有缓存
        // res.setHeader("Cache-Control","no-cache")
        // 走网络，没有缓存
        // res.setHeader("Cache-Control","no-store")
        // Expires描述的是一个绝对时间，由服务器返回
        // 这个时间与真实的时间差了9个小时   Expires: Wed, 11 Sep 2019 00:59:25 GMT
        res.setHeader("Expires",new Date(Date.now()).toGMTString())

        // 响应文件之前看是否有缓存，如果有，从缓存中拿数据
        let q=this.cache(filePath,req,res,statObj)
        if(q){
            //  有缓存
            res.statusCode=304  // 设置状态码  304表示缓存
            return res.end()
        }

        // 返回文件之前进行压缩
        let flag=this.gzip(filePath,req,res,statObj)    // flag要么返回false,要么返回一个转化流
        if(flag){   // 需要进行压缩
            // 创建一个可读流，读取文件,通过管道，响应回去
            fs.createReadStream(filePath).pipe(flag).pipe(res)
        }else{    // 不支持压缩，或者客户端支持的压缩格式浏览器处理不了
            fs.createReadStream(filePath).pipe(res)
        }
        // 设置一个头，得到文件的后缀名 ,浏览器不能识别纯文本，所以如果请求纯文本文件，我们自己加个头  "text/plain"
        let r=mime.getType(filePath) || "text/plain"
        res.setHeader("Content-Type",r+";charset=utf-8")
    }
    // 开启服务
    start(){
        // 创建一台服务器,服务器启动时执行回调函数,当访问localhost:8080时要得到所有的文件或文件夹，类似http-server的功能
        let server = http.createServer(this.handleRequest.bind(this))
        server.listen(this.port,()=>{
            console.log(`${chalk.yellow('Starting up http-server, serving')}${chalk.blue('./')}
${chalk.green('Available on:')}
${chalk.green('http://127.0.0.1:')} ${chalk.green(this.port)}
Hit CTRL-C to stop the server
    `)
        })
    }
}

export default Server