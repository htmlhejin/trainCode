// 深拷贝只是将指针改变，引用的还是同一个对象，而浅拷贝是重新创建了一个对象
// 对象中只有一层，是深拷贝
// let obj={name:"wangcai"}
// let newObj={...obj}
// // console.log(newObj)  // { name: 'wangcai' }
// newObj.name="hello"
// console.log(obj)    // { name: 'wangcai' }
// console.log(newObj)  // { name: 'hello' }

// ----------------------------------
// 自己实现深拷贝  拷贝前后的变量没有关系   深拷贝拷贝的一般是[],{}
// function deepCopy(obj){
//     if(obj==null) return obj;   // 去掉obj是null,undefined的情况
//     if(typeof obj !=='object') return obj;  // 去掉obj是number,string,boolean的情况
//     if(obj instanceof Date) return new Date()  // 去掉是日期的情况
//     // console.log(obj)  // [ 1, 2, 3 ]
//     // obj也可能是正则
//     // 深拷贝之后，传过来什么就返回什么
//     let newObj = new obj.constructor
        // 经过处理，把拷贝后的数据返回
//     // console.log(newObj)  // []  
//     // console.log(typeof newObj)  // []  object
//     return newObj;
// }
// let obj=[1,2,3]
// let newObj=deepCopy(obj)
// console.log(newObj)
// let n=deepCopy(obj)
// n[0]=999
// console.log(obj,n)  // [ 1, 2, 3 ] [ 999 ]

// =======
// function deepCopy(obj) {
//     if (obj == null) return obj;   // 去掉obj是null,undefined的情况
//     if (typeof obj !== 'object') return obj;  // 去掉obj是number,string,boolean的情况
//     if (obj instanceof Date) return new Date()  // 去掉是日期的情况
//     let newObj = new obj.constructor   // 得到传过来的是数组还是对象
//     for(key in obj){
//         newObj[key]=obj[key]
//     }
//     return newObj;  // 把copy之后的数组或对象返回
// }
// // let obj = [1, 2, 3]
// // let newObj = deepCopy(obj)
// // console.log(newObj)  // [ 1, 2, 3 ]
// // newObj[0]=999
// // console.log(obj)   // [ 1, 2, 3 ]
// // console.log(newObj)  // [ 999, 2, 3 ]

// let obj={name:"wangcai",age:1000}
// let newObj = deepCopy(obj)
// // console.log(newObj)  // { name: 'wangcai', age: 1000 }
// newObj.age=100
// console.log(obj)     // { name: 'wangcai', age: 1000 }
// console.log(newObj)  // { name: 'wangcai', age: 100 }

// ------------------再来一遍
function deepCopy(abc){
    if(abc==null) return abc;
    if(typeof abc!=='object') return abc;
    if(abc instanceof Date) return ;
    let newObj=new abc.constructor
    for(key in abc){
        newObj[key]=abc[key]
    }
    return newObj;
}
let obj={name:"hello",age:10}
let newabc = deepCopy(obj)
console.log(newabc)
newabc.age=999
console.log(obj)
console.log(newabc)
// 总结，
// 深拷贝拷贝的一般是数组或对象，首先排除掉不是数组或对象的情况，遍历出传递过来的数据的每一项，经过处理，把copy之后的数据返回



// let obj={name:"hello"}
// console.dir(obj)
// console.log(obj.constructor)   // [Function: Array]

// let a=null
// console.log(a==undefined)   // true
// console.log(a===undefined)   // false