// let fs = require("fs")
// function read(path){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(path,"utf-8",(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// read("name.txt")
// .then(data=>{
//     console.log(data)
//     return read(data)   // 返回一个失败态的promise,执行下一个.then的第二个函数
// },err=>{
// })
// .then(data=>{
//     console.log('data----',data)
// },err=>{
//     console.log('err-----',err)  //  err----- { [Error: ENOENT: no such file or directory,
// })

// ---------------------------------
let fs = require("fs")
function read(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,"utf-8",(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}
read("name1.txt")
.then(data=>{
    console.log(data)
    return read(data)
},err=>{
    return err
})
.then(data=>{
    console.log('data----',data)
},err=>{
    console.log('err-----',err)  //  data----- { [Error: ENOENT: no such file or directory,
})

// 上一个.then中的返回值，无论是在第一个函数中返回，还是在第二个函数中返回，返回值都将作为下一个.then成功的结果， 但是如果返回的是失败的promise，将作为下一个.then失败的结果，执行err函数     
// 如果没有返回值，undefined将作为下一个.then成功的结果    