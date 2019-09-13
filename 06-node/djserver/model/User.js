const mongoose=require("mongoose")
const Schema = mongoose.Schema;

// mongoose.Schema({})  //写字段

// 这种写法也可以写字段
const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    data:{
        type:Date,
        default:Date.now
    }
})
module.exports = User= mongoose.model("users",UserSchema)