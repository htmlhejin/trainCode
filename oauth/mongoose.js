const mongoose = require("mongoose")
const { Schema } = mongoose
mongoose.connect("mongodb://127.0.0.1:27017/weixin",{
    useNewUrlParser:true
},()=>{
    console.log("连接数据库成功了...")
})
let mySchema = new Schema({
    accessToken:String
})
exports.ServerToken = mongoose.model("ServerToken",mySchema)

let clientSchema = new Schema({
   access_token: String,
   expires_in: Number,
   refresh_token: String,
   openid: String,
   scope: String
})
// getToken方法
clientSchema.statics.getToken = async function(openid){
    return await this.findOne({
        openid:openid
    })
}
// setToken方法
clientSchema.statics.setToken = async function(openid,token){
    const qeury = {openid:openid}
    const options = {upsert:true}
    return await this.updateOne(qeury,token,options)
}
exports.ClientToken =  mongoose.model("ClientSchema",clientSchema)