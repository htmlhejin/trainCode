import React,{Component} from "react"
import Show from "../components/Show"
import Add from "../components/Add"
import Sub from "../components/Sub"
import {connect} from "react-redux"   // connect:把redux中的状态传到react组件中
import {bindActionCreators} from "redux"   // 合并action
import * as actions from "../actions/counter"

class Counter extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        // console.log(this.props)  // {counter: 0, increment: ƒ, decrement: ƒ}
    }
    render() {
        return (
            <div>
                <Show counter={this.props.counter}></Show>
                <Add increment={this.props.increment}></Add>
                <Sub decrement={this.props.decrement}></Sub>
            </div>
        )
    }
}

// 把redux中的状态映射成组件的属性
function mapStateToProps(state){   // state是redux中的状态
    return {
        counter:state.counter
    }
}
// 把redux中的dispatch方法也映射到组件中,因为状态改变是需要dispatch
function mapDispatchToProps(dispatch){
    return bindActionCreators(actions,dispatch)
}

// 第一个括号中是两个自定义的映射方法，第二个是把装填和方法映射到那个组件
export default connect(mapStateToProps,mapDispatchToProps)(Counter)