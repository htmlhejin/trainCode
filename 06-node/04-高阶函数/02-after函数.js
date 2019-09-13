// 调用一个函数之后去触发另一个函数，用after函数
const after=(times,fn)=>{
    return ()=>{
        if(--times==0){
            fn()
        }
    }
}
const f1=after(3,()=>{
    console.log("调用3次之后执行")
})
f1()
f1()
f1()    //调用3次之后执行       必须调用3次之后才能执行