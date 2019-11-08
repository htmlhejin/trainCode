const mongoose = require("mongoose")

// 定义的schema
const Schema = mongoose.Schema;
const CommentslistSchema =  new Schema({
  title:{
      type:String
  },
  status:{
      type:Number
  },
  description:{
    type:String
  },
  add_time:{
    type:Date,
    default:Date.now
  },
})

module.exports = CommentsList = mongoose.model("commentslists",CommentslistSchema)