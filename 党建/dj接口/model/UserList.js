const mongoose = require("mongoose")

// 定义的schema
const Schema = mongoose.Schema;
const UserlistSchema =  new Schema({
  username:{
      type:String
  },
  idnumber:{
      type:Number
  },
  tpnumber:{
    type:Number
  },
  score:{
    type:Number
  },
  status:{
    type:Number
  },
  password:{
    type:Number
  },
  last_time:{
    type:Date,
    default:Date.now
  },
})

module.exports = UserList = mongoose.model("userlists",UserlistSchema)
