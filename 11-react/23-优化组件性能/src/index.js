
// 优化性能，减少不必要的渲染，如果组件的状态没有变化就不渲染
import React, { useState,useRef } from "react"
import ReactDOM from "react-dom"

// 函数式组件没有状态，使用hooks来解决，把无状态组件变成有状态组件,hooks中有八九个api,都是以use开头usexxx
function Counter() {
    // console.log(useState)  
    // useState(initialState) {
    //     var dispatcher = resolveDispatcher();
    //     return dispatcher.useState(initialState);
    //   }
    // number--状态  setNumber--修改状态的方法
    let [number,setNumber]=useState(0)

    return(
        <div>
            <p>{number}</p>
            <h2></h2>
            {/* 使用匿名函数调用  函数体中写如何修改状态 */}
            <button onClick={()=>setNumber(number+1)}>+</button>
        </div>
    )
}
ReactDOM.render(<Counter />, window.app)
