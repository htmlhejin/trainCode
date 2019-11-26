// executor----执行器()=>{}
let promise = new Promise((resolve,reject)=>{
    // resolve("包")   // 成功的话执行.then中的第一个函数
    // reject("没钱")     // 失败的话执行.then中的第二个函数
    // 只能由等待态转为成功态，或转为失败态
    // 状态不可逆，一旦是成功态，再转成失败态无效
    throw new Error("meiqianle....")
})  

promise.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})

// promise是为了解决异步，回调由嵌套问题
// promise的优点：优雅的解决异步，异步并发问题
// 缺点:内部也是基于回调