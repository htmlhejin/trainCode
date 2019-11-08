// -----------------------
// interface Name{
//     name:string;
// }
// class Person {
//     name:string;
// } 

// let p: Name;  // 定义一个变量p,p的类型是Name,接口类型
// p=new Person();  // 此时变量的类型为类类型，
// console.log(p)  // Person {}
// 接口类型和类类型中额属性相同，所以兼容了

// ----------------------- 接口的兼容性  大范围给小范围  ok 
// interface Animal{
//     name:string;
//     age:number
// }
// interface People{
//     name:string;
//     age:number
// }
// function getAnimalName(animal:Animal){
//     return animal.name;
// }
// // let p={name:"wangcai",age:100};   // ok
// let p:People={name:"wangcai",age:100}  // ok,因为两个接口属性相同，兼容了
// console.log(getAnimalName(p))

// -----------
// interface Animal{
//     name:string;
//     age:number
// }
// interface People{
//     name:string;
//     age:number;
//     address:string
// }
// function getAnimalName(animal:Animal){
//     return animal.name;
// }
// let p:People={name:"wangcai",age:100,address:"beijing"}  // 也ok,(参数)多传无所谓，只要有对应的类型中的属性
// let p:People={name:"wangcai",address:"beijing"}  // 不ok,缺少属性age
// console.log(getAnimalName(p))

// -----------
// interface Animal{
//     name:string;
//     age:number;
//     address:string
// }
// interface People{
//     name:string;
//     age:number;
// }
// function getAnimalName(animal:Animal){
//     return animal.name;
// }
// let p:People={name:"wangcai",age:100}
// getAnimalName(p)  // 不ok   缺少属性

// -----------------------基本类型的兼容性  小范围赋给大范围
// let n:string|number;
// let k:string="hello";
// n=k;   // ok  小范围赋给大范围

// let n:string;
// let k:string|number;
// n=k;     // 不Ok   大范围给小范围


// ----------------------- 类的兼容性
// class Animal {
//     name:string;
// }
// class  Dog extends Animal{   // 子类又叫派生类
//     age:string;
// }
// let p:Animal;
// p=new Dog();  // ok  兼容

// let p:Dog;
// p=new Animal(); // 不Ok  不兼容

// class  Animal {
//     name:string;
// }
// class Demo{
//     name:string;
//     age:number;
// }
// let p:Animal;
// p=new Demo();   // 兼容  大范围赋给小范围 ok

// -------

// class  Animal {
//     name:string;
//     age:number;
//     address:string
// }
// class Demo{
//     name:string;
//     age:number;
// }
// let p:Animal;
// p=new Demo();   //  不兼容   小范围给大范围 不ok

// ----------------------- 函数的兼容性  小范围给大范围Ok
// 函数的兼容性分为  形参的兼容性  返回值的兼容性 
// 形参的兼容性-------少给可以，多给不要
// function f1(a:number,b:number):number{
//     return a+b;
// }
// type MyFun=(a:number,b:number)=>number;
// let p:MyFun;
// p=f1;    // 兼容

// ---------
// function f1(a:number,b:number,c:number):number{
//     return a+b;
// }
// type MyFun=(a:number,b:number)=>number;
// let p:MyFun;
// p=f1;    // 不兼容  大范围赋给小范围不ok   ,多给不要

// --------
// function f1(a:number,b:number):number{
//     return a+b;
// }
// type MyFun=(a:number,b:number,c:number)=>number;
// let p:MyFun;
// p=f1;  // 兼容   少给ok

// -------------
// 返回值的兼容性-----多给可以，少给不行
// {}  当作对象，函数的返回值的类型是对象
// type GFun=()=>{name:string,age:number}
// let p:GFun;
// function f(){
//     return {name:"wangacai",age:100};
// }
// p=f;   // 兼容

// -------

// type GFun=()=>{name:string,age:number}
// let p:GFun;
// function f(){
//     return {name:"wangacai",age:100,address:"beijing"};
// }
// p=f;   // 兼容   大范围给小范围  ok

// -------
// type GFun=()=>{name:string,age:number,address:"beijing"}
// let p:GFun;
// function f(){
//     return {name:"wangacai",age:100}
// }
// p=f;   // 不兼容   小范围给大范围  不ok

// ----------------------- 泛型的兼容性
// interface Demo<T>{
//     name:T;
// }
// let x:Demo<string>={name:"wangcai"}
// let y:Demo<number>={name:123}
// x=y;   //  不Ok  不兼容 类型都不一样

// ------
// interface Demo<T>{
//     name:T;
// }
// let x:Demo<string>
// let y:Demo<number>
// x=y;   //  不Ok  不兼容 类型都不一样

// -----
// interface Demo<T>{
// }
// let x:Demo<string>
// let y:Demo<number>
// x=y;      // 空接口，彼此赋值都兼容

// -----
// interface Demo1{
//     name:string;
// }
// interface Demo2{
//     age:number;
// }
// let x:Demo1;
// let y:Demo2;
// x=y;   // 不兼容

// ------
// interface Demo1{
//     name:string;
// }
// interface Demo2{
//     name:string;
// }
// let x:Demo1;
// let y:Demo2;
// x=y;   // 兼容


// ----------------------- 枚举的兼容性
// enum Color{
//     RED,
//     GREEN,
//     BLUE
// }
// let c:Color;
// c=123;
// console.log(c)   // 123  兼容

// -----

enum Color{
    RED,
    GREEN,
    BLUE
}
let n:number;
n=Color.RED;
console.log(n)  // 0


// -----------------------
// -----------------------


export{};