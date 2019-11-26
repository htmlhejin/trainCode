// const---- 声明一个常量，比如引入一个模块，不会变的数据一般用const声明
// let---- 声明一个变量，后面可能会发生改变，用let声明
// const fs=require("fs")
// fs.readFile("./name.txt","utf-8",(err,data)=>{
//     fs.readFile(data,"utf-8",(err,data)=>{
//         console.log(data)
//     })
// })

// ------------------------------------
// const fs=require("fs")  / 嵌套
// function read(path){
//     fs.readFile(path,"utf-8",(err,data)=>{
//         fs.readFile(data,"utf-8",(err,data)=>{
//             console.log(data)
//         })
//     })
// }
// read("./name.txt")

// --------------------------------------

// 用promise封装之后的fs,无需再手动封装read方法，也无需嵌套
//  ExperimentalWarning: The fs.promises API is experimental(实验的)
const fs = require("fs").promises
fs.readFile("./name.txt", "utf-8", (err, data) => {
    return data;
}).then(data=>{
    console.log(data)
},err=>{

})