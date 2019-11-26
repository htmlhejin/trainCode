// const fs = require("fs").promises
// function* say() {
//     // 读取文件，返回一个promise
//     yield fs.readFile("./name.txt", "utf-8")  // 产出一个promise
// }

// let iterator = say()
// // 每next一次得到一个产出的值
// let { value, done } = iterator.next()
// // console.log(value)   // Promise { <pending> }
// // Promise.resolve把pending态变为成功态
// Promise.resolve(value).then(data => {
//     console.log("1",data)  // 1 age.txt
//     return data
// }).then(data => {
//     console.log(fs.readFile(data,"utf-8"))   // Promise { <pending> }
//     // console.log(fs.readFile(dataj,"utf-8"))
//     return fs.readFile(data,"utf-8") 
// }).then(data=>{
//     console.log("2",data)  // 2 666
// },err=>{
//     console.log("err",err)     //  err ReferenceError: dataj is not defined

// })

// ---------------------------------------- 生成器+promise来解决异步问题
// 用promises封装好的fs,可以避免嵌套问题，直接使用.then即可
// const fs = require("fs").promises
// function* read(){
//     let res = yield fs.readFile("./name.txt","utf-8")
//     // res就是data---age.txt
//     yield fs.readFile(res,"utf-8")
// }
// let iterator = read()
// let {value,done} = iterator.next()
// Promise.resolve(value).then(data=>{
//     // console.log(data)   // age.txt
//     // console.log(iterator.next(data))   // { value: Promise { <pending> }, done: false }
//     let {value,done} = iterator.next(data)
//     Promise.resolve(value).then(data=>{
//         console.log(data)  // 666
//     })
// })
// ----------------------------------------再写一遍生成器+promise来解决异步问题
// const fs=require("fs").promises
// function* read(){
//     let res = yield fs.readFile("./name.txt","utf-8")
//     yield fs.readFile(res,"utf-8")
// }
// let it=read()
// let {value,done} =it.next()
// Promise.resolve(value).then(data=>{
//     let {value,done} = it.next(data)
//     Promise.resolve(value).then(data=>{
//         console.log(data)      // 666
//     })
// })
// 上面的写法可能会造成无限嵌套

// ------------------------------------------generator+co解决异步,co(generato)
// const fs = require("fs").promises
// const co = require("co")
// function* read(){
//     let res = yield fs.readFile("./name.txt","utf-8")
//     let res2 = yield fs.readFile(res,"utf-8")
//     return res2;
// }
// // console.log(co(read))  // Promise { <pending> }
// co(read).then(data=>{
//     console.log(data)  // 666
// })

// 文件读取错误，执行err函数
// const fs = require("fs").promises
// const co = require("co")
// function* read(){
//     let res = yield fs.readFile("./name1.txt","utf-8")
//     let res2 = yield fs.readFile(res,"utf-8")
//     return res2;
// }
// // console.log(co(read))  // Promise { <pending> }
// co(read).then(data=>{
//     console.log(data)  
// },err=>{
//     console.log("err",err)  // err { [Error: ENOENT: no such file or directory, open 'd:\huashantrain\19.....
// })

// 文件读取错误，捕获错误 通过try catch捕获异常
const fs = require("fs").promises
const co = require("co")
function* read() {
    try {
        let res = yield fs.readFile("./name1.txt", "utf-8")
        let res2 = yield fs.readFile(res, "utf-8")
        return res2;
    } catch (e) {
        console.log(e)  // { [Error: ENOENT: no such file or directory, open 'd:....
    }
}
// console.log(co(read))  // Promise { <pending> }
co(read).then(data => {
    console.log(data)  
}, err=>{
    console.log("err",err) 
})



