import React, { Component } from "react"
import actions from "../store/actions/counter1"
import { bindActionCreators } from "../redux"
import store from "../store"
import { connect } from "react-redux"
import * as types from "../store/action-types"

class Counter1 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)  // {number: 99, increment: ƒ, decrement: ƒ}
        console.log(actions)   // {increment: ƒ, decrement: ƒ}
        return (
            //     // 第一种、第二种、第三种映射对应的写法   第二种无效
            <div>
                <p>{this.props.number}</p>
                <button onClick={()=>actions.increment(10)}>+</button>
                <button onClick={()=>actions.decrement(10)}>-</button>
            </div>
        )
    }
}
// 把store中的状态映射到组件中
// 映射方法有很多种
// 第一种
// function mapStateToProps(state){
//     return {
//         number:state.counter1.number
//     }
// }
// // // 把store中的dispatch映射到组件中，因为状态改变时需要dispatch
// function mapDispatchToProps(dispatch){
//     // 返回一个绑定之后的actionCreator,dispatch时就可以简化代码
//     return bindActionCreators(actions,dispatch)
//     // mapDispatchToProps() in Connect(Counter1) must return a plain object
//     // return dispatch(actions)   //错误
// }

// 简化第一种
// let mapStateToProps=(state)=>({number:state.counter1.number})
// let mapDispatchToProps=(dispatch)=>bindActionCreators(actions,dispatch)
// ------------------------

// 第二种
function mapStateToProps(state) {
    return {
        number: state.counter1.number
    }
}
function mapDispatchToProps(dispatch) {
    // 返回actionCreators   是一个对象
    return {
        increment(payload) {
            return {
                type: types.ADD1,
                payload
            }
        },
        decrement(payload) {
            return {
                type: types.SUB1,
                payload
            }
        }
    }
}

// 第三种   只需四行代码
// let mapStateToProps=(state)=>({number:state.counter1.number})

// 第一种
// export default connect(mapStateToProps,mapDispatchToProps)(Counter1)
// 第二种
export default connect(mapStateToProps, mapDispatchToProps)(Counter1)
// 第三种
// export default connect(mapStateToProps,actions)(Counter1)
