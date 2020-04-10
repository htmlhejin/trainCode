// 基本的展开运算符
// let a=[1,2,3]
// console.log(...a)    // 1 2 3
// console.log([...a])  // [ 1, 2, 3 ]


// 展开基本数据类型时是深copy,copy完后二者没有关系，改变一个，不影响另一个
// let a=[1,2,3]
// let b =[...a]
// b[0]=100
// console.log(a)  // [ 1, 2, 3 ]
// console.log(b)  // [ 100, 2, 3 ]


// 展开一个对象时是浅copy,copy后二者有关系，改变一个，另一个也会变
// let obj={name:"hello"}
// let arr=[obj,1,2]
// let newArr=[...arr]
// // console.log(newArr)  // [ { name: 'hello' }, 1, 2 ]  
// newArr[0].name="world"
// console.log(obj)  // { name: 'world' }
// console.log(newArr)   // [ { name: 'world' }, 1, 2 ]


// slice--- 返回剪切后的数组，包前不包后
// slice---数组中如果是基本数据类型，是深copy,二者没有关系
// let arr=[1,2,3,4,5]
// // console.log(arr.slice(0,2) )  // [ 1, 2 ]
// let newArr=[...arr]
// newArr[1]=100
// console.log(arr)  // [ 1, 2, 3, 4, 5 ]
// console.log(newArr)  // [ 1, 100, 3, 4, 5 ]
// --------
// 数组中如果有对象，那么slice就是浅copy,copy后二者有关系
// let obj={age:10}
// let arr=[obj,2,3,4,5]
// let newArr=[...arr]
// newArr[0].age=666
// console.log(obj)  // { age: 666 }
// console.log(newArr) // [ { age: 666 }, 2, 3, 4, 5 ] 


// 展开对象,如果只有一层，是深copy,copy后二者没有关系
// let obj={name:"wangcai",age:100}
// let newObj={...obj}
// newObj.age=999
// console.log(obj)  // { name: 'wangcai', age: 100 }
// console.log(newObj)  // { name: 'wangcai', age: 999 }
// --------  
// 对象中有多层,是浅copy,copy后二者有关系
// let obj={name:"wangcai",age:{number:100}}
// let newObj={...obj}
// newObj.age.number=999
// console.log(obj)  // { name: 'wangcai', age: 999 }
// console.log(newObj)  //  { name: 'wangcai', age: 999 }
// -------
// let obj={name:"wangcai",age:{number:100}}
// // 把obj展开，对age进行修改，再把age展开，对number进行修改
// let newObj={...obj,age:{...obj.age,number:999}}
// console.log(newObj)  // { name: 'wangcai', age: { number: 999 } }
// --------
// 实现多层对象的深copy,把多层的属性展开
// let obj={name:"wangcai",age:{number:100}}
// let newObj={...obj,age:{...obj.age}}
// newObj.age.number=888
// console.log(obj)   // { name: 'wangcai', age: { number: 100 } }
// console.log(newObj)  // { name: 'wangcai', age: { number: 888 } }
// -------再来一遍
// let obj={name:"wangcai",age:{number:{score:222}}}
// let newObj={...obj,age:{...obj.age,number:{...obj.age.number}}}
// newObj.age.number.score=666
// console.log(obj)   // { name: 'wangcai', age: { number: 222 } }
// console.log(newObj)    // { name: 'wangcai', age: { number: 666 } }


// SON.parse(JSON.stringify(obj))实现多层对象的深copy
// let obj={name:"wangcai",age:{number:100}}
// // console.log(JSON.stringify(obj))  //转成JSON字符串 {"name":"wangcai","age":{"number":100}}
// let parse = JSON.parse(JSON.stringify(obj))
// // JSON.parse把JSON字符串转成JSON对象
// // console.log(parse)  // { name: 'wangcai', age: { number: 100 } }
// parse.age.number=777
// console.log(obj)  // { name: 'wangcai', age: { number: 100 } }
// console.log(parse)  // { name: 'wangcai', age: { number: 777 } }
// -------------
// SON.parse(JSON.stringify(obj))实现多层对象的深copy,有一个不足，只能copy符合json格式的数据
let obj = {name:"wangcai",age:function(){}}
console.log(JSON.stringify(obj))  // {"name":"wangcai"}
let newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj)  // { name: 'wangcai' }


// 总结：
// 深copy:适合于基本数据类型的展开，然后修改，copy后二者没有关系，改变一个不影响另外一个
// 深copy:展开是一个对象时是浅拷贝，copy后二者有关系
// 浅copy:适合于数组中有对象的情况，展开数组，然后修改，copy后二者有关系，改变一个，另一个也会变
// 对象中有一层属性：是深copy
// 对象中有多层属性：是浅copy,格式的数据
// 如何实现多层对象的深copy?
// 1、把多层属性完全展开
// 2、通过JSON.parse(JSON.stringfy(obj)),该方法有一个不足,只能copy符合json
