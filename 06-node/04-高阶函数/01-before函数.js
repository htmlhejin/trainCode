
// 在执行一个函数之前去执行另外一个函数
// const f1=()=>{
//     console.log("正在执行任务")
// }
// Function.prototype.before=function(beforeFn){
//     return ()=>{
//         beforeFn()
//         // 箭头函数没有this,谁调用了before，this就指谁
//         this()
//     }
// }
// f2是新返回的函数
// const f2=f1.before(()=>{
//     console.log("开始")
// })
// f2()
// 结果是 开始  正在执行任务

// const f3=f1.before(()=>{
//     console.log("f3开始")
// })
// f3()
// 结果是 开始  正在执行任务 f3开始 正在执行任务



// ---------------------------
const f1=(...args)=>{
    console.log("正在执行任务",args)
}
Function.prototype.before=function(beforeFn){
    return (...args)=>{
        beforeFn()
        this(...args)   //把1 2 3传递给f1
    }
}
const f2=f1.before(()=>{
    console.log("开始...")
})
f2(1,2,3)
// 开始...   正在执行任务 [ 1, 2, 3 ]