import React from "react"
import {connect} from "react-redux"
import counter from "../store/action/counter.js"
  // history才可以go,goback,goForward,push等

class Counter extends React.Component{
    render(){
        // console.log(this.props)
        return(
            <div>
                <p>{this.props.counter.number}</p>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
                <button onClick={()=>this.props.goto(this.props.history,"/")}>点击跳到home组件</button>
                {/* <button onClick={()=>this.props.goto("/")}>点击跳到home组件</button> */}
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps,counter)(Counter)