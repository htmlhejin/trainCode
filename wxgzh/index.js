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

router.all('./wechat',wechat(config).middleware( async (message,ctx)=>{
    return "hello"
}))
let api = new Api(config.appID,config.appsecret,async ()=>{
    await ServerToken.findOne()
},async token=>{
    await ServerToken.updateOne({},token,{upsert:true})
})

router.get("/getFollowers",async ctx=>{
    let res=  await api.getFollowers()
    api.createMenu(menu);    
    ctx.body=res
    let res2 =await api.getMenu()
})

app.listen(3333)
