const koa = require("koa")
const router = require("koa-router")()
const static = require("koa-static")
const axios = require("axios")
const querystring = require("querystring")

const app = new koa();
app.use(static(__dirname+"/"))




const config = {
    client_id:"ef8a58d39cde891c2a6b",
    client_secret:"285fffa19a18d527c06e7bd4d73a1e89bf4c9c6f"
}
// Your application’s callback URL. Read our OAuth documentation for more information.
router.get("/github/login",(ctx)=>{
    // 需要重定向到github的认证页面
    // https://github.com/settings/applications/new

    let path = "https://github.com/login/oauth/authorize?client_id="+config.client_id

    ctx.redirect(path)

    // ctx.body = "hello ~"
})

router.get("/github/callback",async (ctx)=>{
    // console.log("callback....")
    // 第三方服务器返回code
    const code = ctx.query.code  // 994103c1803bd3dd4e31
    // console.log(code)
    const params = {
        client_id:config.client_id,
        client_secret:config.client_secret,
        code:code
    }
    // 根据code去请求令牌
    let res = await axios.post("https://github.com/login/oauth/access_token",params)
    // console.log(res.data) // access_token=62563fc4ba2b9fa279969dbca6727659668dcc51&scope=&token_type=bearer
    // 返回令牌
    const access_token = querystring.parse(res.data).access_token;
    // console.log(access_token) // ae4c23f9307c4d88286b33d52705711c8ec8c668
    // 根据令牌请求用户信息，可以把用户名，头像等渲染在页面上
    res = await axios.get("https://api.github.com/user?access_token="+access_token)
    // console.log(res.data) // 得到一堆的用户信息
    ctx.body = `
        <h1>hello ${res.data.login}</h1>
        <img src=${res.data.avatar_url} />
    `
})

app.use(router.routes()); // 启动路由
app.use(router.allowedMethods());
app.listen(3000)







