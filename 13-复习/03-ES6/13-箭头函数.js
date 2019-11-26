// 对于箭头函数，考察的基本都是this
// let a = 110;
// let obj = {
//     a : 666,
//     f(){
//         setTimeout(function(){
//             // this 表示window
//             // 谁调用了使用this的函数setTimeout，this就指向谁
//                  window调用了setTimeout
//             console.log(this.a)  // undefined
//         },1000)
//     }
// }
// obj.f(); 

// ---------------------------------
// let a = 110;
// let obj = {
//     a : 666,
//     f(){
//     a=222
//         setTimeout(()=>{
//         //  箭头函数中没有this，跳出该作用域向外层找，找到obj
//             console.log(this.a)  /// 666
//         },1000)
//     }
// }
// obj.f(); 

// -----------------------------------
// var a = 110;
// let obj = {
//     a : 666,
//     f(){
//         setTimeout(function(){
//             console.log(this.a)  /// undefined   浏览器中测试是110，因为node没有window
//         },1000)
//     }
// }
// obj.f();

// ------------------------------- 


// 箭头函数没this，没有arguments,没有prototype
// 如果使用箭头函数中的this，就跳出该作用域向外面一层找，
// let声明的变量不会挂在window上，var声明的变量会挂在window上，node没有window，node的全局是global