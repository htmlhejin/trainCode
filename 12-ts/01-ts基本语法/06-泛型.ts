// 泛型   宽泛的类型
// 所谓泛型，就是指没有固定的类型，是什么类型还不确定
// 给类添加一个类型变量T,T帮助我们捕获用户传入的参数的类型，可以确保参数类型与返回值的类型相同
// 如果一个类中使用了泛型，这个类就叫泛型类
// 如果一个函数使用了泛型，这个类就叫泛型函数

// ----------------------------- 泛型类
// class MyArray<T> {
//     list:T[]=[];
//     add(ele:T){
//         this.list.push(ele);
//     }
// }
// // let arr=new MyArray();  // 如果没有指定类型，编译器会根据传入的参数自动确定参数类型
// // new时指定参数类型是number
// let arr=new MyArray<number>();  // arr的类型是类类型
// arr.add(1)
// arr.add(1)
// arr.add(1)
// console.log(arr)  // MyArray { list: [ 1, 1, 1 ] }

// -----------------------------泛型接口
// interface CalInterface{
//     <T>(a:T,b:T):T  // (a:T,b:T)当作一个对象
// }
// let add:CalInterface=function(a,b){
//     // return a+b;  // 运算符“+”不能应用于类型“T”和“T”
//     return a;
// }
// console.log(add(1,2));  // 1
// console.log(add("a","b"));  //a
// console.log(add(111,"b"));  // 类型“"b"”的参数不能赋给类型“111”的参数。
// ---------------

// 两个泛型
// interface CalInterface{
//     <T,K>(a:T,b:K):T  // (a:T,b:T)当作一个对象
// }
// let add:CalInterface=function(a,b){
//     return a;
// }
// console.log(add(111,"b"));

// ----------------------------- 多个泛型
// 不借助中间变量交换两个变量的值
// function swap<A,B>(tuple:[A,B]):[B,A]{
//     // return [tuple[0],tuple[1]];   //报错，不满足:[B,A]
//     return [tuple[1],tuple[0]];
// }
// console.log(swap([1,"hello"]));  // [ 'hello', 1 ]


// ----------------------------- 默认泛型
// 一开始就给泛型执行一个默认的数据类型
// function createArray<T=number>(length:number,value:T):T[]{  // value:T默认情况下t就是number
//     let list:T[]=[];
//     for(let i=0;i<length;i++){
//         list[i]=value;
//     }
//     return list;
// }
// console.log(createArray(3,"a"));  // [ 'a', 'a', 'a' ]

// -----------------------------泛型继承构造器
// function loger<T>(val:T){
//     console.log(val)
// }
// loger("abc")

// -泛型继承构造器表示到时候传递的数据应该是String的子类
// function loger<T extends String>(val:T){
//     console.log(val)
// }
// // loger(123)  // 报错
// loger("abc")  // 报错
// -----------------------------泛型约束对象
// interface Cart<T>{
//     list:T[];
// }
// // let cart:Cart<number>={list:[1,2,3]}
// let cart:Cart<string>={list:['a','b','c']}

// 通过type来定义
// type Cart<T>=(a:T,b:T)=>T;
// let cart:Cart<number>=function(a,b):number{
//     return a+b;
// }
// console.log(cart(1,2));

type Cart<T>={list:T[]}
// let cart:Cart<string>={list:["a","b","c"]}
// console.log(cart);  // { list: [ 'a', 'b', 'c' ] }
let cart1:Cart<number>={list:[1,2,3]}
console.log(cart1)  // { list: [ 1, 2, 3 ] }


// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------











export{};

