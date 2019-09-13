
// 在promise类上面有几个静态方法，resolve(), reject(), finally()

// -----------------------
// console.log(Promise.resolve("买包"))    //Promise { '买包' },返回的是一个promise

// ----------------------------------
// Promise.resolve("买包").then(data=>{
//     console.log(data)   //买包
// })
// 上下两种写法一样
// let p=new Promise((resolve,reject)=>{
//     resolve("买包")
// })
// p.then(data=>{
//     console.log(data)
// })

// ----------------------------
// Promise.reject("没钱买包").catch(err=>{
//     console.log(err)   //没钱买包
// })

// 无论是成功态还是失败态都会调用finally
// -----------------------
// Promise.resolve("买包").then(data=>{
//     console.log(data)       //买包
// }).finally(()=>{
//     console.log("开心")   //开心
// })

// ------------------------
// Promise.reject("没钱买包").catch(err=>{
//     console.log(err)       //没钱买包
// }).finally(()=>{
//     console.log("不开心")   //不开心
// })

// ---------------------
// let fs=require("fs").promises;
// // .all----都成功了才能得到终值
// Promise.all([fs.readFile("./name.txt","utf8"),fs.readFile("./age.txt","utf8")]).then(data=>{
//     console.log(data)   //[ 'age.txt', '666' ]
// })

// ---------------------------
let fs=require("fs").promises
Promise.race([fs.readFile("./age.txt","utf8"),fs.readFile("./name1.txt","utf8")]).then(data=>{
    console.log(data)   //age.txt
})