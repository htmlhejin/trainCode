// 生成器
// function * read(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// }
// // 调用生成器生成迭代器，迭代器是一个对象 ，里面有一个next函数，函数返回一个对象，对象中有一个value,done
// let it=read()
// // 通过next取值，next一下，取出一个值
// console.log(it.next())  //{ value: 1, done: false } 
// console.log(it.next())  //{ value: 2, done: false } 
// console.log(it.next())  //{ value: 3, done: false } 
// console.log(it.next())  //{ value: 4, done: false } 
// console.log(it.next())  //{ value: undefined, done: true }


// -------------------
// function* read() {
//     let a = yield 1;    //产出1
//     console.log(a)  //7

//     let b = yield 2;
//     console.log(b)  //9

//     let c = yield 3;
//     console.log(c)  //8

// }
// let it = read()
// // 调用next传递的值传到产出值的上一个变量,第一个next中的参数没有任何意义
// console.log(it.next())      //{ value: 1, done: false } 
// console.log(it.next(7))     //{ value: 2, done: false } 
// console.log(it.next(9))     //{ value: 3, done: false }
// console.log(it.next(8))     //{ value: undefined, done: true }

// ----------------
// const fs=require("fs").promises
// function * read(){
//     yield fs.readFile("./name.txt","utf8")
// }
// let it=read()
// // console.log(it.next())  //{ value: Promise { <pending> }, done: false }

// it.next().value.then(data=>{
//     console.log(data)   //age.txt
// })


// -------------------
// const fs=require("fs").promises
// function * read(){
//     let content=yield fs.readFile("./name.txt","utf8")
//     yield fs.readFile(content,"utf8")
// }
// let it=read()
// // console.log(it.next())  //{ value: Promise { <pending> }, done: false }

// it.next().value.then(data=>{
//     // console.log(data)   //age.txt
//     it.next(data).value.then(data=>{
//         console.log(data)   //666
//     })
// })

// ----------------------------
// const fs=require("fs").promises
// function * read(){
//     let content=yield fs.readFile("./name.txt","utf8")
//     let age=yield fs.readFile(content,"utf8")
//     return age
// }
// let it=read()
// // console.log(it.next())  //{ value: Promise { <pending> }, done: false }

// it.next().value.then(data=>{
//     it.next(data).value.then(data=>{
//         let r=it.next(data)  //调用next返回一个对象
//         console.log(r)  //{ value: '666', done: true }
//     })
// })

// ----------------------
const fs=require("fs").promises
function * read(){
    let content=yield fs.readFile("./name.txt","utf8")
    let age=yield fs.readFile(content,"utf8")
    return age
}
let co=require("co")
// console.log(co(read())) //Promise { <pending> }
co(read()).then(data=>{
    console.log(data)   //666
})