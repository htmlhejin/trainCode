let express=require("express")
const app=express()
// 创建一个Router实例对象
const router=express.Router()
// router.get   router级别的路由，针对Router实例对象，在浏览器端访问的话,路径匹配不到
router.get("/my",function(res,req){
    res.send("my")  //在浏览器端输入localhost:5000/my,  Cannot GET /my
})
// get请求      和下面的post请求不冲突，只不过是路径和资源一样
app.get("/my",function(req,res){
    res.end("my") //send
})
// post请求
app.post("/my",function(req,res){
    res.send("myjhg")   //postman中响应myjhg
    console.log("dddd") //黑窗口中打印dddd
})

app.listen(5000)

// callback是路由匹配成功后要执行的函数，这个函数中有两个重要的参数，req,res,req是incommingMessage,res是serverResponse
// path(如"/my")是服务器上的路径，是url中的路径部分，