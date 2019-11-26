// 在node中，都是utf8,在utf8中,一个汉字占三个字节
// let b=Buffer.from("中")
// console.log(b)  //<Buffer e4 b8 ad>   打印出来的是十六进制

// let b=Buffer.from("10")    //表示1和0两个字符串
// console.log(b)  //<Buffer 31 30>

// let b=Buffer.from([10])    //表示内存中放了数字10
// console.log(b)  //<Buffer 0a>

// let b1=Buffer.from([10])    //表示内存中放了数字10
// let b2=Buffer.from(b1)      //表示内存中放了一个Buffer
// console.log(b2)     //<Buffer 0a>

// let b1=Buffer.alloc(10)     //alloc表示开辟一个内存空间，大小为10个字节，里面没有垃圾数据
// console.log(b1)     //<Buffer 00 00 00 00 00 00 00 00 00 00>

// let b1=Buffer.allocUnsafe(10)     //alloc表示开辟一个内存空间，大小为10个字节，只管分配空间，不会清理里面的垃圾数据(Unsafe)
// console.log(b1)     //<Buffer d0 95 33 c8 e9 01 00 00 01 00>

// let b1=Buffer.from('hello world~')
// console.log(b1)     //<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 7e>
// console.log(b1.toString())  //toString()括号里没有写东西，默认转成utf8  hello world~
// console.log(b1.toString("base64"))      //转成base64模式  aGVsbG8gd29ybGR+

// let b1=Buffer.from("中")
// console.log(b1) //<Buffer e4 b8 ad>    //十六进制
// console.log(b1.toString())  //中
// console.log(b1.toString("base64"))      //5Lit
// 十六进制转换成二进制
// console.log((0xe4).toString(2))     //11100100
// console.log((0xb8).toString(2))     // 10111000
// console.log((0xad).toString(2))     //10101101

// 8*3=6*4 base64  00111001 00001011 00100010 00101101数据分成四份，每份占6位,前面补0
// 把二进制转化成十进制--parseInt
// let b1=Buffer.from("中")
// console.log(parseInt('00111001',2))     //57
// console.log(parseInt('00001011',2))     //11
// console.log(parseInt('00100010',2))     //34
// console.log(parseInt('00101101',2))     //45

// let str='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// str+=str.toLowerCase();     //str.toLowerCase()--把str转换成小写
// str+='0123456789+/';
// console.log(str)    //ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
// console.log(str[57]+str[11]+str[34]+str[45])    //5Lit

// 操作Buffer中的api--copy
let b1=Buffer.from("中")
let b2=Buffer.from("国")
let c=Buffer.concat([b1,b2])
console.log(c) //<Buffer e4 b8 ad e5 9b bd>
console.log(c.toString())   //中国

// let c=Buffer.alloc(6)
// b1.copy(c,0,0,3)  //把b1 copy到c里面，从索引0开始，0到3，左闭右开
// b2.copy(c,3,0,3)  //把b1 copy到c里面，从索引0开始，0到3，左闭右开
// console.log(c)  //<Buffer e4 b8 ad e5 9b bd>
// console.log(c.toString())   //中国

// let b1=Buffer.from("中")
// let b2=Buffer.from("国")
// let c=Buffer.alloc(5)    //空间不够会导致乱码
// b1.copy(c,0,0,3)  //把b1 copy到c里面，从索引0开始，0到3，左闭右开
// b2.copy(c,3,0,3)  //把b1 copy到c里面，从索引0开始，0到3，左闭右开
// console.log(c)  //<Buffer e4 b8 ad e5 9b>
// console.log(c.toString())   //中�