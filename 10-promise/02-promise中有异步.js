// Promise中可以写异步
let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("setTimeout")   //只有调用resolve或reject时执行then中的方法
        // resolve("买包")
        // reject("没钱了")
    },1000)
})
p.then(data=>{
    console.log(data)   //买包  1秒钟之后打印出买包
},err=>{
    console.log(err)    //没钱了  1秒钟之后打印出没钱了
})