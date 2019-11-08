
let EventEmitter=require("events")
let e=new EventEmitter()

let f=function(){
    console.log("看报纸1")
}
e.on("看报纸",f)
e.on("看报纸",()=>{
    console.log("看报纸2")
})
// 取消订阅
e.off("看报纸",f)
e.emit("看报纸")
// 看报纸2