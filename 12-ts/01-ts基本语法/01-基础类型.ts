// boolean类型
// let isDone:boolean=true;
// console.log(isDone)   
// export{} 
// -------------------------------
// 数字类型
// let a:number=100;
// console.log(a)

// -------------------------------
// 字符串类型
// let a:string="wangcai"
// console.log(a)

// let a:string="wangcia"
// let sentence:string=`hello ${a}`
// console.log(sentence)   // hello wangcia

// -------------------------------
// 数组类型   两种表示方法
// let a:number[]=[1,2,3]   数组后面加[]
// console.log(a)

// let a:Array<number>=[1,2,3];   使用泛型数组Array<元素类型>
// console.log(a)

// let name:string[]=["a","b","c"]
// console.log(name)

// let name:Array<string>=["a","b","c"]
// console.log(name)

// -------------------------------
// 元组类型  Tuple   可以放多种类型
// 可以定义一个已知元素数量和类型的数组，类型可以不一致
// 声明一个tuple类型的的数组
let wc:[string,number]=["wangcai",100]  // 必须一一对应
// console.log(wc)
// console.log(wc[0])
// console.log(wc[0].substr(2))
// console.log(wc[1].substr(2))   // wc[1].substr is not a function
// substr-------去除字符串的前两位

// wc[2]="hello"
// console.log(wc[2])   // 虽然报错，但是能打印出来
// wc[3]="hello"   // 不能将类型“"hello"”分配给类型“undefined”

// -------------------------------
//枚举型    enum类型是对javascript标准数据类型的补充
// 首先定义出枚举的类型 
// enum Color{
//     RED,
//     GREEN,
//     BLUE
// }
// let a:Color=Color.GREEN
// console.log(a)  // 1   相当于索引

// let b:Color=Color.GOLD  // ----报错
// console.log(b)  // undefined

// 默认情况下，编号从0开始，如果指定了编号，那么编号就是所指定的编号
// enum Color{
//     RED=10,
//     GREEN=100,
//     BLUE   // 编号默认是101
// }
// let b:Color=Color.RED
// console.log(b)
// let c:Color=Color.GREEN
// console.log(c)


// -------------------------------
// any   会自动推断变量的类型
// let notSure:any=4
// // console.log(notSure)
// console.log(notSure.toFixed(2))  // 保留两位小数
// let abc:any="hello"
// console.log(abc.toFixed())  // abc.toFixed is not a function
// 只有number类型才能调用这个方法，any会自动推断变量的类型

// 只知道一部分数据类型的时候
// let list:any[]=[1,true,"free"];
// // console.log(list[0])  // 1
// // console.log(list[2])
// list[0]="hello"
// console.log(list[0])  // hello
// list[2]=100
// console.log(list[2])  // 200

// -------------------------------
// void  本身的类型用处不大
// function f1(a,b) :void {  // void表示函数没有返回值
//     console.log(a+b)  // 3
// }
// f1(1,2)

// function f(a,b){
//     return a+b
// }
// console.log(f(1,2))  // 3

// function f(a,b) :void {
//     console.log(a+b)   // 3
// }
// console.log(f(1,2))   // undefined



// -------------------------------
//null 和 undefined 本身的类型用处不大  是一种数据类型，他们的值也只是 null 和 undefined
// let a:null=null
// console.log(a)  // null

// let b:undefined=undefined   
// console.log(b)  // undefined

// null 和 undefined是任何数据类型的子类型,也就是说可以把null，undefined数据类型的变量赋给number,string等类型的变量
// let a:number=null
// console.log(a)  // null

// let a:number=null
// a=undefined
// console.log(a)  // undefined

// let a:null=null;
// a=undefined
// console.log(a)  // undefined

// let a=100;
// a=undefined;
// console.log(a)  // undefined

// -------------------------------
// never    表示不知道类型的类型就是never类型
// function sum(msg:string):never{  // 不知道函数的返回值类型
//     throw Error(msg)
// }

// 给函数的返回值指定类型，也可以给函数的参数指定类型
// function a(name:string,age:number):any{
//     // console.log(a)  // [Function: a]
//     console.log(name,age)  // wangcai 100

// }
// a("wangcai",100)


// -------------------------------
// | 给函数指定多种形参
// function sum(x:number | string){
//     if(typeof x== "number"){
//         console.log(x)  // 100
//     }else if(typeof x== "string"){
//         console.log(x)
//     }else{
//         console.log(x)
//     }
// }
// sum(100)


// -------------------------------
// 类型断言  有两种表示方法   告诉编译器是什么样的数据类型,不需要编译器自己推断
// let name:number | string | boolean;
// name="wangcai";
// // console.log((name as string))  // wangcai
// name=100;
// console.log((name as number).toFixed(2))  // 100.00

// let name:number | string | boolean;
// name="wangcai";
// console.log((<string>name).length) // 7

// let name:any="hello world~"
// // <string>name表示对name断言，是string类型
// console.log((<string>name).substr(2))  // llo world~

// -------------------------------
// any类型，编译器也会自动推断变量的类型(自动装箱)
// let name:string="hello"   // 自动把字符串变成对象，然后可以.length
// console.log(name.length)   // 5
// -------------------------------




export{} 
