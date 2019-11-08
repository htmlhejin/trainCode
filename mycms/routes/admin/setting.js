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

router.get("/",async ctx=>{
    let result=await DB.find('setting',{})
    await ctx.render("admin/setting/index",{
        list:result[0]
    })
})

router.post("/doAdd",upload.single('site_logo'),async ctx=>{
    let id=ctx.req.body.id
    let title=ctx.req.body.title
    let logo=ctx.req.file ? ctx.req.file.path.substr() : ""
    let site_keywords=ctx.req.body.site_keywords
    let site_description=ctx.req.body.site_description
    let site_icp=ctx.req.body.site_icp
    let site_qq=ctx.req.body.site_qq
    let site_tel=ctx.req.body.site_tel
    let site_address=ctx.req.body.site_address
    let site_status=ctx.req.body.site_status
    await DB.update('setting',{'_id':DB.getObjectId(id)},{title,logo,site_keywords,site_description,site_icp,site_qq,site_tel,site_address,site_status})
    ctx.redirect(ctx.state.__HOST__+"/admin/setting")
})


module.exports=router.routes()