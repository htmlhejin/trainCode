let fs=require("fs")

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


// -------------------------
// read("./04-promise基本链式调用/name.txt")
// .then(data=>{
//     console.log(data)
// },null)
// .then(data=>{
//     // 如果没有返回值，undefined将作为下一个.then的成功的结果
//     console.log(data)   // undefined
// },err=>{
// })

// -------------------------
// 如果没有返回值，undefined将作为下一个.then成功的结果
// read("./name.txt")
// .then(data=>{
//     return read(data)   // 手动返回一个promise
// },null)
// .then(data=>{
//     console.log(data) // 666
// }).then(data=>{
//     console.log(data)   // undefined
// })

// ----------------------------
// read("./name.txt111")
// .then(data=>{
// },err=>{
//     return err
// })
// .then(data=>{
//     console.log("1",data) // 1 { [Error: ENOENT: no such file or directory, open 'd...
// })
// .then(data=>{
//     console.log(data)   // undefined
// })
// 上一个.then中返回的值，无论是在第一个函数中返回，还是在第二个函数中返回，返回值都将作为下一个.then成功的结果，如果没有返回值，undefined将作为下一个.then的成功的结果 

// ---------------------------------
// read("./name.txt")
// .then(data=>{
//     console.log(data)   // age.txt
// },err=>{
//     console.log(err) 
// })
// .then(data=>{
//     console.log("1",data) // 1  undefined
// })
// .then(data=>{
//     console.log(data)   // undefined
// })
// 无论上一个.then有没有返回值，后面的每一个.then都会执行，如何中断.then的执行?
// 返回一个等待态的promise
// read("./name.txt")
// .then(data=>{
//     console.log(data)   // age.txt
// },err=>{
//     console.log(err) 
// })
// .then(data=>{
//     console.log("1",data) // 1  undefined
// })
// .then(data=>{
//     return new Promise(()=>{})
// })
// .then(data=>{
//     console.log("2",data)   // undefined
// },err=>{
//     console.log("3--->",err)
// })

// ----------------------------------
// 如何执行下一个.then中失败的回调函数？
// 1、返回一个失败的promise
// 2、抛出一个错误
// read("./name.txt")
// .then(data=>{
//     console.log(data)   // age.txt
//     return read(data+"111")  // 返回一个失败的promise
// },err=>{
//     console.log(err) 
// })
// .then(data=>{
//     console.log("1",data) 
// },err=>{
//     console.log("1--->",err)   // 1---> { [Error: E....
// })
// .then(data=>{
//     console.log("2",data)   // 2 undefined
// },err=>{
//     console.log("2--->",err)
// })

// read("./name.txt")
// .then(data=>{
//     console.log(data)   // age.txt
//     throw new Error("读取失败....")  // 抛出一个错误
// },err=>{
//     console.log(err) 
// })
// .then(data=>{
//     console.log("1",data) 
// },err=>{
//     console.log("1--->",err)   // 1---> Error: 读取失败....
// })
// .then(data=>{
//     console.log("2",data)   // 2 undefined
// },err=>{
//     console.log("2--->",err)
// })

// ---------------------------------
// promise才能.then,如果没有返回一个promise,而是返回一个普通值，内部会自动包装成promise
read("./name.txt")
.then(data=>{
    // return 123   // 相当于return Promise.resolve(123)
    return "hello"
})
.then(data=>{
    // console.log(data)  // 123
    console.log(data)  // hello
},null)


