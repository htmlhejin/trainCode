let http=require("http")
let url=require("url")
let querystring=require("querystring")
let server=http.createServer(function(req,res){
    // let urlObj=url.parse(req.url)
    // console.log(urlObj)  //

    let {pathname,query}=url.parse(req.url)
    console.log(querystring.parse(query))   //{ name: '"hello"' }
    console.log(querystring.parse(query).name )   //"hello"
})
let port=5000
server.listen(port,()=>{
    console.log(`服务器运行在${port}端口`)
})

// Url {
//     protocol: null,
//     slashes: null,
//     auth: null,
//     host: null,
//     port: null,
//     hostname: null,
//     hash: null,
//     search: '?name=%22hello%22',
//     query: 'name=%22hello%22',
//     pathname: '/shop',
//     path: '/shop?name=%22hello%22',
//     href: '/shop?name=%22hello%22' }