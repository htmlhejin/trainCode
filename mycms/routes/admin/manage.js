const router=require("koa-router")()
const DB = require("../../model/db")

// 三级路由
// 渲染管理员列表页面
router.get("/",async ctx=>{
    // 拿到admin集合中的所有信息
    let result=await DB.find("admin",{})
    // console.log(result)
    // [ { _id: 5ab1f6e8069ce334f0ce0348,
    //     username: 'admin',
    //     password: 'e10adc3949ba59abbe56e057f20f883e',
    //     status: 1,
    //     last_time: 2018-05-16T07:26:52.324Z },
    //   { _id: 5ab1f6fc069ce334f0ce0349,
    //     username: 'zhangsan',
    //     password: 'e10adc3949ba59abbe56e057f20f883e',
    //     status: 1,
    //     last_time: 2018-03-22T02:48:20.036Z } ]
    
    // ctx.body="管理员管理页面"
    await ctx.render("admin/manage/list",{  //渲染时把数据传递过去
        list:result
    })
})

// 四级路由
// 渲染添加管理员页面
router.get("/add",async ctx=>{
    // ctx.body="添加管理员" //访问/user/add时响应添加用户
    await ctx.render("admin/manage/add")
})

// 处理添加管理员页面逻辑
router.post("/doAdd",async ctx=>{
    let username=ctx.request.body.username  //.username通过input中name="username"得到，同理，password，rpassword也是
    let password=ctx.request.body.password
    let rpassword=ctx.request.body.rpassword
    // console.log(username)   //kl
    // console.log(password)   // uik
    // console.log(rpassword)   // dfugk
    if(!/^\w{4,20}/.test(username)){
        await ctx.render("admin/error",{
            message:"用户名不合法",
            redirect:ctx.state.__HOST__+"/admin/manage/add"
        })
    }else if(password!=rpassword || password.length<6){
        await ctx.render("admin/error",{
            message:"两次密码不一致或密码不合法",
            redirect:ctx.state.__HOST__+"/admin/manage/add"
        })
    }else{
        let res=await DB.find('admin',{'username':username})
        if(res.length>0){
            await ctx.render("admin/error",{
                message:"用户名已存在",
                redirect:ctx.state.__HOST__+"/admin/manage/add"
            })
        }else{
            await DB.insert('admin',{'username':username,'password':password})
            ctx.redirect(ctx.state.__HOST__+"/admin/manage")
        }
    }
})

// 渲染编辑管理员页面
router.get("/edit",async ctx=>{
    // console.log(1)
    // 得到传过来的id
    let id=ctx.query.id
    // console.log(id)
    let result =await DB.find('admin',{'_id':DB.getObjectId(id)})
    await ctx.render("admin/manage/edit",{
        list:result[0]
    })
})

// 处理编辑管理员逻辑
router.post("/doEdit",async ctx=>{
    let id=ctx.request.body.id
    let username=ctx.request.body.username
    let password=ctx.request.body.password
    let rpassword=ctx.request.body.rpassword

    if(password !=""){
        if(password!=rpassword || password.length<6){
            await ctx.render("admin/error",{
                message:"两次密码不一致或密码不合法",
                redirect:ctx.state.__HOST__+"/admin/manage"
            })
        }else{
            await DB.update('admin',{'_id':DB.getObjectId(id)},{'password':password})
            ctx.redirect(ctx.state.__HOST__+"/admin/manage")
        }
    }else{
        ctx.redirect(ctx.state.__HOST__+"/admin/manage")
    }
})


module.exports=router.routes()