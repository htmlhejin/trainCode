// -----------------------------------   typeof 
// function sum(val:string|number|boolean){
//     if(typeof val ==="string"){
//         return val.length;
//     }else if(typeof val==="number"){
//         return val+1;
//     }else{
//         return 0;
//     }
// }
// sum("hello");  
// sum(123);
// sum(true);


// ----------------------------------- instanceof   
// class  Animal {
//     name:string;
// }
// class  Dog extends Animal{
//     age:number;
// }
// function f(a:Animal){
//     if(a instanceof Dog){
//         console.log("a的实例是Dog")
//     }else{
//         console.log("a的实例是Animal")
//     }
// }
// // let d=new Animal();
// // f(d)  // a的实例是Animal

// let d=new Dog();
// f(d)   // a的实例是Dog


// -----------------------------------  null 的用法
// function f(val:string | null){
    // if(val==null){
    //     return "" ;
    // }
// 上面三行相当于下面这行代码
//     val=val || ""
//     function g(){
//         // console.log(val.trim())   // trim--->去除两边空格
//         // !.  表示忽略null
//         console.log(val.trim())   // trim--->去除两边空格
//     }
//     g()
//     console.log(val.length)   // 9
//     console.log(val.charAt(0)) // w    // charAt(i) 字符串在索引为i处的某个字符
// }
// // f("  he  ll  o  ")   // he  ll  o
// f("  world  ")  // 


// ----------------------------------- 联合类型
// interface PrimaryButton{
//     style:"primary";
//     text:"点击"
// }
// interface DangerButton{
//     style:"danger";
//     text:"警告"
// }
// type Button=PrimaryButton | DangerButton
// function f(b:Button){
//     if(b.style==="primary"){
//         console.log("b的类型是PrimaryButton")
//     }else{
//         console.log("b的类型是DangerButton")
//     }
// }
// f({style:"primary",text:"点击"})


// ----------------------------------- in 关键字
// in   判断一个属性是否在一个接口或类中   根据属性判断类型
// interface A{
//     name:string;
//     say():void    
// }
// interface B{
//     age:number;
//     jump():void    
// }
// function f(c:A | B){
//     if('name' in c){
//         console.log("c的类型是是A")
//     }else if('age' in c) {
//         console.log("c的类型是是B")
//     }
// }
// f({age:100,jump(){}})  // c的类型是B


// ----------------------------------- 自定义类型  
interface Dog{
    age:number
}
interface Pig{
    age:number
}
// x is Dog    x现在d   d是Dog  
// x is Dog  true 或者 false
// x.age == 2 true 或者 false
function isDog(x:Dog|Pig):x is Dog{
    console.log("is Dog")
    return x.age == 2;
}
// x:number  x:Dog
function getAnimal(x:Dog|Pig):string{
    // isDog(x) 结果是true或是false
    if(isDog(x)){
        return "dog..."
    }else{
        return "pig..."
    }
}
let d:Dog = {age:100}
console.log(getAnimal(d));


// -----------------------------------




export{};