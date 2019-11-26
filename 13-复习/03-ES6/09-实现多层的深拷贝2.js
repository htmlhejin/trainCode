
function deepCopy(obj, hash = new WeakMap()) {  // 使用WeakMap解决栈溢出的问题
    if (obj == null) return obj;
    if (typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);  // 正则
    // 先判断hash中是否有该对象，如果有直接返回，不再深拷贝了
    if (hash.has(obj)) {  // 第一次hash是空的WeakMap，不执行该if函数
        return hash.get(obj)  // 获取对象并返回
    }
    let newObj = new obj.constructor
    hash.set(obj, newObj)   // 制作一张映射表
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {  // 内部有key
            newObj[key] = deepCopy(obj[key],hash)
        }
    }
    return newObj;
}
let obj = {}
obj.b = obj
let a = { name: "wangcai", age: obj } // 超过最大调用堆栈大小  Maximum call stack size exceeded
console.log(deepCopy(a))  // { name: 'wangcai', age: { b: [Circular] } }


// ----------------
// 如果有栈溢出问题，需要解决环的问题，就需要使用WeakMap来解决


// let obj={}
// obj.a=obj
// console.log(obj)   // { a: [Circular] } 环


