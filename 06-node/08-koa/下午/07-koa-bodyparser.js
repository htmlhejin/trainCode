const Koa=require("koa")
const bodyParser=require("koa-bodyparser")
const app=new Koa()
app.use(bodyParser())
app.use(async (ctx,next)=>{
    ctx.body=ctx.request.body   //postman把数据响应在postman页面
    await next()
})
app.listen(3000)