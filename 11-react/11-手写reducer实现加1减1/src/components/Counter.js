import React, { Component } from "react"
import store from "../store"
import * as types from "../store/action-types"


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
                <button onClick={()=>store.dispatch(increment())}>+</button>
                <button onClick={()=>store.dispatch(decrement())}>-</button>
            </div>
        )
    }
}