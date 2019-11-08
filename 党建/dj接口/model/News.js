const mongoose = require("mongoose")

// 定义的schema
const Schema = mongoose.Schema;
const NewslistSchema =  new Schema({
  id:{
      type:Number
  },
  title:{
      type:String
  },
  author:{
    type:String
  },
  description:{
    type:String
  },
  type:{
    type:String
  },
  pic:{
    type:String
  },
  add_time:{
    type:Date,
    default:Date.now
  },
})

module.exports = NewsList = mongoose.model("newslists",NewslistSchema)
