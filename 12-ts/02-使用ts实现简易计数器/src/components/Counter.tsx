import * as React from "react"
import {connect} from "react-redux"
import * as action from "../store/action"

// state的类型
export interface Store {
    number: number
}
// 组件类型   不指定类型的化，{this.props.number会报错
export interface Props{
    number:number;
    Increment:any
    Decrement:any
}


class Counter extends React.Component<Props>{
    render(){
        // console.log(this.props)  // {number: 99, Increment: ƒ, Decrement: ƒ}
        const {number,Increment,Decrement} = this.props
        // console.log(Increment())  // {type: "INCREMENT"}
        return (
            <div>
                <p>{number}</p>
                <button onClick={Increment}>+</button>
                <button onClick={Decrement}>-</button>
            </div>
        )
    }
}
function mapStateToProps(state:Store):Store{
    return state;
}

export default connect(mapStateToProps,action)(Counter);