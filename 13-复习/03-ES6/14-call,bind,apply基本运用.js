// -------------------------- call改变this指向且自动执行被借用函数(call前面的函数)
// function f(){
//     this.name="hello"
//     console.log("f....")
// }
// let obj={}
// f.call(obj)  // obj借用了f，所以f中的this就指向ojb
// console.log(obj.name)  // hello
// 先打印出f...,再打印hello

// ---------------------------------- call 传参
// function f(a,b){
//     return a+b
// }
// let obj={}
// console.log(f.call(obj,1,2))  // 3


// ---------------------------------apply 的传参  []
// function f(a,b){
//     return a+b
// }
// let obj={}
// console.log(f.apply(obj,[1,2]))  // 3

// ---------------------------------bind
// function f(a,b){
//     return a+b
// }
// let obj={}
// let bindF = f.bind(obj,1,2)  // obj借用f函数，返回一个绑定后的函数，但是不会自动执行,需要手动执行
// console.log(bindF())   // 3


// -----------------------------------call
// 基本数据类型借用了f，this就指向创建这个基本数据类型的构造器
function f(){
    console.log(this)   // [String: 'hello'], typeof this是object
}
// f.call(123)  // [Number: 123]
f.call("hello") 