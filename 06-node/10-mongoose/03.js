let newsModel=require("./model/news")
let userModel=require("./model/user")


let p= new newsModel({
    title:"新闻title",
    content:"新闻content"
})
let q = new userModel({
    name:"wangcai",
    age:10
})

p.save(function(err,data){
    if(err) return 
    console.log(data)
})

q.save(function(err,data){
    if(err) return 
    console.log(data)
})

