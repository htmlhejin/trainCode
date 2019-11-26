// generator   三种写法
// 调用生成器生成迭代器

// function* read(){
//     yield 1
//     yield 2
// }
// //调用生成器产生一个迭代器
// let interator = read()
// // 每next一次，迭代出生成器产出的值，一一对应
// console.log(interator.next())  // { value: 1, done: false }
// console.log(interator.next())  // { value: 2, done: false }

// 生成器的三种写法
// function *generator(){}
// function * generator(){}
// function* generator(){}
// let obj={
//      read: ()=>{
        
//     },
//     read1:function*(){},
//     *read2(){}
// }



function* read(){
    let a = yield 1
    console.log(a)
    let b = yield 2
    console.log(b)
    let c = yield 3
    console.log(c)
}
let interator = read()
console.log(interator.next(11))  
console.log(interator.next(22)) 
console.log(interator.next(33)) 
console.log(interator.next(44)) 
// 第一个next中的参数毫无意义，第二个next中的参数传递到产出值赋予的第一个变量