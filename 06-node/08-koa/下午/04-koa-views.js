// 把数据渲染到模板中，然后把模板返回给浏览器
const Koa=require("koa")
const views=require("koa-views")
const path=require("path")
const app=new Koa()

// console.log(path.join(__dirname,"/views"))  //D:\huashantrain\1907--1912\06-node\08-koa\views
// 加载模板引擎
app.use(views(path.join(__dirname,"/views"),{   // {}中表示配置项
    extension:'ejs'     //扩展名
}))

// 渲染模板
app.use(async (ctx,next)=>{
    await ctx.render("index",{title:'Koa'}) //渲染index模板，并指定数据
    await next()
})
app.listen(3030)

// app.use(views(path.join(__dirname,"/views"),{
//     extension:'ejs'
// }))
// app.use((ctx,next)=>{
//     ctx.render("index",{title:'Koa'})
// })