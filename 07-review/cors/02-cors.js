const http=require("http")
const cors=require("cors")
let app=http.createServer(function(req,res){
    res.end(JSON.stringify({msg:'跨域解决方案'}))
})


app.use(cors())


app.listen(3000)