import * as React from  "react"
import {connect} from "react-redux"
import * as action from "../store/action/counter2"
import Store from "../store/types"

export interface Props{
    number:number,
    increment:any,
    decrement:any
}


class Counter2 extends React.Component<Props>{
    render(){
        return(
            <>
            <p>{this.props.number}</p>
            <button onClick={this.props.increment}>+</button>
            <button onClick={this.props.decrement}>-</button>
            </>
        )
    }
}

function mapStateToProps(state:any):Store{
    return state.counter2
}

export default connect(mapStateToProps,action)(Counter2)