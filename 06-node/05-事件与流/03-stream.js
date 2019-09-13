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
let arr=[]
// 每流一滴水触发一次data事件
rs.on("data",(chunk)=>{
    arr.push(chunk)
})
// 水流完用容器装水
rs.on("end",()=>{
    console.log(arr)    //[ <Buffer 30 31 32 33>, <Buffer 34 35 36> ]
    console.log(Buffer.concat(arr)) //<Buffer 30 31 32 33 34 35 36>
    console.log(Buffer.concat(arr).toString()) //0123456
})