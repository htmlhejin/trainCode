const router=require("koa-router")()
const DB=require("../../model/db")

router.get("/",async ctx=>{
    await ctx.render("admin/index")
})

// 实现改变状态的接口
router.get("/changeStatus",async ctx=>{
    // console.log("hello")
    let collectionName=ctx.query.collectionName
    let attr=ctx.query.attr   //得到状态
    let id=ctx.query.id   ////得到id
    // console.log(collectionName,attr,id)
    let result=await DB.find(collectionName,{'_id':DB.getObjectId(id)})
    // console.log(result)
    /*
    [ { _id: 5ab1f6e8069ce334f0ce0348,
    username: 'admin',
    password: 'e10adc3949ba59abbe56e057f20f883e',
    status: 1,
    last_time: 2019-08-27T08:44:55.443Z } ]

    [ { _id: 5ab1f6fc069ce334f0ce0349,
    username: 'zhangsan',
    password: 'e10adc3949ba59abbe56e057f20f883e',
    status: 1,
    last_time: 2018-03-22T02:48:20.036Z } ]
    */
    if(result.length>0){    //找到数据
        // 改变状态
        if(result[0][attr]==1){
            // 拼装一个json
            var json={
                [attr]:0
            }
        }else{
            var json={
                [attr]:1
            }
        }
        // 更新数据库中的状态
        let updateResult=await DB.update(collectionName,{'_id':DB.getObjectId(id)},json)
        if(updateResult){
            ctx.body={
                "message":"更新成功",
                'success':true
            }
        }else{
            ctx.body={
                "message":"更新失败",
                'success':false
            }
        }
    }else{
        ctx.body={
            "message":"更新失败或参数错误",
            'success':false
        }
    }
})

// 实现排序的接口
router.get("/changeSort",async ctx=>{
    // 传一个条件，通过条件调用排序方法
    let collectionName=ctx.query.collectionName     //得到集合
    let id=ctx.query.id     //得到id
    let sortValue=ctx.query.sortValue   // //得到集合中某个字段
    let json={
        sort:sortValue  //sort是排序规则,根据sortValue排序
    }
    // 更新后的结果
    let updateResult=await DB.update(collectionName,{'_id':DB.getObjectId(id)},json)
    if(updateResult){
        ctx.body={
            'mssage':"排序成功",
            'success':true
        }
    }else{
        ctx.body={
            'mssage':"排序失败",
            'success':false
        }
    }
})

// 删除数据
router.get("/remove",async ctx=>{
    let id=ctx.query.id
    let collection=ctx.query.collection
    await DB.remove(collection,{'_id':DB.getObjectId(id)})
    // 重定向到上一页
    ctx.redirect(ctx.state.G.prePage)
})

module.exports=router.routes()


