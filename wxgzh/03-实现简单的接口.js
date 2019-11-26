const Koa = require("koa")
const path = require("path")
const fs = require("fs")

const koaStatic = require("koa-static")
const wechat = require("co-wechat")
const Api = require("co-wechat-api")
const config = require("./config")
const Router = require("koa-router")
const {ServerToken} = require("./mongoose")

const router = new Router()

let app = new Koa()
// 托管静态资源
app.use(koaStatic(__dirname+"/"))
app
  .use(router.routes())
  .use(router.allowedMethods());

  let menu={
    "button":[
      {
        "type":"click",
        "name":"今日歌曲",
        "key":"V1001_TODAY_MUSIC"
      },
      {
        "name":"菜单",
        "sub_button":[
          {
            "type":"view",
            "name":"搜索",
            "url":"http://www.soso.com/"
          },
          {
            "type":"click",
            "name":"赞一下我们",
            "key":"V1001_GOOD"
          }]
        }]
      }

// 自己的服务器接入腾讯服务器
router.all('./wechat',wechat(config).middleware( async (message,ctx)=>{
    return "hello"
}))
// 以后每次请求时都会带着token
let api = new Api(config.appID,config.appsecret,async ()=>{
    // 获取token
    await ServerToken.findOne()
},async token=>{
    // 存储token   保存到数据库中
    await ServerToken.updateOne({},token,{upsert:true})
})

router.get("/getFollowers",async ctx=>{
    // ctx.body="hello"
    // console.log("hello")
    // 获取关注者列表
    let res=  await api.getFollowers()
    // 创建菜单
    api.createMenu(menu);    // 打印出来是Promise{<oending>}
    ctx.body=res
    // 获取菜单
    let res2 =await api.getMenu()
    // console.log(res2)  // { menu: { button: [ [Object], [Object] ] } }
})

app.listen(3333)


// console.log(res)
// { total: 2,
//     count: 2,
//     data:
//      { openid:
//         [ 'o830lwjIA5-bzx0Qp-ZctRlDWo4s',
//           'o830lwvMeFHAXR01NbE2ioVSCvks' ] },
//     next_openid: 'o830lwvMeFHAXR01NbE2ioVSCvks' }