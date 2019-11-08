const mongoose = require("mongoose")

// 定义的schema
const Schema = mongoose.Schema;
const FocuslistSchema =  new Schema({
  url:{
      type:String
  },
  pic:{
      type:String
  },
  sort:{
    type:Number
  },
  status:{
    type:Number
  },
  title:{
    type:String
  },
})

module.exports = FocusList = mongoose.model("focuslists",FocuslistSchema)