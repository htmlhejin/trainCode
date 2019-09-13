// ---------------
// let fs = require("fs")
// let path = require("path")
// // vscode中的一个小bug,读取时使用绝对路径
// let filename = path.join(__dirname, "name.txt")
// fs.readFile(filename, "utf8", (err, data) => {
//     if (err) console.log(err)
//     console.log(data)   //age.txt
//     fs.readFile((path.join(__dirname,data)), "utf8", (err, data) => {
//         if (err) console.log(err)
//         console.log(data)   //666
//     })
// })

// -------------------------------
// let fs=require("fs")
// let path=require("path")
// // // 封装一个函数，读取里面的内容
// // // ...args相当于...rest
// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(...args,function(err,data){
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// readFile((path.join(__dirname,"./name.txt")),"utf8").then(data=>{
//     console.log(data)   //age.txt
//     
// },err=>{
//     console.log(err)
// })

// -------------------------------
// let fs=require("fs")
// // // 封装一个函数，读取里面的内容
// // // ...args相当于...rest
// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(...args,function(err,data){
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// readFile("./name1.txt","utf8").then(data=>{
//     console.log(data)   
// },err=>{    
//     // name1.txt不存在，执行then中的第二个函数
//     console.log(err)    //no such file or directory
// })

// -------------------------------
// let fs=require("fs")
// // // 封装一个函数，读取里面的内容
// // // ...args相当于...rest
// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(...args,function(err,data){
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// readFile("./name.txt","utf8").then(data=>{
//     // console.log(data)   //age.txt
//     readFile(data,"utf8").then(data=>{
//         console.log(data)   //666
//     },err=>{
//         console.log(err) 
//     })
// },err=>{    
//     console.log(err)   
// })

// -------------------------------
// 在promise中可以链式调用，.then之后还可以.then
// let fs=require("fs")
// // // ...args相当于...rest
// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(...args,function(err,data){
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// readFile("./name.txt","utf8").then(data=>{
//     return false
//     // return "haha"    //返回值返回到下一个.then中
// },err=>{    
//     console.log(err)   
// }).then(data=>{     //data是第一个.then中的第一个函数的返回值
//     console.log(data)   //false  //haha
// },err=>{
//     console.log(err)
// })

// -------------------------------
// let fs=require("fs")
// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(...args,function(err,data){
//             if(err) reject(err)
//             resolve(data)
//         })
//     })  
// }
// readFile("./name.txt","utf8").then(data=>{
//     // console.log(data)   //age.txt
//     return data
// },err=>{
// }).then(data=>{
//     // console.log(data)   //age.txt
//     // return data //return data 之后的语句不执行
//     throw new Error("错误")
// },err=>{

// }).then(data=>{
//     console.log(data)   //age.txt
// },err=>{
//     console.log(err)    // 错误
// })

// -------------------------------
// let fs=require("fs")
// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(...args,function(err,data){
//             if(err) reject(err)
//             resolve(data)
//         })
//     })  
// }
// readFile("./name1.txt","utf8").then(data=>{
//     return data
// },err=>{
//     // throw new Error(err)
//     return err      //返回到下一个.then中的第二个函数
// }).then(data=>{
//     console.log(data)   
// },err=>{
//     console.log(err)    //baocuo    no such file or directory,
// })

// -------------------------------
// let fs=require("fs")
// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(...args,function(err,data){
//             if(err) reject(err)
//             resolve(data)
//         })
//     })  
// }
// readFile("./name.txt","utf8").then(data=>{
//     return data
// },err=>{
//     return err     
// }).then(data=>{
//     // console.log(data) 
//     // 如果return 了一个Promise,下一个.then执行这个promise,并采用里面的状态
//     return new Promise((resolve,reject)=>{
//         reject("不ok")
//     })
//     return data  
// },err=>{
//     console.log(err)    
// }).then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)    //不ok
// })

// -------------------------------
let fs=require("fs")
function readFile(...args){
    return new Promise((resolve,reject)=>{
        fs.readFile(...args,function(err,data){
            if(err) reject(err)
            resolve(data)
        })
    })  
}
readFile("./name.txt","utf8").then(data=>{
    return data
},err=>{
    return err     
}).then(data=>{
    // console.log(data) 
    return data  //与return 顺序有关
    // 如果return 了一个Promise,下一个.then执行这个promise,并采用里面的状态
    return new Promise((resolve,reject)=>{
        resolve("ok")
    })
},err=>{
    console.log(err)    
}).then(data=>{
    console.log(data)   //age.txt
},err=>{
    console.log(err)    
})

// -------------------------------
// let fs=require("fs")
// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(...args,'utf8',function(err,data){
//             if(err) reject(err)
//             resolve(data)
//         })
//     })  
// }
// readFile("./name.txt","utf8").then(data=>{
//     return data
// },err=>{
//     return err     
// }).then(data=>{
//     // console.log(data) 
//     // 如果return 了一个Promise,下一个.then执行这个promise,并采用里面的状态
//     return new Promise((resolve,reject)=>{
//         reject("不ok")  //返回到下一个.then种的第二个函数中
//     })
//     return data  
// },err=>{
//     console.log(err)    
// }).then(data=>{
//     console.log("---",data)   
// },err=>{
//     console.log("---_+",err)    //---_+ 不ok
// })

// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------

