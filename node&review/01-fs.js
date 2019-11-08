// console.log(global) //Object [global] {}

const fs=require("fs")
fs.readFile("name.txt",(err,data)=>{
    if(err) console.log(err)
    // console.log(data)   //<Buffer 68 65 6c 6c 6f>
    console.log(data.toString())    //hello
})