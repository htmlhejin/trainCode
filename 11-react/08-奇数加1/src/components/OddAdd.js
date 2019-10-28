import React,{Component} from "react"
export default class OddAdd extends Component{
    render(){
        return (
            <button onClick={this.props.incrementIfOdd}>奇数加1</button>
        )
    }
}