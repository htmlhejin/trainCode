// 函数
// 有函数声明  和  函数表达式
// ts中需要给参数和返回值加上类型
// -----------------------
// function say(name:string,age:number):string{
//     return name+age;
// }
// say("wangcai",100)
// console.log(say("wangcai",100))

// ------------------------ ts中基本用法
// 函数表达式
// let say=function(name:string):string{
//     return "hello"+name;
// }
// console.log(say("wangcai"));

// ------------------------函数的可选参数
// function say(name:string,age?:number):string{
//     return name+age;
// }
// // ?:表示可选，如果传值了就指定number类型，如果没传，就是undefined
// // console.log(say("wangcai",100));
// console.log(say("wangcai"));  // wangcaiundefined

// ------------------------函数的默认参数
// function say(name:string,age:number):string{
//     return name+age;
// }
// console.log(say("wangcai",100));  // 给函数传参

// function say(name:string="wangcai",age:number=100):string{
//     return name+age;
// }
// // console.log(say())  // wangcai100  没有传参就使用默认参数
// console.log(say("xiaoqiang",999)) // xiaoqiang999     // 如果传参，传递的参数覆盖默认的参数

// 带默认值的参数不必都放在必须参数的后面，但是传参时需要传入undefined来获取默认值
// function say(age:string="six",name:string):string{
//     return age+name;  
// }
// console.log(say(undefined,"hello"))  // sixhello

// ------------------------函数的剩余参数
// function sum(...numbers:Array<number>):void{
//     console.log(numbers)   // [ 1, 2, 3, 4, 5 ]
//     console.log(...numbers)   // 1 2 3 4 5
// }
// sum(1,2,3,4,5)

// function eng(...ibert:Array<string>):Array<string>{
function eng(...ibert:Array<string>):any{
    return ibert;
}
console.log(eng("a","b","c","d","e"));  // [ 'a', 'b', 'c', 'd', 'e' ]

// ------------------------  java中函数的重载
// java中函数的重载表示有多个函数，函数名一样，形参不一样，包括形参的个数不一样，形参的类型不一样
// 以下两个，函数的形参的个数不一样，这就叫函数的重载
// function say(name:string):void{}
// function say(name:string,age:number):void{}
        // ----
// 以下两个函数的形参的类型不一样
// function say(name:string):void{}
// function say(name:number):void{}

// say("wangcai")  // 该方法明显去调用function say(name:string):void{}函数
// say(100)  // 该方法明显去调用function say(name:number):void{}函数

// ------------------------ ts中函数的重载
// ts中,函数的重载仅仅是提供多个函数定义
// let obj={name:"wangcai",age:100}
// function attr(val:string):void;
// function attr(val:number):void;
// function attr(val:any){
//     if(typeof val==="string"){
//         obj.name=val;
//     }else if(typeof val==="number"){
//         obj.age=val;
//     }else{
        
//     }
// }
// // console.log(attr("zhangsan"))  // 没有返回值打印出undefined  // 调用 function attr(val:string):void;
// // attr("zhangsan")
// // console.log(obj)  // { name: 'zhangsan', age: 100 }

// attr(999)
// console.log(obj)   // { name: 'wangcai', age: 999 }


// ------------------------ 函数类型
// 定义函数的形参的类型以及返回值的类型   ()=>string  // string表示函数的返回值类型
// type mySay=(x:string,y:string)=>string  
// // say函数使用mySay类型
// let say:mySay=function(firstname,lastname){  // 上面定义了类型，此时形参就无需再定义
//     return firstname+""+lastname;
// }
// console.log(say("zhang","san"));  // zhangsan

// ------------------------
// ------------------------
// ------------------------
// ------------------------
// ------------------------




export{};