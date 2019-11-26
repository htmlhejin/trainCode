const fs=require("fs")
// const fs=require("fs").promises    // 这个promise是封装好的promise,可以直接读取文件，不需要手动封装read方法

// let promise = new Promise((resolve,reject)=>{
//     // 读取文件，错误优先
//     fs.readFile("name.txt","utf-8",function(err,data){
//         console.log(data)
//         fs.readFile(data,"utf-8",(err,data)=>{
//             console.log(data)
//         })
//     })
// })  

// promise实现读取文件
// 定义一个方法
function read(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,"utf8",function(err,data){
            if(err) reject(err)
            resolve(data)
        })
    })
}
// 可以.then,说明方法返回了一个promise
read("name.txt")
// read("name.txt000")
.then(data=>{
    console.log("1",data)
    return data;
},err=>{
    console.log(err)
})
// .then返回一个promise,这个promise自动执行，如果是成功态，成功的结果向下一个.then传递 
.then(data=>{
    console.log("data",data)
},err=>{
    console.log(err)
})

// .then返回 一个promise,这个promise会自动执行，无论是成功还是失败，结果都会传递到下一个.then中的第一个函数
// 如和执行下一个.then中失败的回调函数，两种方法：1、返回一个失败的promise  2、抛出一个错误
// { [Error: ENOENT: no such file or directory, open 'd:\huashantrain\1907--1912\11-review\01-promise\name.txt000']
// data undefined

