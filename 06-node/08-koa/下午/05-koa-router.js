// koa-router

const Koa =require("koa")
const Router=require("koa-router")
const app=new Koa()
var router=new Router()

// 之前app.use(()=>{})，现在可以在里面写路径
router.get("/",(ctx,next)=>{
    ctx.body="hello"
})
router.get("/shop",(ctx,next)=>{
    ctx.body="商店页面"
})
router.get("/profile",(ctx,next)=>{
    ctx.body="个人中心"
})
app
    .use(router.routes())
    .use(router.allowedMethods())
app.listen(3000)