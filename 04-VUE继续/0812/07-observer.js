let obj={
    name:"hello",
    age:{
        a:10
    }
}
function observer(obj){
    if( typeof obj=='object'){
        for(let key in obj){
            defineReactive(obj,key,obj[key])
        }
    }
}
function defineReactive(obj,key,value){
    // 如果value是一个对象要继续监控
    observer(value)
    Object.defineProperty(obj,key,{
        // 回调函数
        // 获取数据
        get(){
            console.log("get...")
            return value
        },
        // 设置数据
        set(val){
            observer(val)
            console.log("set...")
            value=val
            console.log(value)

        }
    })
}
observer(obj)
// obj.name    //get...
// obj.name="world"        //set...
// console.log(obj.name)   //get...  world
// obj.age=[1,2,3] //set...
// obj.age.push(4) //get   defineProperty对数组无效
// obj.age.length--     //get...
// console.log(obj.age.b)
obj.age.a=100


// let arr = ["push","slice","shift","unshift"]
// arr.forEach(method=>{
//     let old = Array.prototype[method];
//     Array.prototype[method] = function(value){
//         console.log("set...")
//         old.call(this,value)
//     }
// })
