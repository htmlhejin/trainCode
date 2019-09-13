const Koa=require("koa")

// 创建Koa实例
let app=new Koa()
// 中间件中有两个参数，ctx,next   ctx表示上下文 ，ctx中包装了req,res,也在原生基础上封装了一些新的方法：request,response
app.use((ctx,next)=>{
//错误
    // ctx.res.send("world")   //Internal Server Error,send是express中的方法,在ctx中没有
//

    // koa中封装的方法:ctx.response.xxx   ctx.requests.xxx
    //  ctx.response.body表示koa中封装的方法上的又一个方法
    // ctx.response.body="hello1"  // hello1
    // ctx.body表示响应数据
    // ctx.body="ppppp"    //ppppp

    // 通过原生的方式获取url
    // console.log(ctx.req.url)    // /abc?name=hello

    // 通过koa封装的对象获取url
    // console.log(ctx.request.url)    // /abc?name=hello

    // 通过koa封装的对象得到上面的req对象，再获取url
    // console.log(ctx.request.req.url)    // /abc?name=hello
    // ctx.response.res.end("end") // 浏览器端响应end

    // url直接挂在了koa中,通过上下文得到url,path
    // console.log(ctx.url)    // /abc?name=hello
    // console.log(ctx.path)   // /abc

    // 通过原生方式获取url
    // console.log(ctx.req.url)    // /abc?name=hello

    // 通过koa中封装的对象获取url
    // console.log(ctx.request.url)    // /abc?name=hello


    // 响应数据
    // 通过原生方式响应
    // console.log(ctx.res.end("<h1>hello</h1>"))  //浏览器端响应hello  后端黑窗口打印出ServerResponse{}
    
    // ctx.res表示拿原生的res,原生的res中有write,end对象
    // ctx.res.end("<h1>hello~</h1>")   //浏览器端响应 h1标签式的 hello~

    // 通过koa封装的方法响应数据
    // ctx.response.body="nihao--koa" // 浏览器端渲染出nihao--koa

    ctx.response.res.end("<h2>hello koa--</h2>")    // <h2>hello koa--</h2>
    // ctx.body="hello------"

//错误：
    // ctx.response没有end方法
    // ctx.response.end("<p>koa封装</p>")
//
})
// 监听端口
app.listen(3000)

// 总结：
    /*
        ctx中包装了res,req方法，但是又在原生的基础上封装了request,reponse

        请求数据有一以下4种方法：如请求url,path
        ctx.url  ctx.path  // ctx中直接封装了url,path对象，使用时更方便
        ctx.req.url  // 原生方式获取，原生中没有path
        ctx.request.req.url  //koa封装的对象request中又有一个原生的req对象，通过此对象获取
        ctx.request.url  //  通过koa封装的对象获取

        响应数据
        ctx.res.end("响应内容")     // 可以识别html标签，原生方式响应
        ctx.response.res.end("响应内容")    //不能识别html标签， koa封装的对象response中的又一个原生的对象res，通过这种方式响应
        ctx.response.body="响应内容"    //koa中封装的对象上有个body对象，通过body响应
        ctx.body="响应内容"     //更方便快捷的一种方式

    */