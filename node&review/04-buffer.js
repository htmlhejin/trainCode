// 开辟一个空间，存放字符串1和0
// let a=Buffer.from("10") 
// console.log(a)  //<Buffer 31 30>

// 开辟一个空间，存放数字10
// let a=Buffer.from([10]) 
// console.log(a)  //<Buffer 0a>

// // 开辟一个空间，大小为10个字节  没有垃圾数据
// let a=Buffer.alloc(10) 
// console.log(a)  //<Buffer 00 00 00 00 00 00 00 00 00 00>

// 开辟一个空间，大小为10个字节  有垃圾数据
// let a=Buffer.allocUnsafe(10) 
// console.log(a)  //<Buffer d8 6a 2e 27 76 02 00 00 70 d6>

// 解析字符串111001，把二进制转换为十进制
// console.log(parseInt(111001,2))    //57
// 解析字符串17，把八进制转换为十进制
// console.log(parseInt(17,8))    //15

// console.log((19).toString(2))   //10011
// console.log((19).toString(8))   //23

// let b1=Buffer.from("中")
// let b2=Buffer.from("国")
// let c=Buffer.alloc(6)
// b1.copy(c,0,0,3)
// b2.copy(c,3,0,3)
// console.log(c)  //<Buffer e4 b8 ad e5 9b bd>

let b1=Buffer.from("中")
let b2=Buffer.from("国")
console.log(Buffer.concat([b1,b2])) //<Buffer e4 b8 ad e5 9b bd>
console.log(Buffer.concat([b1,b2]).toString())  //中国