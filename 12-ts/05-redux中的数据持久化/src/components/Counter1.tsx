import * as React from  "react"
import {connect} from "react-redux"
import Store from "../store/types"
import * as action from "../store/action/counter1"

export interface Props{
    number:number,
    increment:any,
    decrement:any,
    goCounter2:any
}

class Counter1 extends React.Component<Props>{
    render(){
        // console.log(this.props)  // {number: 1, increment: ƒ, decrement: ƒ}
        return(
            <>
            <p>{this.props.number}</p>
            <button onClick={this.props.increment}>+</button>
            <button onClick={this.props.decrement}>-</button>
            <br/>
            <button onClick={()=>this.props.goCounter2("/counter2")}>跳到counter2</button>
            </>
        )
    }
}
let mapStateToProps = function(state:any):Store{
    return state.counter1
}

export default connect(mapStateToProps,action)(Counter1)