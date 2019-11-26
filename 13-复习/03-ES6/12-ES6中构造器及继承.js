// ES6通过class创建一个构造器
// -----------------------class的基本使用
// class Animal{
//     constructor(name){
//         this.name=name
//     }
// }
// let a=new Animal("hello");     // new时自动调用constructor函数,参数传递到constructor中
// console.log(a.name)  // hello


// -----------------------------------ES6中模拟ts中的抽象类
// class Animal {
//     constructor() {
//         this.type="animal"
//         if(new.target===Animal){
//             throw new Error("不能new")
//         }
//     }
// }
// let a = new Animal();
// console.log(a.type)  // Error: 不能new
// -----------------------------------构造器中的属性
// class Animal{
//     constructor(name){
//         // 实例属性---定义在构造器中
//         this.name=name
//     }
//     // 公有属性--定义在原型上面
//     say(){
//         console.log("say...")
//     }
// }
// let a = new Animal("wangcai");
// console.log(a)  // Animal { name: 'wangcai' }
// console.log(a.hasOwnProperty('say'))  // false
// a = Animal.prototype
// a.say()   // say...


// -----------------------------------访问器,也是公有属性
// class Animal{
//     constructor(name){
//         this.name=name
//     }
//     // 访问器
//     get age(){
//         return 100;
//     }
// }
// let a = new Animal("wangcai");
// console.log(a.hasOwnProperty('age'))  // false,说明访问器在原型上，是公有属性
// console.log(a.__proto__.hasOwnProperty('age'))  // true
// console.log(a.age)  // 100  把访问器当作属性使用

// -----------------------------------静态属性
// 静态属性指的是class本身的属性，既不是实例属性，也不是公有属性
class Animal{
    static score = 110;   // node不认识static
    constructor(name){
        this.name=name
    }
    // 访问器
    get age(){
        return 100;
    }
}
// let a = new Animal("wangcai");
// 静态属性不能通过实例来调用
console.log(Animal.score)
console.log(a.hasOwnProperty('score'))

// -----------------------------------继承
// class Animal{
//     constructor(name){
//         this.name=name
//     }
//     say(){
//         console.log("....")
//     }
// }
// class Dog extends Animal{

// }
// let d=new Dog("wangcai")
// console.log(d.name)  // wangcai
// d.say()  // ....

// ------------------------------
// class Animal{
//     constructor(name){
//         this.name=name
//     }
//     say(){
//         console.log("....")
//     }
// }
// class Dog extends Animal{
//     constructor(a){
//         this.age=a
//     }
// }
// let d=new Dog("wangcai")
// console.log(d.age)  //  Must call super constructor in derived class before access
// d.say()  // ....

// -------------------------------
// class Animal{
//     constructor(name){
//         this.name=name
//     }
//     say(){
//         console.log("....")
//     }
// }
// class Dog extends Animal{
//     constructor(a){
//         super(a)   // 显式调用父类的构造器
//         this.age=a
//         // console.log(this)  // Dog { name: 'wangcai', age: 'wangcai' }
//     }
// }
// let d=new Dog("wangcai")
// console.log(d.age)  // wangcai
// console.log(d.name)  //  wangcai
// d.say()  // ....




// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------


