// Set   存储任何类型的唯一值,数据可以是任何类型，但是数据唯一,因此可以通过Set实现数组去重
// new Set([iterable]);
// 创建一个set对象
// let set = new Set()
// console.log(set)  // Set {}

// let set = new Set([1,2,3])
// console.log(set)  // Set { 1, 2, 3 }

 //  自动去重
// let set = new Set([1,2,3,2,3,6,8]) 
// console.log(set)  // Set { 1, 2, 3, 6, 8 } 

// 存放任意类型
// let set = new Set([1,2,true,undefined,function(){},"hello"]) 
// console.log(set) // Set { 1, 2, true, undefined, [Function], 'hello' }

// Set中的api  百度搜索 set mdn
// let s = new Set([1,2,3])
// s.add(8)  // 添加元素
// console.log(s)  // Set { 1, 2, 3, 8 }
// s.delete(2)  // 删除指定元素
// console.log(s) // Set { 1, 3 }
// s.clear()  // 清空
// console.log(s) // Set {}

// s.forEach(item=>console.log(item))  // 1 2 3

// for(value of s){
//     console.log(value)  // 1 2 3
// }

console.log(s.entries())  // 返回一个新的迭代器对象，里面包含按顺序插入的所有元素的值 [Set Iterator] { 1, 2, 3 }




// v-show切换css的display属性，控制显示与隐藏，占据文档位置
// v-if不占据文档位置，会删除dom标签，性能消耗更高一些，如果频繁切换的话，使用v-show更好一些