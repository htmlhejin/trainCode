// let a=[1,2,3,4]
// let b=[3,4,5,6]

// let a1=new Set(a)
// let b1=new Set(b)
// console.log(new Set([...a1,...b1]))  // Set { 1, 2, 3, 4, 5, 6 }

// 并集[1,2,3,4,5,6] 
// function union(a,b){
//     let a1=new Set(a)
//     let b1=new Set(b)
//     // console.log(new Set([a,b]))  // Set { [ 1, 2, 3, 4 ], [ 3, 4, 5, 6 ] }
//     let s = new Set([...a1,...b1])
//     // console.log([...s])  // [ 1, 2, 3, 4, 5, 6 ]
//     return s
// }
// union(a,b)
// -----再来一遍
// function union(a,b){
//    console.log( [...new Set([...a,...b])])  // [ 1, 2, 3, 4, 5, 6 ]
// }
// union(a,b)

// 交集  [3,4]
// let a=[1,2,3,4]
// let b=[3,4,5,6]
// function intersection(){
//     let a1=new Set(a)
//     let b1=new Set(b)
//     // console.log([...a1])  // [ 1, 2, 3, 4 ]
//     return [...a1].filter(items=>{
//         return b1.has(items)
//     })
// }
// console.log(intersection())  // [ 3, 4 ]
// ------
// let a=[1,2,3,4]
// let b=[3,4,5,6]
// function intersection(){
//     let a1=new Set(a)
//     let b1=new Set(b)
//     return a.filter(items=>{
//         return b1.has(items)  //  [ 3, 4 ]
//     })
// }
// console.log(intersection())  

// 差集    a差b
let a=[1,2,3,4]
let b=[3,4,5,6]
function difference(){
    let a1=new Set(a)
    let b1=new Set(b)
    // console.log(b1)  // Set { 3, 4, 5, 6 }
    return [...a1].filter(items=>{
        return !b1.has(items)   // has是对象特有的方法，数组并没有该方法
    })
}
console.log(difference())  // [ 1, 2 ]








// 创建字符串
// let s="hello"
// console.log(s)
// let s=new String()
// console.log(s)  // [String: '']
// let s=new String("hello...")
// console.log(s)  // [String: 'hello...']
// console.log(typeof s)  // object
