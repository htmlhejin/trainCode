const Koa = require("koa")
const fs = require("fs")

const wechat = require("co-wechat")
const Api = require("co-wechat-api")
const config = require("./config")
const Router = require("koa-router")

const router = new Router()

let app = new Koa()



// 自己的服务器接入腾讯服务器
app.use(wechat(config).middleware(async (message, ctx) => {
    // return message.Content;
    if (message.Content === 'diaosi') {
        // 回复屌丝(普通回复)
        return 'hehe';
    } else if (message.Content === 'text') {
        return { type: "text", content: "text object" }
    } else if (message.Content === 'music') {
        return {
            type: "music",
            content: {
                title: "来段音乐吧",
                description: "一无所有",
                musicUrl: "http://mp3.com/xx.mp3",
                hqMusicUrl: "http://mp3.com/xx.mp3"
            }
        };
    } else if (message.Content === 'kf') {
        return {
            type: "customerService",
            kfAccount: "test1@test"
        }
    } 
    else {
        return [
            {
                title: '你来我家接我吧',
                description: '这是女神与高富帅之间的对话',
                picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
                url: 'http://nodeapi.cloudfoundry.com/'
            }
        ];
    }
}))
// 当多进程时，token需要全局维护，以下为保存token的接口：
// 拿到token,保存token，以后每次请求时都会带着token   // readFileSync   同步读取
let api = new Api(config.appID, config.appsecret,
    async () => {    // 取token
        const txt = await fs.readFileSync('access_token.txt', 'utf-8')
        return JSON.parse(txt)
    }, async () => {      // 存token   'access_token.txt---保存到了记事本中
        await fs.writeFileSync('access_token.txt', JSON.stringify(token))
    })
app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3333)
