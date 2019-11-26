// path:内置模块，又叫系统模块，又叫核心模块
// 引入内置模块直接require  require('http')
// 引入第三方模块直接require  require('http')
// 引入自定义模块需要加目录  require('./my')
// path.basename
let path=require('path')
// let r=path.basename("1.js")
// console.log(r)  //1.js

// let path=require('path')
// let r=path.basename("abc/1.js")
// console.log(r)  //1.js

// let path=require('path')
// let r=path.basename("1.js","js")
// console.log(r)  //1.

// let path=require('path')
// let r=path.basename("1.js",".js")
// console.log(r)  //1

// path.extname--文件扩展名
// let r=path.extname("1.js")
// console.log(r)  //.js

// let r=path.extname("1.html")
// console.log(r)  //.html

// path.dirname---文件的路径名
// let r=path.dirname("a/b/c")
// console.log(r)  //a/b


// path.join把两个文件路径拼成一个路径
// let r=path.join(__dirname,"a/b/c")
// console.log(r)  //d:\huashantrain\1907--1912\0816\a\b\c

// path.resolve把两个文件路径拼成一个路径
let r=path.resolve("a/b/c")
console.log(r)  //d:\huashantrain\1907--1912\0816\a\b\c