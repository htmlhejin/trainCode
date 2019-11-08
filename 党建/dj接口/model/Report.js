const mongoose = require("mongoose")

// 定义的schema
const Schema = mongoose.Schema;
const reportSchema =  new Schema({
  userName:{
    type:String,
    require:true 
  },
  status:{
    type:Boolean,
    required:true
  },
  reason:{
    type:String,
    required:true
  },
  createTime:{
     type:Date,
     default:Date.now 
  }
})

// 导出用户model
module.exports = Report = mongoose.model("Report",reportSchema)
