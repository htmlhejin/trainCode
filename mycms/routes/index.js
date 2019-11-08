// 前台首页面

const router=require("koa-router")()
const DB=require("../model/db")

router.get("/",async ctx=>{
    // ctx.body="前台首页面"
    let result=await DB.find('nav',{})
    // console.log(result)
    ctx.render("default/index",{
        nav:result
    })
})

router.get("/about",async ctx=>{
    await ctx.render("default/about")
})

module.exports=router.routes()