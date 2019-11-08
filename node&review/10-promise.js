// let p=new Promise((resolve,reject)=>{
//     // resolve("买包") //成功了会调用then中的第一个方法,把终值传递下去
//     reject("没钱了")    //失败了会调用then中的第二个方法，把拒因传递下去
// })
// p.then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)
// })
// 买包
// 没钱了

// 没有reject,但是抛出一个错误也是转到失败态
// let p=new Promise((resolve,reject)=>{
//     throw  new Error("没钱")
// })
// p.then(data=>{},err=>{
//     console.log(err)
// })
// Error: 没钱

// let p=new Promise((resolve,reject)=>{
//     resolve("买包")
//     return "hello"
// })
// p.then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)
// })
// 买包

// 上一个.then中的return值，无论是data中的还是err中的，都会返回到下一个.then中的data中
// let p=new Promise((resolve,reject)=>{
//     resolve("成功")  //promise中return的值会返回到下一个.then中
// }).then(data=>{ 
//     // console.log(data)   //成功
//     return data //.then中的返回值返回到下一个.then中的打一个函数
// },err=>{
//     console.log(err)
// }).then(data=>{
//     console.log(data)       //成功
// },err=>{
//     console.log(err)
// })

// let p=new Promise((resolve,reject)=>{
//     reject("失败")  
// }).then(data=>{ 
//     // console.log(data)   //成功
//     // return data //.then中的返回值返回到下一个.then中的打一个函数
// },err=>{
//     return err
// }).then(data=>{
//     console.log("------",data)     //------ 失败
// },err=>{
//     console.log("++++",err)
// })


// let p=new Promise((resolve,reject)=>{
//     throw new Error("失败了")
// }).then(data=>{ 

// },err=>{
//     return err
// }).then(data=>{
//     console.log("------",data)     //------ Error: 失败了
// },err=>{
//     console.log("++++",err)
// })

// let p=new Promise((resolve,reject)=>{
//         resolve("success")
// })
// p.then(data=>{
//     // console.log(data)
//     // 如果.then中返回的是一个Promise，将会作为下一个.then的Promise对象，下一个.then的值去这个promise中取
//     return new Promise((resolve,reject)=>{
//         // resolve("买包")
//         reject("没钱")
//     })
// },err=>{

// }).then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)
// })

let p=new Promise((resolve,reject)=>{
    resolve("success")
})
// .then的返回值与新的Promise对象是同一个（引用地址相同），会报循环引用的错误
// TypeError: Chaining cycle detected for promise #<Promise>
let p1=p.then(data=>{
    return p1   //返回了自己的promise对象，永远处于等待状态
})
p1.then(data=>{
    console.log(data)
})

