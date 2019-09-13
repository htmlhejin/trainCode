// 观察者模式，分观察者和被观察者，（在观察者中存储被观察者），二者之间有关系

// 定义一个被观察者
class Subject{
    // 每个对象上有一个constructor方法，它指向创建这个对象的函数
    constructor(){
        // this指向Subject
        this.arr=[]     //存储观察者
        this.state="很开心"
    }
    // 定义attach方法存储观察者
    attach(o){
        this.arr.push(o)
    }
    // 改变小宝宝状态
    setState(newState){
        this.state=newState
        // 状态改变时通知观察者
        this.arr.forEach(o=>{
            o.update(newState)
        })
    }
}
// 定义一个被观察者
class Observer{
    // 初始化
    constructor(q){
        this.name=q
    }
    update(newState){
        console.log(this.name,"小宝宝状态",newState)
    }
}

// 创建一个被观察者
let s=new Subject("小宝宝")
// 创建观察者
let o1=new Observer("我")
let o2=new Observer("我媳妇")

// 调用attach方法，把观察者传递过去
s.attach(o1)
s.attach(o2)
s.setState("不开心")
// console.log(constructor.name)   //Object
// 我 小宝宝状态 不开心
// 我媳妇 小宝宝状态 不开心