const mongoose = require("mongoose")
let {Schema} = mongoose
// 连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/weixin",{
    useNewUrlParser:true
},()=>{
    console.log("数据库连接成功...")
})
// 定义schema
let mySchema = new Schema({
    accessToken:String
})
// 创建集合,并导出去
exports.ServerToken = mongoose.model("ServerToken",mySchema)
