let express=require("express")
let bodyParser=require("body-parser")
let jwt=require("jsonwebtoken")

let app=express()

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*") ;  // 后台配置跨域，所有客户端都可以访问
    res.header("Access-Control-Allow-Methods","GET,PUT,OPTIONS,PATCH,DELETE,POST");
    res.header("Access-Control-Allow-Headers","Authorization,Origin,X-Requested-With,Content-Type,Accept")
    if(req.method.toLowerCase()=="options"){
        return res.end()   // 取消试探性请求
    }
    next();
})

// 配置bodyParser，接收客户端post提交时传过来的数据，以json形式接受
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({extended:false}))
// // parse application/json
app.use(bodyParser.json())
let secret="xwc"

// 用户接口
app.get("/user",(req,res)=>{
    // res.send({name:"wangcai"})
    setTimeout(()=>{
        res.json({name:"wangcai"})
    },500)
})

// 登录接口
app.post("/login",(req,res)=>{
    let {username} = req.body  // username随便起
    if(username==='admin'){
        res.json({
            code:0,
            username:"admin",
            // 生成一个token并返回    secret相当于一个加盐，加密
            token:jwt.sign({username:'admin'},secret,{
                expiresIn:60   // token过期时间
            })
        })
    }else{
        res.json({
            code:1,
            data:"用户名不存在"
        })
    }
})
// 验证token
app.get("/validate",(req,res)=>{
    let token = req.headers.authorization
    // console.log(token)
    // verify   verify
    jwt.verify(token,secret,(err,decode)=>{   //  验证token的密钥（盐）和生成的一样
        if(err){  // 验证功能失败，把'失败理由'返回，以便用户方便看
            return res.json({
                code:1,
                data:"token过期了"
            })
        }else{ 
            // console.log(decode) // 验证通过  如果token过期时间较短，用户一直在操作，不可能一会登录，一会登录，所以延长token有效时间
            res.json({
                code:0,
                username:decode.username,  // 解密
                // 延长token时间
                token:jwt.sign({username:'admin'},secret,{
                    expiresIn:60
                })
            })
        }
    })
})


app.listen(3030)