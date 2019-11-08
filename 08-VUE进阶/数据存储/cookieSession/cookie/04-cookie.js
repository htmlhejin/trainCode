const http=require("http")
const queryString = require("querystring")
    // 数据加密   加密之后相对更安全，即使在cookie中双击改变value，再次访问时仍然是从第一次开始
const sign=(value)=>{
    // console.log(require("crypto").createHmac("sha256","abc").update(value).digest("base64"))
    // WRPJ3t0Ao8PF5QZfqcSCFtSjxbBorllrFxmF1mIzEgk=
    return require("crypto").createHmac("sha256","abc").update(value).digest("base64").replace(/\+/g,"")  // replace(/\+/g,"")表示转义，把+转成""
}
http.createServer((req,res)=>{
    let arr=[];
    // 设置cookie
    res.setCookie=function(key,value,options={}){
        // res.setHeader("Set-Cookie","name=wangcai;path='/write';") 
        let opts=[];
        if(options.domain){
            opts.push(`domain=${options.domain}`)
        }
        if(options.path){
            opts.push(`path=${options.path}`)
        }
        if(options.maxAge){
            opts.push(`max-age=${options.maxAge}`)
        }
        if(options.httpOnly){
            opts.push(`httpOnly=${options.httpOnly}`)
        }
        if(options.signed){
            // 数据加密
            value=value+'.'+sign(value)
        }
        arr.push(`${key}=${value};${opts.join(";")}`)
        // res.setHeader("Set-Cookie","name=wangcai;max-age=10;")
        res.setHeader("Set-Cookie",arr)
    }

    // 获取cookie,浏览器再次请求带着cookie,服务器根据请求的数据得获取cookie
    req.getCookie=function(key,options={}){
        let obj=queryString.parse(req.headers.cookie,";");
        if(options.signed){
            // console.log(obj[key])  // 1.gpHnS6ogoGBB9agylSs5UOjYhAPjm/XLzWLdKp3YTU=
            if(obj[key]){
                // console.log(obj[key].split("."))  // [ '1', 'gpHnS6ogoGBB9agylSs5UOjYhAPjm/XLzWLdKp3YTU=' ]
                let [value,s]=obj[key].split(".")   // 解构赋值
                if(sign(value)==s){
                    return value
                }else{
                    return undefined;
                }
            }
        }
        return obj[key];
    }

    // 写一个案例，显示第几次访问服务器
    if(req.url==="/visit"){
        res.setHeader("Content-type","text/plain;charset=utf8");  // 纯文本格式显示，避免乱码
        let visit = req.getCookie("visit",{signed:true})   
        // cookie中添加一个cookie字段，显示访问次数
        if(visit){  
            // 再次访问时visit+1,显示第几次访问
            // console.log(visit-0+1)  // 2
            // console.log(typeof visit-0+1)   // NaN
            // console.log(typeof (visit-0+1))   // number
            visit=visit-0+1;   // 次数加1      
            res.setCookie("visit",visit+"",{signed:true})   // cookie中的值也要变   visit+""表示变成字符串,cookie中的字段的值都是字符串，不变也ok

        }else{   // 第一次访问时没有visit字段,设置cookie
            visit = 1
            res.setCookie("visit","1",{signed:true})
        }
        res.end(`这是第${visit}次访问`)
    }
    if(req.url==="/write"){
        res.end("write ok ")
        return 
    }
    if(req.url==="/read"){
        // req.getCookie("name",{signed:true})   // ...
        // 再次请求时，服务器就可以从请求头中得到cookie，把cookie响应回去
        // res.end(req.headers.cookie || "empty" )

    }
}).listen(3030)