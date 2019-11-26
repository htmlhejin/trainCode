const Koa = require("koa")
const wechat = require("co-wechat")   // 接入腾讯服务器并且回复消息的中间件
const config = require("./config")
let app = new Koa()
// app.use(wechat(config).middleware(async (message, ctx) => {
//     // message就是用户输入的消息
//     // console.log(message)
//     // console.log(message.Content)   
//     //     { ToUserName: 'gh_7a8eb884d6f8',
//     //   FromUserName: 'o830lwvMeFHAXR01NbE2ioVSCvks',
//     //   CreateTime: '1573096475',
//     //   MsgType: 'text',
//     //   Content: 'hello',
//     //   MsgId: '22521326614913123' }
//     return "你好" + message.Content
// }))

// -----------------------------------  图文恢复
// app.use(wechat(config).middleware(async (message,ctx)=>{
//     return [
//         {
//           title: '你来我家接我吧',
//           description: '这是女神与高富帅之间的对话',
//           picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
//           url: 'http://nodeapi.cloudfoundry.com/'
//         }
//       ];
// }))

// -----------------------------------恢复一段音乐
app.use(wechat(config).middleware(async (message,ctx)=>{
    return {
        type: "music",
        content: {
          title: "来段音乐吧",
          description: "一无所有",
          musicUrl: "http://mp3.com/xx.mp3",
          hqMusicUrl: "http://mp3.com/xx.mp3"
        }
      };
}))

// ---------------------------------------
// app.use(wechat(config).middleware(async (message,ctx)=>{
//     if(message.FromUserName==="diaosi"){
//         return "hehe"
//     }else if(message.FromUserName==="text"){
//         return {
//             content:"text object",
//             type:"text"
//         }
//     }
// }))
app.listen(3333)