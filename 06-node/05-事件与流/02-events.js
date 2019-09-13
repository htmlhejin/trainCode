
// let EventEmitter=require("events")

// 手写events模块
class EventEmitter{
    constructor(){
        this._events={}
    }
    on(eventName,callback){
        if(this._events[eventName]){   
            this._events[eventName].push(callback)  //每一个事件名对应的回调函数
        }else{
            this._events[eventName]=[callback]
        }
    }
    emit(eventName){
        this._events[eventName].forEach(ev=>{   //数组中对应很多callback，
            ev()
        })
    }
    off(eventName,callback){
        this._events[eventName]=this._events[eventName].filter(fn=>{
            // 要过滤掉我们取消订阅的事件，返回的是 不是要过滤的事件的回调，即没有取消的事件
            return fn != callback   //
        })
    }
}
let e = new EventEmitter()

let fun= function(){   //+++
console.log("看报纸1")
}
e.on("看报纸",fun)

// e.on("看报纸1",function(){  //---
//     console.log("看报纸1")
// })

e.on("看报纸",function(){
    console.log("看报纸2")
})

e.emit("看报纸")  

e.off("看报纸",fun)    //+++    看报纸1能取消，看报纸2能取消，

// e.off("看报纸1",function(){ //---
//     console.log("取消订阅") //这样取消不行
// })

e.emit("看报纸")  