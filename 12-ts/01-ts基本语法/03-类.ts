// class 是关键字，Person是类名，name是属性，string是name的类型
// class Person{
//     name:string
//     constructor(name){
//         this.name=name   // this指向p
//     }
// }
// // new类的时候会自动调用构造器constructor并且传参
// // new一个类创建一个对象，这个对象中就有了类中的属性，该例中p就有了name属性
// let p=new Person("wangcai");
// console.log(p.name)

// export{};
// -------------------------   构造器constructor
// class Animal{
//     name:string;
//     constructor(name){
//         this.name=name
//     }
// }
// let a=new Animal("pig")
// console.log(a.name)  // pig
// let b=new Animal("dog")
// console.log(b.name)  // dog


// -------------------------  三种访问权限符   加  访问器  构造器
// public表示组件类内，类外都可以访问那个public属性
// private表示只能在本类内访问private属性,潜规则规定私有属性以_打头
// protected 表示只能在本类内或子类的类内访问protected属性
// ------
// class User{
//     public name:string;  
//     constructor(name){
//         this.name=name
//     }
// }
// let u = new User("hello")
// console.log(u.name)

// ------

// ------
// class User{
//     private _name:string;  
//     constructor(name){
//         this._name=name
//     }
// }
// let u = new User("hello")
// console.log(u._name)  // 报错，在类外不能访问
// 要想在类外访问私有属性，需要调用访问器
// class User{
//     private _name:string;  
//     constructor(name){
//         this._name=name
//     }
//     // 公开的访问器
//     public get myname(){
//         return this._name;
//     }
//     // 公开的修改器
//     public set myname(newname:string){
//         this._name=newname;
//     }
// }
// // let u = new User("hello")
// // console.log(u.myname)   // 调用访问器不需要加()   // hello
// let u = new User("hello")
// u.myname="world"
// console.log(u.myname)  // 调用修改器的写法  // world

// -------------------------  继承  和三个基类
// 父类又叫基类，如果不想让别人new，可以把这个类变成抽象类
// 抽象类不能new,只能继承，故抽象类没有构造器
// abstract class Animal{
//     public readonly name:string="wangcai";
//     protected age:number=10;  // 只能在子类中访问
//     private money:number=0;
// }
// class Dog extends Animal{
//     // 没有构造器constructor
//     // 在类内定义一个方法，可以在类外调用该方法来获取protected属性
//     public getAge(){
//         console.log(this.age)   // Dog中没有age，就会去父类中找
//     }
// }
// let d=new Dog();
// d.getAge();  // 10

// ------------------------- 继承
// class Animal{
//     name:string;
//     constructor(name:string){
//         this.name=name;
//     }
// }
// class Pig extends Animal{
//     age:number;
//     constructor(name,age){
//         // 派生类(子类)的构造函数必须包含 "super" 调用
//         super(name)   // 调用父类的构造器，并把name传过去
//         this.age=age;
//     }
// }
// let p=new Pig("cai",100);
// // Pig继承了Animal，就有了Animal中的属性
// console.log(p.name)  // cai
// console.log(p.age)   // 100

// -------------------------  抽象类
//不能new ,只能继承
// abstract class Animal {
//     name: string;
//     constructor(name){
//         this.name=name;
//     }
// }
// // let a=new Animal("cai");   // 抽象类不能new ,会报错
// class Pig extends Animal {
//     age: number;
//     constructor(name,age) {
//         super(name); // 调用父类的构造器
//         this.age=age;
//     }
// }
// let p = new Pig("cai",100);

// ------------------------- 静态属性
// class Animal{
//     // 类中声明的默认都是实例属性
//     public name:string;
//     constructor(name){
//         this.name=name;
//     }
// }
// let a=new Animal("cai")
// console.log(a.name)

// class Animal{
//     // 类中声明的默认都是实例属性
//     public name:string;
//     static age:number=99;   // 静态属性
//     constructor(name){
//         this.name=name;
//     }
// }
// a是对象，也是实例
// let a=new Animal("cai")   a的类型是Animal这个类
// // console.log(a.age)  // 报错的
// // 静态属性只能通过类名.xxx获取
// console.log(Animal.age)  // 99


// -------------------------静态方法

class Animal{
    // 类中声明的默认都是实例属性
    // 静态方法
    static f1(){
        console.log("静态方法只能通过类名.xxx调用")
    }
    // 实例方法
    say(){

    }
    // 实例属性
    name:string;
    // 实例方法
    static age:number;
}
Animal.f1();

// -------------------------
// -------------------------
// -------------------------
// -------------------------


export { };