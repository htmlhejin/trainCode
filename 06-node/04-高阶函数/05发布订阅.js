// 先订阅再发布，订阅和发布之间没有关系

const fs=require("fs")
let content={}
// let content={name:"wangcai",age:10}
// console.log(Object.keys(content))   //[ 'name', 'age' ]

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

// 订阅
e.on(()=>{
    // console.log("订阅")
    if(Object.keys(content).length==2){
    // if(Object.keys(content).length==1){
        console.log("1",content)    // 1 { name: 'wangcai', age: 10 }
    }
})
// 发布
e.emit()    // 订阅

fs.readFile("name.txt","utf8",(err,data)=>{
    content['name']=data
    e.emit()
})
fs.readFile("age.txt","utf8",(err,data)=>{
    content['age']=data
    e.emit()
})
// 1 { age: '100', name: 'wangcai' }
// 1 { age: '100' }
