import React,{Component} from "react"
import * as types from "../store/action-types"
import { bindActionCreator } from "../redux"
import store from "../store"


function increment(payload){
    return {
        type:types.ADD2,
        payload
    }
}
function decrement(payload){
    return {
        type:types.SUB2,
        payload
    }
}
let actions={increment,decrement}
actions=bindActionCreator(actions,store.dispatch)


export default class Counter2 extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        let unsubcribe = store.subcribe(()=>{
            this.setState({
                number:store.getState().counter2.number
            })
        })
    }
    componentWillUnmount(){
        this.unsubcribe()  // 不再渲染render函数
    }
    render(){
        // console.log(store.getState())  // {counter1: {…}, counter2: {…}}
        return(
            <div>
                <h2>Counter2</h2>
                <p>{store.getState().counter2.number}</p>
                <button onClick={()=>actions.increment(100)}>+</button>
                <button onClick={()=>actions.increment(100)}>-</button>
            </div>
        )
    }
}
