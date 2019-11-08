const router=require("koa-router")()
const DB=require("../../model/db")
const tools=require("../../model/tools")

// 渲染分类列表页面
router.get("/",async ctx=>{
    // 找到数据库中的数据
    let result=await DB.find("articlecate",{})
    // console.log(result)
    /* 
    [ { _id: 5ab3209bdf373acae5da097e,
    title: '成功案例',
    description: '成功案例',
    keywords: '成功案例',
    pid: '0',
    add_time: '',
    status: '1' },
  { _id: 5ab32d919c9bdb2ce4e92ad0,
    title: '网站案例',
    pid: '5ab3209bdf373acae5da097e',
    keywords: '网站案例',
    status: '1',
    description: '网站案例',
    add_time: 2018-03-24T01:50:43.951Z },
  { _id: 5ab32da7b0c895428c85f78d,
    title: 'APP开发',
    pid: '5ab3209bdf373acae5da097e',
    keywords: 'APP开发',
    status: '1',
    description: '',
    add_time: 2018-03-24T01:50:50.869Z },
  { _id: 5ab34b61c1348e1148e9b8c2,
    title: '开发服务',
    pid: '0',
    keywords: '成功案例',
    status: '1',
    description: '成功案例',
    add_time: 2018-03-22T06:45:42.467Z },
  { _id: 5afa568d416f21368039b05b,
    title: '微信开发',
    pid: '5ab3209bdf373acae5da097e',
    keywords: '微信开发',
    status: '1',
    description: '微信开发' },
  { _id: 5afa56bb416f21368039b05d,
    title: '新闻资讯',
    pid: '0',
    keywords: '新闻资讯',
    status: '1',
    description: '新闻资讯' },
  { _id: 5afa5392416f21368039b05e,
    title: '公司新闻',
    pid: '5afa56bb416f21368039b05d',
    keywords: '公司新闻',
    status: '1',
    description: '公司新闻' },
  { _id: 5afa539b416f21368039b05f,
    title: '行业新闻',
    pid: '5afa56bb416f21368039b05d',
    keywords: '行业新闻',
    status: '1',
    description: '行业新闻' },
  { _id: 5afb9f184a785e381875e689,
    title: '服务器管理',
    pid: '5ab3209bdf373acae5da097e',
    keywords: '服务器管理',
    status: '1',
    description: '服务器管理' },
  { _id: 5afb9f304a785e381875e68a,
    title: '微信小程序',
    pid: '5ab3209bdf373acae5da097e',
    keywords: '微信小程序',
    status: '1',
    description: '微信小程序' } ]
    */
    // 转换成前端需要的树形的数据，tools中定义一个转换数据的方法
    let newResult=tools.cateToList(result)
    await ctx.render("admin/articlecate/index",{
        list:newResult
    })
    
})

// 渲染增加分类页面
router.get("/add",async ctx=>{
    let result=await DB.find("articlecate",{'pid':"0"}) //0需要用引号引起来
    await ctx.render("admin/articlecate/add",{
      cateList:result
    })
    // console.log(result)
})

// 处理添加分类逻辑
router.post("/doAdd",async ctx=>{
    let addDate=ctx.request.body
    // console.log(addDate)
    // /{ title: 'koa',
    // pid: '0',
    // keywords: 'koa技术开发2',
    // status: '1',
    // description: 'koa技术开发2' }
    // 得到数据后把数据插入都数据库中
    await DB.insert("articlecate",addDate)
    ctx.redirect(ctx.state.__HOST__+"/admin/articlecate/")
})

//渲染编辑分类页面
router.get("/edit",async ctx=>{
    let id=ctx.query.id
    let result=await DB.find("articlecate",{'_id':DB.getObjectId(id)})
    let articlecate=await DB.find('articlecate',{'pid':"0"})
    // console.log(result[0])
    // { _id: 5ab32d919c9bdb2ce4e92ad0,
    //     title: '网站案例',
    //     pid: '5ab3209bdf373acae5da097e',
    //     keywords: '网站案例',
    //     status: '1',
    //     description: '网站案例',
    //     add_time: 2018-03-24T01:50:43.951Z }
    await ctx.render("admin/articlecate/edit",{
        list:result[0],
        catelist:articlecate
    })
})

// 处理编辑分类逻辑
router.post("/doEdit",async ctx=>{
    let editData = ctx.request.body;
    let id = editData.id;
    let title = editData.title;
    let pid = editData.pid;
    let keywords = editData.keywords;
    let status = editData.status;
    let description = editData.description;
//     console.log(editData)
//     { title: '网站案例333',
//   id: '5ab32d919c9bdb2ce4e92ad0',
//   pid: '5ab3209bdf373acae5da097e',
//   keywords: '网站案例333',
//   status: '1',
//   description: '网站案例33' }
// 更新数据库中的每一条，不能把editData更新
    await DB.update("articlecate",{'_id':DB.getObjectId(id)},{
        title,pid,keywords,status,description
    })
    ctx.redirect(ctx.state.__HOST__+"/admin/articlecate/")
})



module.exports=router.routes()

/*
 console.log(result)：
 
[ { _id: 5ab3209bdf373acae5da097e,
    title: '成功案例',
    description: '成功案例',
    keywords: '成功案例',
    pid: '0',
    add_time: '',
    status: '1' },
  { _id: 5ab34b61c1348e1148e9b8c2,
    title: '开发服务',
    pid: '0',
    keywords: '成功案例',
    status: '1',
    description: '成功案例',
    add_time: 2018-03-22T06:45:42.467Z },
  { _id: 5afa56bb416f21368039b05d,
    title: '新闻资讯',
    pid: '0',
    keywords: '新闻资讯',
    status: '1',
    description: '新闻资讯' } ]
*/