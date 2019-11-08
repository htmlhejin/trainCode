const http=require("http")
let server=http.createServer((req,res)=>{
    res.write("hello")
    res.end()
})

server.listen(3000)