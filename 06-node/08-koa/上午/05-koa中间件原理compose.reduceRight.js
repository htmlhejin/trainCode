// 中间件原理
let app={
    middlewares:[], //存放中间件中的函数
    use(fn){
        app.middlewares.push(fn)   //传过来一个，把它存到数组中，传一个，存一个
    }
}
app.use((next)=>{
    console.log(1)
    console.log(2)
    next()
})
app.use((next)=>{
    console.log(3)
    console.log(4)
    next()
})
app.use((next)=>{
    console.log(5)
    console.log(6)
})
// console.log(app.middlewares)    //[ [Function], [Function], [Function] ]

function compose(middlewares){
    // reduceRight方法表示从数组的末尾向前，将数据累加
    return middlewares.reduceRight((a,b)=>{
        // 首先5 6赋给a, 3 4赋给b, 二者之和赋给a,最后1 2赋给b
        // console.log(b)   // [Function]  [Function]
        // console.log(a)   // // [Function]  undefined
       return function(){
        //    console.log("ddd")   // ddd
        b(a)
       } 
    })  
}
// 最终打印出1 2 3 4 5 6
// compose规定返回一个函数
let fn=compose(app.middlewares)  //fn() 指return后面的函数
// 最终返回的是函数，所以可以调用
fn()



// let num=[1,2,3]
// num.reduceRight((a,b)=>{
//     console.log(b)  //2 1
// })

// let num=[1,2,3]
// num.reduceRight((a,b)=>{
//     console.log(a)  //3 undefined
//     console.log(b)   //2 1
//     // return a+b  //在后端黑窗口打印不出来
// })