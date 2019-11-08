// 通过关键字interface定义一个接口
// 接口可以当作比抽象类还抽象的东西
// interface Flying{
//     // 里面仅仅放方法的声明
//     say():void;
// }
//接口不是类，也不能new,只能让别的类实现

// ----------------
// 定义一个抽象类
abstract class Animal {
    name:string;
    jump(){
        console.log("jump...")
    }
}
// 定义接口
interface Flying{
    // 接口里面的方法都是抽象方法，里面仅仅是方法的声明
    fly():void;
}
interface Eating{
    eat():void;
}
// 定义一个类实现接口
class Bird extends Animal implements Flying,Eating {
    // 在继承的组件中实现方法
    fly(){
        console.log("fly...")
    }
    eat(){
        console.log("eat...")
    }
}
let b=new Bird();
b.jump();
b.fly();
b.eat();
// -----------------------------
// 抽象类中是抽象方法
// abstract  class Animal{
//     abstract jump():void;
// }
// // 如果继承了一个抽象类，抽象类中有抽象方法，那么就一定要实先这个抽象方法
// class Bird extends Animal {
//     jump(){
//         console.log('jump...')
//     }
// }
// let b=new Bird();
// b.jump();  // jump...

export {};