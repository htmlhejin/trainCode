const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/djcms",{useNewUrlParser:true}).then(()=>{
    console.log("数据库连接成功")
}).catch(err=>{
    console.log(err)
})
// 连接数据库一般需要一个配置文件，所以新建一个config文件夹

module.exports=mongoose