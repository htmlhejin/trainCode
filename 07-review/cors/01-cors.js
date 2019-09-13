//cors---解决跨域的一种方案，后端配置选项
// 有cors这样一个包，安装，引入之后不需要设置多个头，就可以解决跨域

// 不安装express 不安装koa,使用原生的方式node
const http=require("http")
http.createServer((req,res)=>{

    // 设置一个头来解决跨域，后面可以设置哪些客户端可以访问后端接口
    res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500')

    // 设置可以添加哪些头可以访问后端这个接口
    res.setHeader('Access-Control-Allow-Headers','token,xxx')
    //index.html:11 Cross-Origin Read Blocking (CORB) blocked cross-origin response http://localhost:3030/api with MIME type . See https://www.chromestatus.com/feature/5629709824032768 for more details.
    // (anonymous) @ index.html:11
    // index.html:27 {name: "wangcai"}   有一个警告，要想去掉警告，可以再设置一个头来指定允许哪些方法来访问后端这个接口

    // 每隔几秒刷新页面，就会有一个试探性请求，Request Method: OPTIONS即在真正发送请求时试探一下是否Ok，如果🆗再去发送请求,这是一种复杂的请求方式，get/post属于简单的请求方式
    // 请求时我们可以指定允许哪些方法请求后端这个接口,  试探请求，更新请求，删除请求等复杂请求,指定了哪些方法可以访问，这样就不会报警告错误
    res.setHeader('Access-Control-Allow-Methods','OPTIONS,PUT,DELETE')
    
    // 设置每隔多长时间发送一个options请求    10秒
    res.setHeader('Access-Control-Max-Age','10')

    // 允许客户端携带凭证(如cookie)
    res.setHeader('Access-Control-Allow-Credentials',true)


    // 如果是试探请求，直接结束程序
    if(req.method==='OPTIONS'){
        return res.end()
    }
    if(req.url==="/api"){
        // 访问/api时，浏览器给客户端种植一个cookie,以后访问都带着这个cookie
        res.setHeader("Set-Cookie","name=xiaoqiang")
        console.log(req.headers)
//         { host: 'localhost:3030',
//   connection: 'keep-alive',
//   origin: 'http://127.0.0.1:5500',
//   'user-agent':
//    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
//   token: 'xxx',
//   accept: '*/*',
//   referer: 'http://127.0.0.1:5500/index.html',
//   'accept-encoding': 'gzip, deflate, br',
//   'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
//   cookie: 'name=xiaoqiang' }    请求头里就有了一个cookie

        // 原生Node中要把对象转成字符串，才能把对象返回给客户端，本质是不能直接将对象返回的
        res.end(JSON.stringify({name:'wangcai'}))
        // express中封装了json方法，可以直接将对象返回给客户端
        // res.json({name:'wangcai'})
    }
}).listen(3030)