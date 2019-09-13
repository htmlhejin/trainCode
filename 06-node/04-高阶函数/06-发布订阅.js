let e={
    arr:[],
    on(fn){
        this.arr.push(fn)
    },
    emit(){
        this.arr.forEach(fn=>{
            fn()
        })
    }
}
e.on(()=>{
    console.log("订阅1")
})
e.on(()=>{
    console.log("订阅2")
})
e.on(()=>{
    console.log("订阅3")
})
e.emit()
// 订阅1
// 订阅2
// 订阅3