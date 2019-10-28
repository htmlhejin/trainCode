import {createStore} from "./redux"  // 后面不写默认是index.js
let show = document.getElementById("show")
let addBtn = document.getElementById("addBtn")
let subBtn = document.getElementById("subBtn")

const ADD="ADD";  //大写一般默认是action
const SUB="SUB";

function reducer(state={number:99},action){
    switch(action.type){
        case ADD:
            return {number:state.number+1}
        case SUB:
            return {number:state.number-1}
        default:
            return state;
    }
}

let store = createStore(reducer)

function render(){
    show.innerHTML=store.getState().number
}
render()
// 订阅之后不再执行render函数
let unsubcribe = store.subcribe(render)

addBtn.addEventListener('click',()=>{
    store.dispatch({type:ADD})
    // unsubcribe()
})

subBtn.addEventListener('click',()=>{
    store.dispatch({type:SUB})
})



