// let  Promise = require("./promise")
// let p = new Promise((resolve,reject)=>{
//    resolve()
// })
// let promise2=p.then(()=>{
//     // console.log(data)
//     // return "hello"
//     return promise2;   // 循环引用  
// })
// promise2.then(data=>{
//     console.log(data)
// },err=>{
//     console.log("err",err)  //err TypeError: my Chaining cycle detected for promise #<Promise></Promise>
// })

// ----------
// let  Promise = require("./promise")
// let p = new Promise((resolve,reject)=>{
//    resolve()
// })
// let promise2=p.then(()=>{
//     // console.log(data)
//     // return "hello"
//     return promise2;   // 不会循环引用  
// }).then(data=>{
//     console.log(data)
// },err=>{
//     console.log("err",err)  
// })

// ------------------------------
// let  Promise = require("./promise")
// let p = new Promise((resolve,reject)=>{
//     resolve()
// })
// p.then().then().then().then(data=>{console.log(data)})

// -------------------------------
let  Promise = require("./promise")
let p = new Promise((resolve,reject)=>{
    resolve()
})
p.then(data=>{
    return then(data=>{})
},err=>{})


