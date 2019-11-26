// // ----------------------------generator+co解决异步
// const fs=require("fs").promises
// const co=require("co")
// function* read(){
//    let res = yield fs.readFile("./name.txt","utf-8")
//    let res2 = fs.readFile(res,"utf-8")
//    return res2
// }
// co(read).then(data=>{
//     console.log(data)
// })  

// ----------------------------await+async解决异步
// await+async是generator的语法糖，使代码看起来更像同步代码
// const fs=require("fs").promises
// async function read(){
//    let res = await fs.readFile("./name.txt","utf-8")  //看起来更像同步代码，等待读取"./name.txt",读取之后再执行下面的代码
//    let res2 = fs.readFile(res,"utf-8")
//    return res2  // res2是终值或者拒因
// }
// // async函数返回一个promise
// // console.log(read())   // Promise { <pending> }
// read().then(data=>{
//     console.log("data",data)  // data 666
// },err=>{
//     console.log("err",err)
// })

// ----------------------------------
const fs = require("fs").promises
async function read() {
    // await后面通常是Promise,如果跟上一个普通值，内部会自动包装成promise
    // 相当于Promise.resolve("hello")
    let res = await "hello"
    return res  
}
read().then(data=>{
    console.log(data)  // hello
},null)