const router=require("koa-router")()
const DB=require("../../model/db")

// 获取员工列表的api接口
router.get("/",async ctx=>{
    let r=await DB.find('admin',{})
    for(let i=0;i<r.length;i++){
        delete r[i].password    //数据返回给移动端时把密码去掉
    }
    // console.log(r)
    // [ { _id: 5ab1f6e8069ce334f0ce0348,
    //     username: 'admin',
    //     status: 1,
    //     last_time: 2019-08-28T00:26:51.471Z },
    //   { _id: 5ab1f6fc069ce334f0ce0349,
    //     username: 'zhangsan',
    //     status: 0,
    //     last_time: 2019-08-31T00:07:51.873Z },
    //   { _id: 5d650f444e9abb0b3c59836a, username: 'hello', status: 1 },
    //   { _id: 5d650faf9df39d1e3062c715,
    //     username: 'callback',
    //     status: 1 } ]
    ctx.body="hello"
})

module.exports=router.routes()