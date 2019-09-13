// 模拟中间件的执行
let app={
    middlewares:[], //存放中间件中的函数
    use(fn){
        this.middlewares.push(fn)   //传过来一个，把它存到数组中，传一个，存一个
    }
}
app.use((next)=>{
    console.log(1)
})
app.use((next)=>{
    console.log(2)
})
app.use((next)=>{
    console.log(3)
})

定义一个函数执行中间件中的函数
function dispatch (index){
    // console.log(app.middlewares[index]) //[Function]
    let r = app.middlewares[index]
    r() //1
}
dispatch(0) //这样只能手动执行函数

