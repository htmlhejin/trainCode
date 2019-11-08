const router = require("koa-router")()
const DB = require("../../model/db")
// 获取验证码的中间件
const svgCaptcha = require("svg-captcha")
const tools=require ("../../model/tools")

// 三级路由
router.get("/", async ctx => {
    // ctx.body="login页面"
    await ctx.render("admin/login")
})

// 登陆时要在form标签中添加method="post",action="提交的路径"，登陆按钮type="submit",权限校验时不能拦截
// 处理用户提交时的信息
router.post("/doLogin", async ctx => {
    // console.log("...")
    // 没有文件接收时使用封装的方法request，如果有图片或文件的上传，使用原生的req
    let username = ctx.request.body.username    //自己输入的用户名
    let password = ctx.request.body.password    ////自己输入的密码
    let code = ctx.request.body.code    //自己输入的验证码
    // console.log(username)
    // console.log(password)
    // 验证验证码是否一致
    if (code.toLocaleLowerCase() == ctx.session.code.toLocaleLowerCase()) {
        // 连接数据库，对比用户输入的信息和数据库中的是否一致,需要新建一个文件夹model
        var result = await DB.find('admin', { 'username': username, 'password': tools.abc(password) }) //通过await拿到终值
        // console.log(result) 
        //结果是 [ { _id: 5d60f1a6df4b00763ad41cbf,
        //     username: 'wangcai',
        //     password: '123456' } ]
        if (result.length > 0) {
            // 把数据保存到session中
            ctx.session.userinfo = result[0]
            // 更新数据库中的时间
                                            // getObjectId获取id
            await DB.update('admin',{"_id":DB.getObjectId(result[0]._id)},{
                last_time:new Date()
            })
            ctx.redirect(ctx.state.__HOST__+"/admin")  //跳转到后台首页面
        } else {
            ctx.render("admin/error",{  //渲染时把数据传递过去
                message:"用户名或密码错误",
                redirect:ctx.state.__HOST__+"/admin/login"
            })
        }
    }else{
        ctx.render("admin/error",{
            message:"验证码错误",
            redirect:ctx.state.__HOST__+"/admin/login"
        })
    }
})

// 获取验证码
router.get("/code", async (ctx,next) => {
    // 生成验证码，svgCaptcha.create()方式默认生成的只有字母大小写和数字
    var captcha = svgCaptcha.create({
        // background:"skyblue",
            width:100,
            height:40,
            fontSize:40
    })
    // 把生成的验证保存在session中
    ctx.session.code=captcha.text
    // 设置响应头
    ctx.response.type="image/svg+xml"
    // 把验证码响应给浏览器
    ctx.body=captcha.data
    await next()


    // 生成验证码的另一种方式
    // var captcha=svgCaptcha.createMathExpr({ //{}中配置验证码
    //     background:skyblue,
    //     width:100,
    //     height:40,
    //     fontSize:40
    // })
})

// 退出登录
router.get("/loginOut",async (ctx,next)=>{
    ctx.session.userinfo = null;
    ctx.redirect(ctx.state.__HOST__+"/admin/login")
    await next()
})

module.exports = router.routes()

// let catpcha=svgCaptcha.create({})
// ctx.session.code=captcha.text
// ctx.response.type="image/svg+xml"
// ctx.body=captcha.data