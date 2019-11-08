const querystring = require("querystring")
const http = require("http")
const url = require("url")
let server = http.createServer((req, res) => {
    // 把url解析成一个对象，可以得到pathname,query
    let { pathname } = url.parse(req.url)
    // console.log(pathname)
    if (pathname == "/abc") {
        let arr = [];
        req.on("data", (chunk) => {
            arr.push(chunk)
        })
        req.on("end", () => {
            // console.log(arr)    //[ <Buffer 61 3d 31 26 62 3d 32> ]
            // console.log(Buffer.concat(arr)) //<Buffer 61 3d 31 26 62 3d 32>
            // console.log(arr.toString()) //a=1&b=2
            let str = arr.toString()
            res.write(str)
            res.end()
        })
    }
})
server.listen(3000, () => {
    console.log("...")
})