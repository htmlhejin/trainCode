// hasOwnProperty   不能去取得原型链中的属性，只靠别实例属性
// let a={name:"wangcai",age:1000}
// console.log(a.hasOwnProperty('name'))  // true
// console.log(a.hasOwnProperty('toString'))  // false

// 实现对象多层的深拷贝
function deepCopy(obj){
    if(obj==null) return obj;
    if(typeof obj!=='object') return obj;
    if(obj instanceof Date) return ;
    let newObj=new obj.constructor
    // console.log(newObj)  // {}  []  //传过来的是数组，实例就是空数组，传过来的是对象，实例就是空对象
    for(key in obj){
        // 如果对象中有多层，递归实现深拷贝
        newObj[key] = deepCopy(obj[key])
    }
    return newObj;
}
let obj={name:"hello",age:{number:10}}
// let obj=[1,2,3]
let abc =deepCopy(obj)
console.log(abc)  // { name: 'hello', age: { number: 10 } }
abc.age.number=999
console.log(obj)  // { name: 'hello', age: { number: 10 } }
console.log(abc)  // { name: 'hello', age: { number: 999 } }

