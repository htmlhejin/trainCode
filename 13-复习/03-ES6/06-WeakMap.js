// WeakMap  存放键值对，但是键只能是对象，,值任意，区别于Map
// 百度搜索WeakMap mdn
let m = new WeakMap()
// let o1={}
// m.set(o1,666)
// console.log(m)   // WeakMap { [items unknown] }

let o2=function(){}
m.set(o2,666)
console.log(m)   // WeakMap { [items unknown] }
// 见Map.html