// ES5中的构造器   用function声明
// -----------------------普通的构造器
// function Animal(){
//     this.type="dog"  // this指向new构造器后创建的对象
// }
// let a = new Animal()
// console.log(a)  // Animal { type: 'dog' }
// console.log(a.type)  // dog
// new一个构造器创建出一个对象，那么构造器中的this就指向这个对象

// -----------------------构造器中的属性
// function Animal(name){
//     // name是实例属性，实例属性定义在构造器中
//     this.name=name
// }

// let a = new Animal;  // 如果不传参，()可以不写
// let a = new Animal('wangcai'); 
// console.log(a)  // Animal { name: 'wangcai' }
// console.log(a.hasOwnProperty('name'))  // true   name是实例属性，不是原型链上的属性
// ---------- 公有属性
// function Animal(){
    
// }
// // 公有属性都定义在原型上面
// Animal.prototype.say=function(){
//     console.log('say...')
// }
// let a = new Animal(); 
// // console.log(a.hasOwnProperty('say'))  // false
// a.say()  // say...
// new一个构造器时就可以得到构造器中的实例属性和公有属性

// ------------------------------------
function Person(name){
    this.name=name
}
// 公有属性，定义在原型上
Person.prototype.say=function(){
    console.log("say....")
}
let p = new Person("wangcai")
// 见10.html
// 每一个函数都有一个prototype属性，每一个对象都有一个__proto__属性，该属性又是一个对象，二者都指向构造器的原型
// console.log(p.__proto__==Person.prototype)  // true
// console.log(p.__proto__.hasOwnProperty('say'))  // true，说明say是定义在原型上
// console.log(p.__proto__.constructor)  // [Function: Person]  constructor指向构造器(创建这个对象的函数)
// 