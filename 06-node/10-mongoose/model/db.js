// 公共的代码

// 引入mongoose
let mongoose=require("mongoose")

// 连接数据库 mongodb是协议   127.0.0.1是localhost的地址，27017是端口，myapp是数据库的名字
mongoose.connect("mongodb://127.0.0.1:27017/myapp3",{useNewUrlParser:true},err=>{
    if(err) return ;                        //{userNewUrlParser:true}运行时不会报错
    console.log("数据库连接成功")
})

module.exports=mongoose