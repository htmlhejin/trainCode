const Koa = require("koa")
const Router = require("koa-router")
const static = require("koa-static")
const wechat = require("co-wechat")
const WechatAPI = require("co-wechat-api")
const {ServerToken,ClientToken,a} = require("./mongoose")
const OAuth = require("co-wechat-oauth")

let app =new Koa()
const router = new Router()

app.use(static(__dirname+"/"))
let config={
    appID:"wx41e90b4f6d647283",
    appsecret:"540ff783886acc7aa8d9bc3efaa6abcc",
    token:"wangcai"
}

let menu = {
    "button": [
        {
            "type": "click",
            "name": "今日歌曲",
            "key": "V1001_TODAY_MUSIC"
        },
        {
            "name": "菜单",
            "sub_button": [
                {
                    "type": "view",
                    "name": "搜索",
                    "url": "http://wc.free.idcfengye.com/"
                },
                {
                    "type": "click",
                    "name": "赞一下我们",
                    "key": "V1001_GOOD"
                }]
        }]
}
// 自己的服务器接入腾讯服务器
router.all('/wechat',wechat(config).middleware( async (message,ctx)=>{
    return "hello"
}))
// 带着令牌去请求微信公众平台的api
let api = new WechatAPI(config.appID,config.appsecret,
    async ()=>await ServerToken.findOne(),
    async token=>await ServerToken.updateOne({},token,{upsert:true})
)

router.get("/getFollowers", async ctx=>{
    // console.log(a)   // Schema{.....}
    let res = await api.getFollowers()
    api.createMenu(menu)
    ctx.body = res
})
const oauth = new OAuth(config.appID,config.appsecret)

router.get("/wxAuthrize",async ctx => {
    const state = ctx.query.id;
    // http://wc.free.idcfengye.com/wxAuthrize
    // console.log(ctx.href)
    let redirectUrl = ctx.href.replace("wxAuthrize","wxCallback")
    // console.log(redirectUrl) // http://wc.free.idcfengye.com/wxCallback
    // console.log(redirectUrl)    // http://wc.free.idcfengye.com/wxCallback
    const scope = "snsapi_userinfo"
    // 获取授权后的url地址   三个参数：授权后的ur地址，开发者提供的数据，作用范围
    const url = oauth.getAuthorizeURL(redirectUrl,state,scope)
    ctx.redirect(url)
})
router.get("/wxCallback",async ctx=>{
    // console.log("callback...")
    const code = ctx.query.code;
    // console.log(code)
    const token = await oauth.getAccessToken(code)
    const accessToken = token.data.access_token;
    // console.log(accessToken)
    const openid = token.data.openid;
    // ctx.redirect("/openid="+openid)
    let userInfo = await oauth.getUser(openid)
    console.log(userInfo)

    ctx.body = `
        <h1>${userInfo}</h1>
    `
})

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3333)