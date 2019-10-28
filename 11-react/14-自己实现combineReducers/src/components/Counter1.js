import React, { Component } from "react"
// import actions from "../store/actions/counter1"
import { bindActionCreator } from "../redux"
import store from "../store"
import * as types from "../store/action-types"

function increment(payload) {
    return {
        type: types.ADD1,
        payload
    }
}
function decrement(payload) {
    return {
        type: types.SUB1,
        payload
    }
}

let actions = { increment, decrement }
actions = bindActionCreator(actions, store.dispatch)

export default class Counter1 extends Component {
    constructor(props) {
        super(props)
    }

    // 必须有这个钩子，否则状态改变之后不会被渲染
    componentDidMount() {
        this.unsubcribe = store.subcribe(() => {
            this.setState({
                number: store.getState().counter1.number
            })
        })
    }
    componentWillUnmount() {
        this.unsubcribe()
    }
    render() {
        // console.log(store.getState())  // {counter1: {…}, counter2: {…}}
        return (
            <div>
                <h2>Counter1</h2>
                <p>{store.getState().counter1.number}</p>
                <button onClick={() => actions.increment(10)}>+</button>
                <button onClick={()=>actions.decrement(10)}>-</button>
            </div>
        )
    }
}
// function mapStateToProps(state){
//     return {
//         number:state.counter1.number
//     }
// }
// function mapDispatchToProps(dispatch){
//     return bindActionCreators(actions,dispatch)
// }

// // // 映射有N中写法，其中一种
// export default connect(mapStateToProps,mapDispatchToProps)(Counter1)
