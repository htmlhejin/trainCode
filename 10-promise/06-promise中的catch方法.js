// let p = new Promise((resolve, reject) => {
//     reject("不ok")
// })
// // .catch是.then的语法糖
// // 如果.then中有第二个函数，且.then后面有catch，如果转到失败态，则执行第二个函数
// p.then(data=>{},err=>{
//     console.log("1",err)    
// }).catch(err=>{
//     console.log("2",err)
// })
// 结果是 1 不ok

// -------------------
// let p = new Promise((resolve, reject) => {
//     reject("不ok")
// })
// // 如果.then中没有第二个函数，且.then后面有catch，如果转到失败态，则执行.catch
// p.then(data=>{

// }).catch(err=>{
//     console.log("2",err)    //2 不ok
// })

// -------------------------
// let p = new Promise((resolve, reject) => {
//     reject("不ok")
// })
// p.then(data=>{

// },err=>{    //.then的第二个函数中的return err，是return到了下一个.then的第一个函数中
//     return err
// }).then(data=>{
//     console.log("---",data)   //--- 不ok
// },err=>{
//     console.log("+++",err)
// })

// -----------------------------
// 一般情况下，then中只有一个函数，.yhen用来获取data ,.catch用来获取err
let p = new Promise((resolve, reject) => {
    reject("不ok")
})
p.then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)    //不ok
})