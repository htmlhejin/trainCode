// koa中常用中间件
// koa-compose  把多个中间件合并成一个中间件
const Koa=require("koa")
const compose=require("koa-compose")
const app=new Koa()

// 中间件就是函数
let f1=async (ctx,next)=>{
    console.log(1)
    await next()    //await async固定写法
}
let f2=async (ctx,next)=>{
     console.log(2)
     await next()
}
let f3=async (ctx,next)=>{
    console.log(3)
}
let all=compose([f1,f2,f3])
app.use(all)    //之前app.use()中只能写一个中间件，现在可以写多个
app.listen(3000)