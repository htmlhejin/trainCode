// const Koa=require("koa")
// const app=new Koa()

// // 中间件中有异步
// app.use(async (ctx,next)=>{
//     console.log(1)
//     await next()
//     console.log(2)
// })
// app.use((ctx,next)=>{
//     setTimeout(()=>{
//         console.log(3)
//     })
// })
// // 结果还是1 2 3
// app.listen(3030)


// const Koa=require("koa")
// const app=new Koa()

// // 中间件中有异步
// app.use((ctx,next)=>{
//     console.log(1)   // 1
//     let a=next()    //调用一个中间件，返回的是promise
//     console.log(a)  //Promise { 'hello' }
// })
// app.use((ctx,next)=>{
//     return "hello"
// })
// app.listen(3030)

const Koa = require("koa")
const app = new Koa()

// 中间件中有异步
app.use(async (ctx, next) => {
    console.log(1)      //1
    let a = await next()    //加上await+async,把promise转成普通值
    console.log(a)  // hello
    console.log(2)
})
// app.use((ctx,next)=>{
//     return "hello"
// })
    // 结果是 1 hello 2


app.use((ctx,next) => {
    let b = 10;
    setTimeout(() => {
        b = 20
    })
    return b
})
// 结果是1 10 2
app.listen(3030)