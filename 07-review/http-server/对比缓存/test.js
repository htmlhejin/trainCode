// 日志输出
// console.log("ok")

// 输入小写，转成大写，可以用转化流进行转化
// 引入转化流
const  {Transform} =require("stream")

class MyTransform extends Transform{
    _transform(chunk,encoding,callback){
        chunk=chunk.toString().toUpperCase()
        // 转换成大写后的数据推到转化流
        this.push(chunk)        // this指向myTransform
        callback()
    }
}
let myTransform=new MyTransform()   // 创建一个转化流
// 输入的数据通过管道流到转化流，再通过管道流到输出流
process.stdin.pipe(myTransform).pipe(process.stdout)






// 标准输出
// process.stdout.write("ok")  // ok

// 标准输入   ,因为是输入，需要注册一个监听事件来监听输入的内容
// process.stdin.on("data",function(data){
//     // 输入一点内容，就把它输出
//     process.stdout.write(data.toUpperCase(data))
// })
// 如输入abc
// abc
// abc
// def
// def 