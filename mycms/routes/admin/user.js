const router=require("koa-router")()

// 三级路由
router.get("/",async ctx=>{
    // ctx.body="用户管理页面"
    await ctx.render("admin/user/list")
})

// 四级路由
// 添加用户
router.get("/add",async ctx=>{
    // ctx.body="添加用户" //访问/user/add时响应添加用户
    await ctx.render("admin/user/add")
})

// 编辑用户
router.get("/edit",async ctx=>{
    ctx.body="编辑用户"
})

// 删除用户
router.get("/del",async ctx=>{
    ctx.body="删除用户"
})
module.exports=router.routes()