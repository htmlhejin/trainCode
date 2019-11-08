// 后台首页面

const router=require("koa-router")()
const url=require("url")
// 引入富文本编译器模块
const ueditor=require("koa2-ueditor")
// 配置富文本编译器模块
router.all('/editor/controller', ueditor(['public', {
	"imageAllowFiles": [".png", ".jpg", ".jpeg"],
	"imagePathFormat": "/upload/ueditor/image/{yyyy}{mm}{dd}/{filename}"  // 保存为原文件名
}]))

// 引入自定义模块
let login=require("./admin/login")
let manage=require("./admin/manage")
let index=require("./admin/index")
let articlecate=require("./admin/articlecate")
let article=require("./admin/article")
let focus=require("./admin/focus")
let link=require("./admin/link")
let nav=require("./admin/nav")
let setting=require("./admin/setting")


// 后台入口文件中定义一个全局变量,得到绝对路径
router.use(async (ctx,next)=>{
    // console.log("http://"+ctx.request.header.host)  //http://localhost:3000
    // 配置全局变量
    ctx.state.__HOST__ = "http://"+ctx.request.header.host  //Host: localhost:3000
    // 得到访问的路径
    // let pathname = url.parse(ctx.request.url).pathname
    // console.log(pathname)   // /admin/user/
    let pathname = url.parse(ctx.request.url).pathname.substring(1) //从头开始剪切一位
    // console.log(pathname)   // admin/user/   开头的/已经去掉

    let splitUrl=pathname.split("/")    //把/去掉 分割成数组
    // console.log(splitUrl)   //[ 'admin', 'user' ]

    // 把用户信息保存到上下文中
    ctx.state.G={
        url:splitUrl,
        userinfo:ctx.session.userinfo,
        prePage:ctx.request.header['referer']   //上一页
    }
    // await next()     // 先权限校验再放行

    // 权限校验
   
    if(ctx.session.userinfo){   //有标识
        await next()
    }else{
        if(pathname =="admin/login" || pathname =="admin/login/doLogin" || pathname=="admin/login/code"){ 
            await next()
        }else{
            ctx.redirect("/admin/login")
        }
    }
})

router.use("/login",login)
router.use("/manage",manage)
router.use(index)   //没有写路径，默认就是/
router.use("/articlecate",articlecate)
router.use("/article",article)
router.use("/focus",focus)
router.use("/link",link)
router.use("/nav",nav)
router.use("/setting",setting)

module.exports=router.routes()