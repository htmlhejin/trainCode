// ts的核心原则之一：对值的结构进行类型检查   类型校验

// -----------------------------  用接口约束对象(对对象进行类型校验)
// 用接口约束对象,规定对象中有什么样的数据类型
// interface MyObj{
//     name:string;
//     speak():void;    // 接口里面仅仅是方法的声明
// }
// // obj:MyObj表示用MyObj接口约束obj对象，并且对象里面必须有name属性，speak方法
// let obj:MyObj={
//     name:"wangcai",
//     speak(){
//         console.log("speak...")
//     }
// }
// obj.speak()

// ------------------------------- 对函数类型进行校验
// 校验 参数列表的类型 和 返回值的类型
interface MySum{
    // 参数列表的校验    string是对函数返回值的校验
    (a:string,b:number):string;
}
let sum:MySum=function(first,last){
    return first+last;
}
console.log(sum('abc',1))  // abc1

// ------------------------------ 可索引的接口 对数组进行校验,
// 接口对数组进行约束
// interface MySum{
//     //  索引的hinumber类型，0，1，2，3，   值是string类型
//     // [index:number]:string
//     [index:number]:number
// }
// // let arr:MySum=["zs","ls"]
// let arr:MySum=[1,2]

// ------------------------------ 可索引的接口 对对象进行校验,
// 接口对对象进行约束
// interface MySum{
//     [index:string]:string
// }
// let obj:MySum={
//     name:"wangcai"
// }
// let obj2:MySum={
//     name:"zhangsan"
// }

// ----------------------------利用接口约束类
// class Animal {
//     name:string;
//     constructor(name:string) {
//         this.name=name
//     }
// }
// interface WithNameClass{
//     // new(name:string)当作一个对象,值是类类型
//     new(name:string):Animal;
// }
// // clazz是接口类型,name是string类型
// function createClass(clazz:WithNameClass,name:string){
//     return new clazz(name);
// }
// let b=createClass(Animal,"wangcai")
// console.log(b)  // Animal { name: 'wangcai' }
// console.log(b.name)   // wangcai

// ----------------------------- 可选参数
// interface MyObj{
//     name?:string;
//     speak():void; 
// }
// let obj:MyObj={
//     speak(){
//         console.log("speak123...")
//     }
// }
// obj.speak();

// -----------------------------对对象进行校验
// interface Rect{
//     width:number;
//     height:number
// }

// let rect:Rect={
//     width:100,
//     height:100
// }

// -----------------------------  利用接口描述行为的抽象， 接口可以继承
// 接口可以当作比抽象类还抽象的东西
// interface Animal{
//     eat():void;
//     jump():void;
//     sleep():void;
// }
// // 接口可以继承
// interface People extends Animal{
//     study():void;
// }
// // 定义一个类实现接口
// class  Wc implements People{
//     eat(){
//         console.log("eat")
//     }
//     jump(){
//         console.log("jump")
//     }
//     sleep(){
//         console.log("sleep")
//     }
//     study(){
//         console.log("study")
//     }
// }
// let w=new Wc();  // new一个类创建了一个对象，对对象中自然就有了类中的属性，方法等
// w的类型是类类型，Wc这个类
// w.eat()
// w.jump()
// w.sleep()
// w.study()

// -----------------------------  接口规定某些属性必须有，其他的任意
// interface Person{
//     name:string;
//     age:number;
//     // [props:string]:any  // 可有可无的属性,值是任意数据类型
//     [propsName:string]:any  // 可有可无 
// }
// let p:Person={
//     name:"wangcai",
//     age:100,
//     height:999
// }
// console.log(p)

// -----------------------------arguments
// 如果实参很多，用arguments接收
// interface SumInterface{
//     (a:number,b:number,c:number,d:number):number
// }
// let sum:SumInterface=function(a,b,c,d):number{
//     // arguments是伪数组(类数组)，也就是对象
//     // console.log(arguments)  // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
//     // array.slice()   从已有的数组中返回选定的元素,返回一个子数组
// //    console.log( Array.prototype.slice.call(arguments))  // [ 1, 2, 3, 4 ]


//     // let args:IArguments=arguments;
//     // return   Array.prototype.slice.call(args).reduce((val,item)=>val+item);

//     return   Array.prototype.slice.call(arguments).reduce((val,item)=>val+item);
// }
// console.log(sum(1,2,3,4))

// -----------------------------arguments
// interface SumInterface{
//     // 形参是...args，类型是数组，数组中的数据类型任意,形参可以是任意值，可以命名为a,b,c都可以
//     (...args:any[]):number 
// }
// let sum:SumInterface=function(a:any[]):number{
//     // console.log(a)  //  [ 1, 2, 3 ]
//     // console.log(...a)   // 1 2 3
//     return a.reduce((val,item)=>val+item)
// }
// console.log(sum([1,2,3]))  // 6

// interface SumInterface{
//     // 形参是...args，类型是数组，数组中的数据类型任意,形参可以是任意值，可以命名为a,b,c都可以
//     (...args:any[]):number 
// }
// let sum:SumInterface=function(...a:any[]):number{
//     // console.log(...a)  // 1 2 3
//     // console.log(a)  // [ 1, 2, 3 ]
//     return a.reduce((val,item)=>val+item)
// }
// console.log(sum(1,2,3)) 


// -----------------------------
// 总结
// 利用接口约束对象，函数，类
// 利用索引接口约束对象，数组
// 接口：
//  1、定义类实现接口
//  2、利用接口约束对象，函数，类


export{};



