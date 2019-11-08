const router=require("koa-router")()
const DB=require("../../model/db")

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

// 渲染轮播图列表页面
router.get("/",async ctx=>{
    let page=ctx.query.page || 1  //点击时显示哪一页
    let pageSize=5  //每页显示的页数
    let totalPage=await DB.count('focus',{})  //总数据数
    let count=Math.ceil(totalPage/pageSize) //总页数
    let result =await  DB.find('focus',{},{},{
        page,pageSize,
    })
    // console.log(result)
    await ctx.render("admin/focus/index",{
        list:result,
        page,
        count,
    })
})

// 渲染编辑轮播图页面
router.get("/edit",async ctx=>{
    // console.log(1111)        /1111   程序正确，继续执行
    let id=ctx.query.id
    // let pic=ctx.qery.pic
    let result = await DB.find('focus',{'_id':DB.getObjectId(id)})

    // console.log(result)
    // [ { _id: 5aea7107d9210417c0928544,
    //     title: '外包我们最专业',
    //     pic: 'upload\\1526293657738.jpg',
    //     url: '',
    //     sort: '1',
    //     status: 1,
    //     add_time: 2018-05-14T10:27:37.753Z } ]
    
    await ctx.render("admin/focus/edit",{
        list:result[0],
        // 记录当前所在页
        prevPage:ctx.state.G.prePage
    })
})

// 处理编辑轮播图逻辑
router.post("/doEdit",upload.single('pic'),async ctx=>{
    let title=ctx.req.body.title
    let prevPage=ctx.req.body.prevPage
    let id=ctx.req.body.id
    let pic=ctx.req.file ? ctx.req.file.path.substr(7) : ""
    // console.log(title)
    if(pic){
        var json={title,id,pic,prevPage}
    }else{
        var json={title,id,prevPage}
    }
    await DB.update('focus',{'_id':DB.getObjectId(id)},json)
    if(prevPage){
         ctx.redirect(prevPage)
    }else{
         ctx.redirect(ctx.state.__HOST__+"/admin/focus")
    }
})

// 渲染添加轮播图页面
router.get("/add",async ctx=>{
    await ctx.render("admin/focus/add")
})


// 处理添加轮播图逻辑
router.post("/doAdd",upload.single('pic'),async ctx=>{
    let title=ctx.req.body.title
    let url=ctx.req.body.url
    let status=ctx.req.body.status
    let sort=ctx.req.body.sort
    let pic=ctx.req.file ? ctx.req.file.path.substr(7) : ""
    // console.log(ctx.req.file)
    //     { fieldname: 'pic',
    //   originalname: '528950_最美八月花.jpg',
    //   encoding: '7bit',
    //   mimetype: 'image/jpeg',
    //   destination: 'public/uploads/',
    //   filename: '1567158361125.jpg',
    //   path: 'public\\uploads\\1567158361125.jpg',
    //   size: 1110461 }

    if(pic){
        var json={title,url,status,sort,pic}
    }else{
        var json={title,url,status,sort}
    }
    await DB.insert('focus',json)
    await ctx.redirect(ctx.state.__HOST__+"/admin/focus/")
   
    // console.log(json)
    // { title: 'koa', url: 'www.koa.com', status: '1', sort: '6' }
})


module.exports=router.routes()


// console.log(result)
  // [ { _id: 5ae9c9851da4611ef8a8a8f4,
    //     title: '靠谱项目找靠谱的人',
    //     pic: 'upload\\1526293698277.jpg',
    //     url: 'http://www.itying.com/koa',
    //     sort: '2',
    //     status: 1,
    //     add_time: 2018-05-14T10:28:18.290Z },
    //   { _id: 5aea7107d9210417c0928544,
    //     title: '外包我们最专业',
    //     pic: 'upload\\1526293657738.jpg',
    //     url: '',
    //     sort: '1',
    //     status: 1,
    //     add_time: 2018-05-14T10:27:37.753Z },
    //   { _id: 5af965c22dc5af0e806a3820,
    //     title: '总监级大咖为您授课',
    //     pic: 'upload\\1526293954855.jpg',
    //     url: '',
    //     sort: '',
    //     status: 1,
    //     add_time: 2018-05-14T10:32:34.866Z } ]