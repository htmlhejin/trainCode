// 入口文件

// 引入一系列中间件
const Koa=require("koa")
const router=require("koa-router")()
const path=require("path")
const static=require("koa-static")
const session=require("koa-session")
// 引入模板引擎，把数据渲染到模板中，把模板返回给客户端
const render=require("koa-art-template")
const sd=require("silly-datetime")  //格式化成我们需要的时间格式
const bodyParser=require("koa-bodyparser")

// 实例化koa
const app=new Koa()

// 引入自定义的路由模块
let admin=require("./routes/admin")
let index=require("./routes/index")
let api=require("./routes/api")

// 使用session中间件
app.keys=['some secret hurr'];
const CONFIG={
    key:'koa:sess',
    maxAge:84400000,
    autoCommit:true,
    overwrite:true,
    httpOnly:true,
    signed:true,
    rolling:false,
    renew:false
}
app.use(session(CONFIG,app))

// 接收用户提交的数据
app.use(bodyParser())

// 配置模板引擎
render(app,{
    root:path.join(__dirname,"views"),   //渲染views下面的模板
    extname:".html",    //扩展名
    debug:process.env.NODE_ENV !== "production",
    // 模板引擎中配置格式化时间的包(日期管道)
    dateFormat:dateFormat=function(value){  //扩展模板引擎中的方法
        // 接收一个时间，返回格式化之后的时间
        return sd.format(value,'YYYY-MM-DD HH:mm')
    }
})

// 托管静态资源
// app.use(static("."))    //表示托管所有静态资源，不安全
app.use(static(__dirname+"/public"))

// 创建一级路由
// use  use对路径的要求是模糊匹配，只要书写的url路径以要求的路径开头，那么就算匹配，而get或post对url路径要求是，书写路径必须与要求的路径一致才算匹配
router.use("/admin",admin)  //访问/admin时，使用admin
router.use(index)  //访问/时，使用index
router.use("/api",api)   //访问/api时，使用api

// 启动路由
app.use(router.routes())
app.use(router.allowedMethods())



app.listen(3000)