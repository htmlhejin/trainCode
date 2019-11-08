
// 手写发布订阅事件
let e={
    middlewares:[],
    on(thingName,event){
        this.middlewares.push(event)
    },
    emit(thingName){
        this.middlewares.forEach(event=>{
            event()
        })
    },
    off(thingName,event){
        this.middlewares=this.middlewares.filter(thingName=>{
            return thingName != event
        })
    }
}
let f=function(){
    console.log("看报纸1")
}
e.on("看报纸",f)
e.on("看报纸",()=>{
    console.log("看报纸2")
})
e.off("看报纸",f)
e.emit("看报纸")
// 看报纸2
