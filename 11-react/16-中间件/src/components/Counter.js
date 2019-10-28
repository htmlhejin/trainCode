import React, { Component } from "react"
import store from "../store"
import * as types from "../store/action-types"
import bindActionCreators from "../redux/bindActionCreator"


// action creator 1
function increment(payload){
    return {
        type:types.ADD,
        payload    
    }
}
// action creator 2
function decrement(payload){
    return {
        type:types.SUB,
        payload 
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
        this.unsubscribe = store.subcribe(()=>{
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

                {/* bindActionCreators绑定之后 */}
                {/* <button onClick={()=>actions.increment()}>+</button>
                <button onClick={()=>actions.decrement()}>-</button> */}

                {/* bindActionCreators简化代码 */}
                {/* <button onClick={actions.increment}>+</button>
                <button onClick={actions.decrement}>-</button> */}

                {/* 带有负载的actonCreator */}
                <button onClick={()=>actions.increment(10)}>+</button>
                <button onClick={()=>actions.decrement(10)}>-</button>
            </div>
        )
    }
}