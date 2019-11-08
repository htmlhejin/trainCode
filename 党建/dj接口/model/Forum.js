const mongoose = require("mongoose")

// 定义的schema
const Schema = mongoose.Schema;
const forumSchema =  new Schema({
  userName:{
    type:String,
    require:true 
  },
  userId:{
    type:String,
    require:true 
  },
  type:{
    type:String,
    require:true 
  },
  pic:{
    type:String,
    require:true 
  },
  replay:{
    type:Array,
    default:null,
  },
  check:{
    type:Boolean,
    default:false
  },
  createTime:{
     type:Date,
     default:Date.now 
  }
})

// 导出用户model
module.exports = forum = mongoose.model("Forum",forumSchema)
