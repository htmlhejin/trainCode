// 同步的action creator
export function increment(){
    return {  // 返回一个action
        type:"INCREMENT",
        // flag
    }
}
// 异步的action creator
export  function decrement(){
    return {
        type:"DECREMENT",
        // flag
    }
}
// 异步操作需要一个中间件   redux-thunk，如果使用了redux-thunk中间件，可以让action creator先不返回一个action对象，而是返回一个函数，在函数内部对异步的action增强
// 异步的action creator需要返回一个函数，函数中有两个参数dispatch,getState，函数中派发同步加1的方法
// redux是对仓库的增强
export function incrementAsync(){
    return function(dispatch,getState){
        setTimeout(()=>{
            // 调用同步的action
            dispatch(increment())
        },3000)
    }
}

// 基数加1
export  function incrementIfOdd(){
    return function(dispatch,getState){
        const {counter} = getState()
        if(counter%2){   // 奇数
            dispatch(increment())
        }
    }   
}