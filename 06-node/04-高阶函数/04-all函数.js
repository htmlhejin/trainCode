// const fs=require("fs")
// let content={}
// fs.readFile("name.txt","utf8",(err,data)=>{
//     content['name']=data
// })
// fs.readFile("age.txt","utf8",(err,data)=>{
//     content['age']=data
// })
// console.log(content)    //{},因为读取文件是异步操作


// const fs = require("fs")
// let content = {}
// fs.readFile("name.txt", "utf8", (err, data) => {
//     content['name']= data   //等同于这种写法：content.name= data
//     fs.readFile("age.txt", "utf8", (err, data) => {
//         content['age'] = data   ////等同于这种写法：content.name= data
//         console.log(content)    //{ name: 'wangcai', age: '100' }
//     })
// })



// const fs = require("fs")
// let content = {}
// let index=0;
// fs.readFile("name.txt","utf8",(err, data) =>{
//     content['name']=data
//     index++
//     out()    //因为两个fs.readFile是异步，不确定哪个先执行，所以两个都要调用
// })
// fs.readFile("age.txt","utf8",(err, data) =>{
//     content['age']=data
//     index++
//     out()
// })
// function out(){
//     // 文件全部读取完毕
//     if(index==2){
//         console.log(content)
//     }
// }
// { age: '100', name: 'wangcai' }



const fs = require("fs")
let content = {}
const after = (times, fn) => {
    return () => {
        if (--times == 0) {
            fn()
        }
    }
}
let newAfter = after(2, () => {
    console.log(content)
})
fs.readFile("name.txt", "utf8", (err, data) => {
    content['name'] = data
    newAfter()
})
fs.readFile("age.txt", "utf8", (err, data) => {
    content['age'] = data
    newAfter()
})
// { age: '100', name: 'wangcai' }