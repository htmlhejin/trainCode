let mongoose=require("./db")
let userSchema = mongoose.Schema({
    name:String,
    age:Number
})

module.exports = mongoose.model("User",userSchema)