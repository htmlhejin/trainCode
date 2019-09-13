// 引入mongoose
const mongoose=require("mongoose")

// 连接数据库 mongodb是协议   127.0.0.1是localhost的地址，27017是端口，myapp是数据库的名字
mongoose.connect("mongodb://127.0.0.1:27017/myapp2",{useNewUrlParser:true},err=>{
    if(err) return 
    console.log("连接数据库成功")
})

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

// 保存数据，调用save时才能向数据库中保存数据  每save一次，就往数据库中保存一条数据
newModel.save((err,data)=>{
    if(err) return ;
    console.log("保存数据成功...")
})
// 保存数据之后，数据库才创建成功

// 查询，根据model查询数据
// userModel.findOne ({},function(err,data){   //第一个是查询条件，第二个是回调函数
//     if(err) console.log(err)
//     // console.log(data)
//     console.log("查询数据成功...")
// })

// // 更新
// userModel.updateOne({'_id':"5d6ccb6c5328030dacd7730a"},{'name':"hello",age:20},function(err,data){   //第一个是查询条件，第二个是回调函数
//     if(err) console.log(err)
//     // console.log(data)
//     console.log("更新数据成功...")
// })

// 添加
// userModel.add({'name':"xiaoqiang",age:20},function(err,data){   //第一个是查询条件，第二个是回调函数
//     if(err) console.log(err)
//     console.log(data)
// })

// 删除
// userModel.deleteOne({'_id':"5d6ccc665fd6ff2934e5538d"},{'name':"hello",age:20},function(err,data){   //第一个是查询条件，第二个是回调函数
//     if(err) console.log(err)
//     // console.log(data)
//     console.log("删除数据成功...")
// })
