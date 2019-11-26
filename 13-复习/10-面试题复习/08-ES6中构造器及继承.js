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
// d.say() 


// ---------------------------------------
// 继承了父类但是没有显示调用父类中的构造器super()是错误的
class Animal{
    constructor(name){
        this.name=name
    }
    say(){
        console.log("....")
    }
}
class Dog extends Animal{
    constructor(a){
        this.age=a
    }
}
let d=new Dog("wangcai")
console.log(d.age)  //  Must call super constructor in derived class before access
d.say()  // ....