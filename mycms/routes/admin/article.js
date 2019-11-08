const router=require("koa-router")()
const DB=require("../../model/db")
const tools=require("../../model/tools")

// 引入上传图片的插件
const multer=require("koa-multer")
// 上传文件的相关配置
var storage=multer.diskStorage({
    // 文件保存路径
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')  // 上传的文件 保存在什么地方
    },
    //修改文件名称
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");  //以点分割成数组，数组的最后一项就是后缀名
        cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
// 加载配置
var upload=multer({storage:storage})

// 实现分页,渲染内容列表页面
router.get("/",async ctx=>{
    let page=ctx.query.page || 1
    // 每页显示数目
    let pageSize=5
    // 得到总条数
    let resultCount=await DB.count('article',{})
    // 得到总页数
    let totalPages=Math.ceil(resultCount/pageSize)
    let result=await DB.find('article',{},{},{       //最后一个{}表示查找条件
        page,
        pageSize,
        sortJson:{
            'add_time':-1   //倒叙排法，最后发布的排在最前面
        }
    })
    await ctx.render("admin/article/index",{
        list:result,
        page,
        totalPages
    })
})

// 渲染增加新闻页面
router.get("/add",async ctx=>{
    // 渲染添加页面是把所属分类传过去
    // let newresult=await DB.find('articlecate',{'pid':'0'}) 
    // await ctx.render("admin/article/add",{
    //     newlist:newresult
    // })
    // 另一种写法
    let catelist=await DB.find('articlecate',{})
    await ctx.render("admin/article/add",{
            catelist:tools.cateToList(catelist),
            newlist:catelist
    })
})

// 接收客户端上传的新闻内容（文本，图片）,加了upload.single('img_url')这个头，文本，图片等才能上传成功，img_url是上传文件input标签中的name属性
router.post("/doAdd",upload.single('img_url'),async ctx=>{
    // 接收数据
    // let aid=ctx.req.body.id
    // let id=aid.replace(/\"/g,"")    //去掉id的双引号

//     console.log(aid)
//     [ '5ab3209bdf373acae5da097e',
//   '5ab34b61c1348e1148e9b8c2',
//   '5afa56bb416f21368039b05d',
//   '5afa5392416f21368039b05e',
//   '5afa539b416f21368039b05f',
//   '5afb9f184a785e381875e689',
//   '5afb9f304a785e381875e68a',
//   '5d665419cfb35c1328a91ce7' ]
    let pid=ctx.req.body.pid
    let title=ctx.req.body.title
    let author=ctx.req.body.author.trim()
    let status=ctx.req.body.status
    let is_best=ctx.req.body.is_best
    let is_hot=ctx.req.body.is_hot
    let is_new=ctx.req.body.is_new
    let keywords=ctx.req.body.keywords.trim()
    let add_time=tools.getTime()
    let description=ctx.req.body.description  || ""
    let content=ctx.req.body.content  || ""
    // let img_url=ctx.req.file
    let img_url=ctx.req.file ? ctx.req.file.path.substring(7) : ""

    // console.log(pid,catename,title,author,status,is_best,is_hot,is_new,keywords,add_time,description,content,img_url)
//     5ab3209bdf373acae5da097e 成功案例 111 222 1 1 1 1 444 555  { fieldname: 'img_url',
//   originalname: '528950_最美八月花.jpg',
//   encoding: '7bit',
//   mimetype: 'image/jpeg',
//   destination: 'public/uploads/',
//   filename: '1567079711883.jpg',
//   path: 'public\\uploads\\1567079711883.jpg',
//   size: 1110461 }
//  得到所属分类的名称
    let res=await DB.find('articlecate',{'_id':DB.getObjectId(pid)})
    // let res=await DB.find('articlecate',{'_id':DB.getObjectId(id)})
    // console.log(res)
    // [ { _id: 5afa5392416f21368039b05e,
    //     title: '公司新闻',
    //     pid: '5afa56bb416f21368039b05d',
    //     keywords: '公司新闻',
    //     status: '1',
    //     description: '公司新闻22' } ]
    let catename=res[0].title

    let json={img_url,pid,catename,title,author,status,is_best,is_hot,is_new,keywords,add_time,description,content}
    await DB.insert('article',json)
    ctx.redirect(ctx.state.__HOST__+"/admin/article")
})

// 渲染编辑页面
router.get("/edit",async ctx=>{
    let id=ctx.query.id
    let result=await DB.find('article',{'_id':DB.getObjectId(id)})
    let newresult=await DB.find('articlecate',{})
    await ctx.render("admin/article/edit",{
        catelist:tools.cateToList(newresult),
        list:result[0],
        //记录当前所在页
        prevPage:ctx.state.G.prePage
    })
})

// 处理编辑分类逻辑
router.post("/doEdit",upload.single('img_url'),async ctx=>{
    // 接收数据
    let prevPage=ctx.req.body.prevPage || "" //得到当前所在页面
    let pid=ctx.req.body.pid
    let id=ctx.req.body.id
    let catename=ctx.req.body.catename
    let title=ctx.req.body.title.trim()
    let author=ctx.req.body.author.trim()
    let status=ctx.req.body.status
    let is_best=ctx.req.body.is_best
    let is_hot=ctx.req.body.is_hot
    let is_new=ctx.req.body.is_new
    let keywords=ctx.req.body.keywords.trim()
    let description=ctx.req.body.description  || ""
    let content=ctx.req.body.content  || ""
    // let img_url=ctx.req.file
    let img_url=ctx.req.file ? ctx.req.file.path.substring(7) : ""

    // console.log(pid,id,catename,title,author,status,is_best,is_hot,is_new,keywords,description,content,img_url)
    // 5ab34b61c1348e1148e9b8c2 undefined  koa1 koa开发2 1 1 1 1 koa开发4 koa开发5 <p><em><strong><span style="color: rgb(255, 0, 0);">koa开发3</span></strong></em></p> uploads\1567123257326.jpg


    // 编辑了一张新图片
    if(img_url){
        var json={pid,catename,title,author,status,is_best,is_hot,is_new,keywords,description,content,img_url}
    }else{
        var json={pid,catename,title,author,status,is_best,is_hot,is_new,keywords,description,content}
    }
    await DB.update('article',{'_id':DB.getObjectId(id)},json)
    if(prevPage){
       ctx.redirect(prevPage)
    }else{
        ctx.redirect(ctx.state.__HOST__+"/admin/article")
    }
})




module.exports=router.routes()