// for of用来循环，前提是循环的对象是可迭代对象
// 如果一个对象有一个iterator,那么这个对象是iterable对象,那么可以被迭代
// 在js中，数组，set,map都是iterable对象，可以使用for of进行迭代

// let colors=["red","green","blue"]
// for(value of colors){
//     console.log(value)  // red  green  blue
// }


// --------------------------
// let obj={
//     0:"a",
//     1:"b",
//     length:2   // 伪数组一般都有一个length属性
// }
// let realArr=[...obj]
// console.log(realArr)  // TypeError: obj is not iterable

// --------------------------
// 让obj变成可迭代的数组
let obj={
    0:"a",
    1:"b",
    [Symbol.iterator](){  // 让obj变成可迭代的数组,这样就可以迭代出每一项
        let index=0;
        return {
            next:()=>{
                return {
                    value:this[index],
                    done:this.length===index++
                }
            }
        }
    },
    length:2   // 伪数组一般都有一个length属性
}
// console.log(obj)  // { '0': 'a', '1': 'b', length: 2 }
// console.log(...obj)   // TypeError: Found non-callable @@iterator
let realArr=[...obj]
console.log(realArr)   // [ 'a', 'b' ]



// -------------------------------把伪数组变成真实的数组
// 一、Array.from()
// let obj={
//     0:"a",
//     1:"b",
//     length:2   // 伪数组一般都有一个length属性
// }
// let realArr=Array.from(obj)
// console.log(realArr)   // [ 'a', 'b' ]
// console.log(Array.isArray(realArr))   // true
// 二、[...obj]  --- 前提是对象是可迭代对象
