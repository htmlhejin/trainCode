const router=require("koa-router")()
const DB=require("../../model/db")

// 获取管理员列表的api接口
router.get("/",async ctx=>{
    ctx.body="manage页面"
})

// 增 // 添加管理员的api接口
router.post("/doAdd",async ctx=>{
    // 得到移动端提交过来的数据
    let username=ctx.request.body.username
    let password=ctx.request.body.password
    let rpassword=ctx.request.body.rpassword

    // 后端验证移动端提交的数据
    if(!/^\w{4,20}/.test(username)){
        let json={
            code:0, //表示验证失败
            message:"用户名不合法"
        }
        // 验证之后不能再渲染页面了，给移动端返回json数据
        ctx.body=json
    }else if(password!=rpassword || password.length<6){
        let json={
            code:0,
            message:"两次密码不一致或密码不合法"
        }
        ctx.body=json
    }else{
        let res=await DB.find('admin',{'username':username})
        if(res.length>0){
            let json={
                code:0, 
                message:"用户名已存在"
            }
            ctx.body=json
        }else{
            await DB.insert('admin',{'username':username,'password':password})
            let json={
                code:1,
                message:"恭喜你，添加成功"
            }
            ctx.body=json
        }
    }
})

// 删除  封装成公用方法

// 改 // 编辑管理员的接口
router.post("/doEdit",async ctx=>{
    // 得到用户提交过来的数据，经过处理返回给用户

    let username=ctx.request.body.username
    let password=ctx.request.body.password
    let rpassword=ctx.request.body.rpassword
    let r=await DB.update('admin',{'username':username},{password,rpassword})   
    if(r){
        ctx.body={
            code:1,
            message:"更新成功"
        } 
    }else{
        ctx.body={
            code:0,
            message:"更新失败"
        } 
    }
})

// 查  查找管理员的api接口
module.exports=router.routes()