const router=require("koa-router")()
const DB=require("../../model/db")
const tools=require("../../model/tools")


// 渲染导航列表
router.get("/",async ctx=>{
    let page=ctx.query.page || 1
    let pageSize=5
    let totalPage=await DB.count('nav',{})
    let count=Math.ceil(totalPage/pageSize)
    let result=await DB.find('nav',{},{},{
        page,pageSize,
        sortJson:{
            'add_time':-1   //倒叙
        }
    })
    await ctx.render("admin/nav/index",{
        list:result,
        page,
        count,
        
    })
})

// 渲染增加导航列表
router.get("/add",async ctx=>{
    await ctx.render("admin/nav/add")
})

// 处理增加导航逻辑
router.post("/doAdd",async ctx=>{
    let add_time=tools.getTime()
    let title=ctx.request.body.title
    // console.log(sort)   // 1
    let url=ctx.request.body.url
    let sort=ctx.request.body.sort
    let status=ctx.request.body.status
    await DB.insert('nav',{add_time,title,url,sort,status})
    ctx.redirect(ctx.state.__HOST__+"/admin/nav")
})

// 渲染编辑导航列表
router.get("/edit",async ctx=>{
    let id=ctx.query.id
    // console.log(id)
    // 5af96dbf34cdff24b88a2053
    let result=await DB.find('nav',{'_id':DB.getObjectId(id)})
    await ctx.render("admin/nav/edit",{
        list:result[0],
        prevPage:ctx.state.G.prePage
    })
})

// 处理编辑逻辑
router.post("/doEdit",async ctx=>{

    let id=ctx.request.body.id
    let prevPage=ctx.request.body.prevPage
    // console.log(id)
    // 5af96dbf34cdff24b88a2053
    let title=ctx.request.body.title
    let url=ctx.request.body.url
    let sort=ctx.request.body.sort
    let status=ctx.request.body.status
    await DB.update('nav',{'_id':DB.getObjectId(id)},{title,url,sort,status})
    if(prevPage){
         ctx.redirect(prevPage)
    }else{
        ctx.redirect(ctx.state.__HOST__+"/admin/nav")
    }

})

module.exports=router.routes()