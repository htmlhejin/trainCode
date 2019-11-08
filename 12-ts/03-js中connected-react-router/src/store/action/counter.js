import {push} from "connected-react-router"
function increment() {
    return {type:'INCREMENT'}
}
function decrement() {
    return {type:'DECREMENT'}
}

export default {
    increment,
    decrement,
    goto(history,path){
        history.push(path)  // 跳转之后报错，是因为这个actionCreator没有返回一个对象
        return {type:''}
    }
    // goto(path){
    //     return push(path)
    // }
}