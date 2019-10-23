// Promise是一个类，使用是需要new，然后里面放一个执行器()={},执行器会立即执行
// let p=new Promise(()=>{
// })
// console.log(p)  //Promise { <pending> }  p是一个promise，默认处于pending状态
// ---------------------

// Promise是同步的
// console.log("haha")
// let p=new Promise(()=>{
//     console.log("heihei")
// })
// console.log("hello")
// 结果为haha  heihei  hello

// ----------------------------------
// Promise执行器中有两个参数
// resolve  pending-->成功态
// reject  pending-->失败态
// let p = new Promise((resolve,reject)=>{
//     // 调用resolve
//     resolve("买包")     //等待态变为成功态
// })
// console.log(p)      //Promise { '买包' }

// ----------------------------------
// Promise上有一个then方法,调用resolve时执行then中的第一个函数，调用reject时执行then中的第二个函数
// 只有调用resolve或reject时，then中的方法才能被执行
// let p = new Promise((resolve,reject)=>{
//     // resolve("买包")       // 调用resolve,把成功的终值传递下去
//     reject("没钱")       // 调用reject,把失败的原因传递下去
// })
// p.then(data=>{  //data接收终值
//     console.log(data)   //买包
// },err=>{         //err接收失败的原因
//     console.log(err)   //没钱
// })

// ----------------------------------
// 没有reject,抛出一个错误也是执行then中第二个函数
let p = new Promise((resolve,reject)=>{
    throw new Error("没钱")
})
p.then(data=>{  //data接收终值
    console.log(data)   
},err=>{         //err接收失败的原因
    console.log(err)   //Error: 没钱
})

// ----------------------------------
