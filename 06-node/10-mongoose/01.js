// 引入mongoose
const mongoose=require("mongoose")

// 连接数据库 mongodb是协议   127.0.0.1是localhost的地址，27017是端口，myapp是数据库的名字
mongoose.connect("mongodb://127.0.0.1:27017/myapp")

// 定义一个Schema，Schema中的数据和数据库中的字段保持一致，如果后面没有传值，也可以设置默认值
let userSchema=mongoose.Schema({
    name:String,
    age:Number
})

// 创建一个model，model的第一个参数，首字母大写
let userModel = mongoose.model("User",userSchema,"users")
// User是model的名字，userSchema是数据库中的字段，users是数据库中集合的名字，如果没有这第三个参数，集合名默认为第一个参数,大写变小写，单数变复数

// 实例化model,实例化时可以向数据库中传值
let newModel=new userModel({
    name:"wangcai",
    age:19
})

// 保存数据，调用save时才能向数据库中保存东西  每save一次，就往数据库中保存一条数据
newModel.save((err,data)=>{
    if(err) return ;
    console.log("保存数据成功...")
})
