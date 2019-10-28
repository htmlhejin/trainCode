import React, { Component } from "react"

// 如果父组件中有子组件，需要先渲染完子组件(自组件的生命周期进行完毕)再渲染父组件
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 99
        }
    }
    add=()=>{
        this.setState({
            number:this.state.number+1
        })
    }
    UNSAFE_componentWillMount() {   // componentWillMount
        console.log("componentWillMount")
    }
    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.add}>+</button>
            </div>
        )
    }
    componentDidMount() {
        console.log("componentDidMount")
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate")
        if(nextState.number%2===0){
         return true   // 默认返回true,表示需要更新
        }else{
            return false
        }
    }
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps")
    }
    UNSAFE_componentWillUpdate() {  // componentWillUpdate
        console.log("componentWillUpdate")
    }
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
}
