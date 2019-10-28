import * as types from  "../action-types"
function increment(payload){
    return {
        type:types.ADD1,
        payload
    }
}
function decrement(payload){
    return {
        type:types.SUB1,
        payload
    }
}
// redux默认只能dispatch一个对象，不能派发函数和异步的promise等，如果需要处理，就需要使用中间件
// 异步action最终还是dispatch同步加的方法
// 派发一个函数，redux处理不了，需要使用中间件对dispatch进行增强
function incrementAfterThree(){
    return function(dispatch){
        setTimeout(()=>{
            dispatch(increment(100))
        },3000)
    }
}

// 返回一个promise
function promiseADD(payload){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({type:types.SUB1,payload})
        },6000)
    }) 
}

export default{increment,decrement,incrementAfterThree,promiseADD}