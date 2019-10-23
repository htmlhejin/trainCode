const http=require("http")
const querystring = require("querystring");   // 把字符串解析成对象
let uuid=require("uuid")
let session={}  //先把数据保存在session中，后面会把session存储到数据库中
let cardName="tian"   // 卡名
http.createServer((req,res)=>{
    // 设置cookie
    let arr=[]
    res.setCookie=function(key,value,options={}){
        let opts=[]
        if(options.domain){
            opts.push(`domain=${options.domain}`)
        }
        if(options.maxAge){
            opts.push(`max-age=${options.maxAge}`)
        }
        if(options.httpOnly){
            opts.push(`httpOnly=${options.httpOnly}`)
        }
        arr.push(`${key}=${value};${opts.join(';')}`)
        res.setHeader("Set-Cookie",arr)
    }

    req.getCookie=function(key){
        let obj=querystring.parse(req.headers.cookie,";")
        // console.log(obj)  //[Object: null prototype] { name: 'wangcai' }
        return obj[key]
    }

    if(req.url==="/eat"){
        // res.setHeader("Content-type","text/plain;charset=utf8")
        let id=req.getCookie(cardName)
        if(id){  // 有卡
            session[id].mny -= 100
            res.end("current money is $" + session[id].mny)
        }else{   // 第一次吃饭没有卡号
            let cartId = uuid.v4()  // 生成卡号  
            // console.log(cartId)  // c3f430f1-740e-4d51-bf7f-6395ebbfa9ff
            session[cartId]={mny:500}   // 生成的卡号保存在session中
            res.setCookie(cardName,cartId)
            res.end("current money is $" + session[cartId].mny)
        }
    }


}).listen(3000)