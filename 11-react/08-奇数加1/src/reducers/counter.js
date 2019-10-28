export default function counter (state=0,action){
    switch(action.type){
        case "INCREMENT":
            return state+1  // 传过来的是简单的数值
        case "DECREMENT":
            return state-1  // 传过来的是简单的数值
        default:
            return state
    }
}