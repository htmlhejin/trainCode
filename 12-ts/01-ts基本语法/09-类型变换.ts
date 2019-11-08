// ------------------------------  交叉类型
// interface Dog{
//     name:string;
//     run():void
// }
// interface Pig{
//     age:number;
//     eat():void
// }
// // type用来定义类型
// type Animal = Dog | Pig
// // 定义变量a是Animal,a中必须有Dog和Pig类型的所有属性
// let a:Animal={name:"hello",run(){},age:100,eat(){}}

// ------------------------------    先定义类型，再定义变量
// type  Animal={
//     name:string;
//     run():void
// }

// let p:Animal={
//     name:"wangcai",
//     run(){

//     }
// }


// ------------------------------  先定义变量，再定义类型

// let p={
//     name:"wangacai",
//     age:100
// }
// type Animal=typeof p

// let p1:Animal={
//     name:"hello",
//     age:10
// }

// ------------------------------  索引访问操作符
interface Demo{
    name:string;
    age:number;
    address:{location:string}
}

let p:Demo['address']={location:"beijing"}


// ------------------------------
// ------------------------------
// ------------------------------
// ------------------------------
// ------------------------------
// ------------------------------

export{};