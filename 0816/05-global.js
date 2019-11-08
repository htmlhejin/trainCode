// global相当于ES5中的window
// 引入fs模块
let fs=require('fs')
// 第一个参数：要读取的文件，第二个参数：可选参数，第三个参数：回调函数
// function(err,data)一般err在前

// 异步读取
// fs.readFile("./fs.js",{encoding:"utf8"},function(err,data){
//     if(err) console.log(err)
//     console.log(data)     //console.log("js文件")，得到fs.js中的内容
// })

// 没有指定参数，最终得到Buffer
// fs.readFile("./fs.js",function(err,data){
//     if(err) console.log(err)
//     console.log(data)   //<Buffer 63 6f 6e 73 6f 6c 65 2e 6c 6f 67 28 22 6a 73 e6 96 87 e4 bb b6 22 29>
// })


// 文件不存在
// fs.readFile("./hello.js",{encoding:"utf8"},function(err,data){
//     if(err) console.log(err)    //打印出错误信息
//     console.log(data)
// })

// 同步读取
// let tongbu=fs.readFileSync("./fs.js")  //没有指定可选参数，默认输出Buffer
// console.log(yibu)   //<Buffer 63 6f 6e 73 6f 6c 65 2e 6c 6f 67 28 22 6a 73 e6 96 87 e4 bb b6 22 29>

// let tongbu=fs.readFileSync("./fs.js",{encoding:"utf8"})  //指定可选参数
// console.log(tongbu)  //console.log("js文件")

    console.log('同步读取开始')
    fs.readFile("fs.js",function(err,data){ //异步读取
        if(err) console.log(err)
        console.log(data)
    })
    console.log('同步读取结束')
    // 同步读取开始
    // 同步读取结束
    // <Buffer 63 6f 6e 73 6f 6c 65 2e 6c 6f 67 28 22 6a 73 e6 96 87 e4 bb b6 22 29>
    
// 打印出文件的绝对路径
// console.log(__dirname)  //d:\huashantrain\1907--1912\0816

// 打印出文件名
// console.log(__filename) //d:\huashantrain\1907--1912\0816\05-global.js