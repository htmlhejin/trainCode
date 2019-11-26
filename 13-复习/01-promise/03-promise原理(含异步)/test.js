let Promise = require("./03-promise原理(含异步)/promise(异步)") 

let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("包")
    },2000)
})  

promise.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})
