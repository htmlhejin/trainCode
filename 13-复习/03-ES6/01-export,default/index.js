// 使用reactapp，写js代码，在浏览器中看效果
// export导出的方式，都是以下面的方式导入  -- 解构赋值
// import {a,b} from "./out"


// import {a,b} from "./out"
// console.log(a,b)

// 导出时起别名
// import {hello,world} from "./out"
// console.log(hello,world)


// 导入时起别名,那么使用时只能使用别名
// import {a as hello,b as world} from "./out"
// console.log(hello,world)


// import * as obj from "./out"
// console.log(obj.a,obj.b)


// import也会提升，但是一般放在最前面


// 导入和导出都是动态的
// import { a, b } from "./out"
// setInterval(() => {
//     console.log(a, b)
// }, 1000)

// export default形式的导出
// import a from "./out" // a相当于直接起了个别名
// console.log(a)

// export default形式的导出通过这种方式导入，直接起一个别名
import obj from "./out"
console.log(obj.a,obj.b)