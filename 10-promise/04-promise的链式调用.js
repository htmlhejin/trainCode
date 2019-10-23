// ----------------------
// let p =new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("hello")
//     },1000)
// })
// p.then(data=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("world")
//         },1000)
//     })
// },err=>{

// }).then(data=>{ //采用上一个.then中new的promise中的状态
//     console.log(data)   //world
// },err=>{

// })

// ----------------------
// let p =new Promise((resolve,reject)=>{
//     resolve("hello")
// })

// let p1=p.then(data=>{
//     return p1   //26行的p1在等27行的p1改变状态，成功态或失败态  循环引用，相当于我在等我吃饭 
// },err=>{
//     console.log(err)
// })
// // (node:2388) UnhandledPromiseRejectionWarning: TypeError: Chaining cycle detected for promise #<Promise>
// p1.then(data=>{
//     console.log(data)
// },err=>{
//     console.log("-----",err)  //打印出-----错误
// })

// p.then(data=>{
//     return "abc"
// }).then(data=>{
//     console.log(data)        //abc
// })

// ----------------------
// let p =new Promise((resolve,reject)=>{
//     resolve("hello")
// })

// let p1=p.then(data=>{
//     return 123   //把等待态变为成功态
// },err=>{
//     console.log(err)
// })
// p1.then(data=>{
//     console.log(data)   //123
// },err=>{
//     console.log("-----",err)  
// })

// ----------------------
let p =new Promise((resolve,reject)=>{
    resolve("hello")
})

let p1=p.then(data=>{
    // throw new Error("不ok")  ////返回到下一个.then中的第二个函数
    return new Error("不ok")   //把等待态变为失败态  //返回到下一个.then中的第一个函数
})
p1.then(data=>{
    console.log("----=+",data)    //----=+ Error: 不ok
},err=>{
    console.log("-----",err)    //----- Error: 不ok
})

// ----------------------
// let p =new Promise((resolve,reject)=>{
//     resolve("hello")
// })

// let p1=p.then(data=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject("不ok")  //失败态，执行下一个.then的第二个函数
//         },1000)
//     })
// },err=>{
//     console.log(err)
// })
// p1.then(data=>{
//     console.log(data)   
// },err=>{
//     console.log("-----",err)        //----- 不ok
// })

// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------