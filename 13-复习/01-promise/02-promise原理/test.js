let Promise = require("./02-promise原理/promise") 

let promise = new Promise((resolve,reject)=>{
    resolve("包") 
    // reject("没钱") 
    // throw new Error("meiqianle....")
})  

promise.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})
