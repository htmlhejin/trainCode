// ---------------------------ES5中模拟ts中的抽象类
// 抽象类不能new
// function Animal(){
//     this.type="dog"
//     // 不能new
//     // console.log(new.target)  // [Function: Animal]
//     if(new.target===Animal){
//         throw new Error("这是一个抽象类，不能new")
//     }
// }
// let a = new Animal; //new一个类，类中的代码自动执行
// console.log(a.type)  // dog
// 总结---new.target，如果只是普通调用，返回值为空，如果是通过new进行操作，返回值是这个方法的引用
// function User(){
//     console.log(new.target)  // undefined
// }
// User()

// ---------------------------继承实例属性
// function Animal(){
//     this.type="animal"
// }
// function Dog(){
//     Animal.call(this)
// }
// let d = new Dog()
// console.log(d.type)  // animal
// this借用了Animal,this又指向d,所以d中就有了Animal中的属性

// -----------------------------继承公有属性
function Animal(){
    this.type="animal"
}
Animal.prototype.eat=function(){
    console.log("eat.....")
}
function Dog(){
    Animal.call(this)
}
// 方式一   prototype指向构造器Dog的原型
// Dog.prototype = Animal.prototype
// let d = new Dog() 
// // new构造器时就可以得到构造器中的所有属性
// d.eat()  // eat.....

// 方式二  __proto__也指向构造器Dog的原型
// Dog.prototype.__proto__=Animal.prototype
// let  d = new Dog() 
// d.eat()  // eat.....

// 方式三
// let  d = new Dog() 
// d=Animal.prototype
// d.eat()  // eat.....

// 方式四
// Object.setPrototypeOf(Dog.prototype,Animal.prototype)
// let  d = new Dog() 
// d.eat()  // eat.....

// 方式五
Dog.prototype = Object.create(Animal.prototype)
let  d = new Dog() 
d.eat()  // eat.....


// 总结--继承公有属性
// 1-->Dog.prototype = Animal.prototype
// 2-->Dog.prototype.__proto__=Animal.prototype
// 3-->先new出一个对象，把原型赋给这个对象
// 4-->setPrototypeOf,把Dog.prototype设置成Animal.prototype
// 5-->创建一个Animal.prototype赋给Dog.prototype


