// const fs=require("fs").promises
// async function  read(){
//     let content = await fs.readFile("name.txt","utf8")
//     let age=await fs.readFile(content,"utf8")
//     return age
// }
// console.log(read()) //Promise { <pending> }
// read().then(data=>{
//     console.log(data)   //666
// })

// await+async是生成器 迭代器的语法糖