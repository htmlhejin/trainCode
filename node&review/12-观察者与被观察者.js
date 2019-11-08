// 被观察者
class Subject{
   constructor(){
        this.arr=[], //保存观察者 
        this.state="开心"
   } 
//    定义一个方法查看观察者
   attach(o){
    this.arr.push(o)
   }
   setState(newState){
    this.state=newState
    // 状态改变，通知观察者
    this.arr.forEach(o=>o.updata(newState))
   }
}
// 观察者
class Observer{
    constructor(name){
        this.name=name
    }
    updata(newState){
        console.log(this.name,"小宝宝状态",newState)
    }
}
let o1=new Observer("我")
let o2=new Observer("我媳妇")
let s=new Subject("小宝宝")
s.attach(o1)
s.attach(o2)
// o1.updata()
s.setState("不开心")
// console.log(s.state)    //不开心