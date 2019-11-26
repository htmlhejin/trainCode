// 解构赋值一般用于数组或对象
// 相同的结构才能解构赋值
// let [a,b,c] = [1,2,3]
// console.log(a,b,c)  // 1 2 3

// let [b,c] = [1,2,3]
// console.log(b,c)  // 1 2

// let [,b,c] = [1,2,3]
// console.log(b,c)  // 2 3


// 结构不一样，解构出来的值是undefined
// let {a,b,c} = [1,2,3]
// console.log(a,b,c)  // undefined undefined undefined
// 结构不一样,可以解构出隐藏的属性
// let {length} = [1,2,3]
// console.log(length)  // 3


// 解构对象，要保证key一样
// let {name,age} = {name:"eangacai",age:100}
// console.log(name,age)

// 可以给key起别名
let {name:a,age:b} = {name:"eangacai",age:100}
console.log(a,b)   // eangacai 100