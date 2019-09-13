// node基于事件驱动
// 导入一个模块，如果模块是类，首字母大写；如果只是一个模块，首字母小写，是一个对象，如path.join

// events模块基于发布订阅模式
// let EventEmitter=require("events")

// 手写events模块
class EventEmitter{
    constructor(){
        // 保存事件名以及回调函数
        this._events={}
    }
    on(eventName,callback){ //订阅时把回调函数存起来，发布时执行
        if(this._events[eventName]){    //如下面，"看报纸"对应多个事件（回调函数），事件保存在数组中
            // 每一个事件名对应的回调函数不同，保存时要对应事件名
            this._events[eventName].push(callback)  //每一个事件名对应一个事件
        }else{
            this._events[eventName]=[callback]
        }
    }
    emit(eventName){
        this._events[eventName].forEach(ev=>{   //fn=>{fn()}
            ev()
        })
    }
}
// 是类，使用时需要new
let e = new EventEmitter()
// new了一个类，e是事件对象
e.on("看报纸",function(){   //function(){}是回调函数，只有发布时才被调用
    console.log("看报纸1")
})
// 订阅
e.on("看报纸",function(){
    console.log("看报纸2")
})
e.on("吃饭",function(){
    console.log("吃饭")
})
//发布  可以发布多次
// e.emit("看报纸")    //看报纸1   看报纸2
// e.emit("看报纸")    //看报纸1   看报纸2
// e.emit("看报纸")      //看报纸1   看报纸2
e.emit("吃饭")  //吃饭