// Map用来存放键值对，键和值可以是任意值
// new Map([iterable])
// iterable可以是数组或其他iterable对象，其元素是键值对

// let m=new Map()
// console.log(m)  // Map {}


// let m=new Map([["name","wagnacai"],['age',100]])
// console.log(m)  // Map { 'name' => 'wagnacai', 'age' => 100 }


// Map中的api,和Set中的差不多  百度搜索Map mdn
// let m=new Map([["name","wagnacai"],['age',100]])
// console.log(m.clear())  // undefined

// console.log(m.delete('name'))  // true   // delete移除指定元素并返回true,如果该元素不存在则返回false
// console.log(m)   // Map { 'age' => 100 }
// console.log(m.delete('a'))  // false   如果要删除的元素不存在，则返回false

// console.log(m.entries())  // [Map Iterator] { [ 'name', 'wagnacai' ], [ 'age', 100 ] }

// console.log(m.get('name'))  // wagnacai

// console.log(m.set('name',"xiaoqiang"))   // Map { 'name' => 'xiaoqiang', 'age' => 100 }
// console.log(m.set("score",100))  // Map { 'name' => 'wagnacai', 'age' => 100, 'score' => 100 }
// console.log(m.set({'address':'bj'},'ok'))  // Map { 'name' => 'wagnacai', 'age' => 100, { address: 'bj' } => 'ok' }
// 内存泄漏
// let obj={address:1}
// let m1 = m.set(obj,666)
// // console.log(m1)  // Map { 'name' => 'wagnacai', 'age' => 100, { address: 1 } => 666 }
// obj=null    // 即使清空了还是能打印出来，obj就是常驻内存了，造成内存泄漏,可以在控制台的Memory中查看，
// console.log(m1)    // Map { 'name' => 'wagnacai', 'age' => 100, { address: 1 } => 666 }

class Dog{}
let dog=new Dog;    // new时如果不传参，()可写可不写
let m=new Map([["name","wagnacai"],['age',100]])
m.set(dog,555)
console.log(m)  // Map { 'name' => 'wagnacai', 'age' => 100, Dog {} => 555 }
dog=null;   //  即使清空了还是能打印出来，dog就常驻内存，造成内存泄漏,可以在控制台的Memory中查看，内存中始终有dog对象
console.log(m)  // Map { 'name' => 'wagnacai', 'age' => 100, Dog {} => 555 }
// 无法清空


// console.log(m.has('age'))  // true
// console.log(m.has('a'))  // false