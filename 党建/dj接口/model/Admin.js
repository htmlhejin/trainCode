const mongoose = require("mongoose")

// 定义的schema
const Schema = mongoose.Schema;
const UserSchema =  new Schema({
  adminName:{
      type:String,
      require:true 
  },
  adminPwd:{
    type:String,
    require:true 
  },
  createTime:{
    type:Date,
    default:Date.now 
 }
})

// 导出用户model
module.exports = Admin = mongoose.model("admins",UserSchema)
