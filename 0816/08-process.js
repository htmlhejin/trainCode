// process   进程，表示当前的运行环境
// cwd---当前工作目录
// console.log(process.cwd())  //d:\huashantrain\1907--1912\0816
// console.log(process.env)

// process.nextTick是异步任务
// console.log(1)
// process.nextTick(function(){
//     console.log("nextTick") //nextTick
// })
// console.log(2)
// 1 2 nextTick

// process.nextTick是微任务
// setTimeout(()=>{
//     console.log(1)
// }),
// process.nextTick(function(){
//     console.log("nextTick") 
// })
// nextTick   1

// nextTick>then
Promise.resolve().then(()=>{
    console.log("then")
})
process.nextTick(function(){
        console.log("nextTick") 
    })
// nextTick then