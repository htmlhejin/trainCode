const router=require("koa-router")()
const DB=require("../../model/db")

router.get("/",async ctx=>{
    ctx.body="api接口首页面"
})

// 删   删除管理员接口
router.get("/remove",async ctx=>{
    let collection=ctx.query.collection
    let id=ctx.query.id
    let r=await DB.remove(collection,{'_id':DB.getObjectId(id)})
    if(r){
        ctx.body={
            code:1,
            message:"删除成功"
        }
    }else{
        ctx.body={
            code:0,
            message:"删除失败"
        }
    }
})

module.exports=router.routes()