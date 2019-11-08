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

// 渲染友情链接列表页面
router.get("/",async ctx=>{
    // 得到当前页
    let page=ctx.query.page || 1
    // 得到每页显示条数
    let pageSize=3
    // 得到总条数
    let totalPage=await DB.count('link',{})
    // console.log(totalPage)
    // 得到总页数
    let count = Math.ceil(totalPage/pageSize)
    let result=await DB.find('link',{},{},{
        page,
        pageSize,
        sortJson:{
            'add_time':-1   //倒叙排法，最后发布的排在最前面
        }
    })
    await ctx.render("admin/link/index",{
        list:result,
        page,
        count,
        
    })
    // console.log(result)
})

// 渲染增加友情链接列表页面
router.get("/add",async ctx=>{
    await ctx.render("admin/link/add")
})

// 处理增加友情链接逻辑
router.post("/doAdd",upload.single('pic'),async ctx=>{
    // 如果上传的有文件，尽量用ctx.req,原生的
    let add_time=tools.getTime()
    let title=ctx.req.body.title
    let pic=ctx.req.file ? ctx.req.file.path.substr(7) : ""
    let url=ctx.req.body.url
    let sort=ctx.req.body.sort
    let status=ctx.req.body.status
    // console.log(pic)    //public\uploads\1567212845817.jpg,需要把publc去掉
    await DB.insert('link',{add_time,title,pic,url,sort,status})
    ctx.redirect(ctx.state.__HOST__+"/admin/link")
})

// 渲染编辑页面
router.get("/edit",async ctx=>{
    let id=ctx.query.id
    let result =await  DB.find('link',{'_id':DB.getObjectId(id)})

    // console.log(result)
    // [ { _id: 5d69c658dc0ebc2bc8dd95f9,
    //     title: 'koa',
    //     pic: 'uploads\\1567213143984.jpg',
    //     url: 'www.koa.com',
    //     sort: '2',
    //     status: '1' } ]
    await ctx.render("admin/link/edit",{
        list:result[0],
        // 记录当前所在页
        prevPage:ctx.state.G.prePage
    })
})

// 处理编辑逻辑
router.post("/doEdit",upload.single('pic'),async ctx=>{
    // 得到新的内容
    let id=ctx.req.body.id
    let prevPage=ctx.req.body.prevPage || ""  //当前所在页
    let title=ctx.req.body.title
    let pic=ctx.req.file ? ctx.req.file.path.substr(7) : ""
    let url=ctx.req.body.url
    let status=ctx.req.body.status
    // 新编辑了一张图片
    if(pic){
        var json={
            id,title,pic,url,status
        }
    }else{
        var json={
            id,title,url,status
        }
    }
    // 更新数据库中的内容
    await DB.update('link',{'_id':DB.getObjectId(id)},json)
    // 重定向到上一页
    if(prevPage){
        ctx.redirect(prevPage)
    }else{
        ctx.redirect(ctx.state.__HOST__+"/admin/link")
    }
    
})

module.exports=router.routes()

// console.log(result)
// [ { _id: 5aea6f88b7073819a4eb68f8,
//     title: 'angular5教程',
//     pic: '',
//     url: 'http://www.itying.com/angualr',
//     sort: '2',
//     status: '1',
//     add_time: 2018-05-03T02:10:16.494Z },
//   { _id: 5aea6fbdb7073819a4eb68f9,
//     title: '百度',
//     pic: 'upload\\1525313469323.png',
//     url: 'http://www.baidu.com',
//     sort: '22',
//     status: 1,
//     add_time: 2018-05-03T02:11:09.330Z },
//   { _id: 5aea6fc5b7073819a4eb68fa,
//     title: '1111',
//     pic: '',
//     url: '1111',
//     sort: '111',
//     status: 1,
//     add_time: 2018-05-03T02:11:17.104Z } ]

