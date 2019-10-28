import React, { Component } from "react"
import store from "../store"
import * as types from "../store/action-types"
import bindActionCreators from "../redux/bindActionCreator"


// action creator 1
function increment(){
    return {
        type:types.ADD    
    }
}
// action creator 2
function decrement(){
    return {
        type:types.SUB 
    }
}
let actions={increment,decrement}
// 绑定之后的actioncreator
actions=bindActionCreators(actions,store.dispatch)

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state={
            number:store.getState().number
        }
    }
    componentDidMount(){
        // console.log(this.state.number)
        // subcribe仅仅是重新渲染render函数
        store.subcribe(()=>{
            this.setState({
                number:store.getState().number
            })
        })
    }
    componentWillUnmount(){
        this.unsubscribe();
    }

    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                {/* 这样写   代码较为啰嗦 */}
                {/* <button onClick={()=>store.dispatch(increment())}>+</button>
                <button onClick={()=>store.dispatch(decrement())}>-</button> */}

                {/* <button onClick={()=>actions.increment()}>+</button>
                <button onClick={()=>actions.decrement()}>-</button> */}
                {/* bindActionCreators简化代码 */}
                <button onClick={actions.increment}>+</button>
                <button onClick={actions.decrement}>-</button>
            </div>
        )
    }
}