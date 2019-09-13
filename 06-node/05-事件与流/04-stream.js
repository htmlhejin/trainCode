// 可读流
// fs.createReadStream(path[, options]) //可选
// 可写流
// fs.createWriteStream(path[, options]) //可选
const fs=require("fs")
const path=require("path")
// 创建一个可读流
let rs=fs.createReadStream(path.join(__dirname,"name.txt"),{ // {}--配置项
    flag:"r",   //read
    highWaterMark:4,    //默认起初打印的数据的个数
    encoding:null,
    autoClose:true,     //读取完后自动关闭
    start:0,    //从索引0开始
    end:6   //相当于索引，以索引6结束，打印7个数据
})
let arr=[]  //存放水滴
// 每流一滴水触发一次data事件
rs.on("data",(chunk)=>{
    arr.push(chunk)
    rs.pause()  //流第一滴水时就暂停了  暂停data事件  26行打印为空
   
    // rs.resume()  //在这恢复可以打印出数据
})
// end表示读取完后触发
rs.on("end",()=>{
    console.log(Buffer.concat(arr).toString()) //0123456
})
setTimeout(()=>{
    rs.resume()  //3秒时候恢复data事件，继续读，读取完后触发end事件
},3000)     //0123456