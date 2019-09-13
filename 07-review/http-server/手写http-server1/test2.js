// 引入压缩文件的包
let zlib=require("zlib")
let fs=require("fs")

// let data1=fs.readFileSync("a.txt") //同步读取
// // zlib.gzip()   表示以gzib形式压缩,异步压缩
// zlib.gzip(data1,function(err,data2){
//     fs.writeFileSync("a.gz",data2)
// })

// 如果一个文件非常大，需要通过流一点点读取，可以控制读取速率等
// 创建一个可读流，通过管道流到转化流进行压缩，再通过管道流到b.txt.gz
fs.createReadStream("a.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("b.txt.gz"))