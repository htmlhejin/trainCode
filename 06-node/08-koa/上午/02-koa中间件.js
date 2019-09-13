const Koa=require("koa")
const app=new Koa()

// 中间件本质就是一个函数，里面有两个参数,ctx,next
// koa中没有路由，要想使用路由，需要使用第三方的koa中间件，中间件其实就是回调函数
// 没有路由，默认匹配 / 
// app.use((ctx,next)=>{
//     ctx.body="hello koa~"
// })

// 中间件的执行是有顺序的，从上向下执行，next()表示执行下一个中间件
app.use((ctx,next)=>{
    console.log(1)
    next()
})
app.use((ctx,next)=>{
    console.log(2)
    next()
})
app.use((ctx,next)=>{
    console.log(3)
})
// 执行结果为1 2 3


// 如果中间件中调用next(),表示执行下一个中间件中，洋葱模型，切洋葱
// 一个中间件中调用next(),next()之前的函数最先执行，然后执行next(),即下一个中间件中的函数，next()之后的函数最后执行
app.use((ctx,next)=>{
    console.log(1)
    next()  //相当于(ctx,next)=>{console.log(3) next() console.log(4) }，中间的next()相当于(ctx,next)=>{ console.log(5)  console.log(6)}
    console.log(2)
})
app.use((ctx,next)=>{
    console.log(3)
    next()
    console.log(4)
})
app.use((ctx,next)=>{
    console.log(5)
    console.log(6)
})
// 结果1 3 5 6 4 2
app.listen(3000)