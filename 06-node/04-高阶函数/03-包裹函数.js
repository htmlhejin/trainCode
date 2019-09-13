// 包裹函数：执行某个函数之前执行若干个函数，执行某个函数之后执行若干个函数
let f1=()=>{
    console.log("正在执行...")
}
// 把之前之后的若干个函数存储起来，放到数组中
let wrappers=[
    {
        // 之前的函数
        init(){
            console.log("hello1")
        },
         // 之后的函数
         close(){
            console.log("bye1")
        }
    }, 
    // {
    //     // 之前的函数
    //     init(){
    //         console.log("hello2")
    //     },
    //      // 之后的函数
    //      close(){
    //         console.log("bye2")
    //     }
    // }   
]
const work=(core,wrappers)=>{
    wrappers.forEach(wrap=>{
        wrap.init()
    })
    core()
    wrappers.forEach(wrap=>{
        wrap.close()
    })
}
work(f1,wrappers)
// 结果：hello1  正在执行...  bye1
// 结果：hello1  hello2  正在执行...  bye1  bye2