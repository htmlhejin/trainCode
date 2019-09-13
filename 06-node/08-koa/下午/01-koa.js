const Koa=require("koa")
const app=new Koa()

app.use((ctx,next)=>{
    console.log(1)
    next()
    console.log(2)
})
app.use((ctx,next)=>{
    setTimeout(()=>{
        console.log(3)
    })
})
// 结果是1 2 3，破坏了洋葱模型
app.listen(3030)