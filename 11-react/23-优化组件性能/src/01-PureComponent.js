
// 优化性能，减少不必要的渲染，如果组件的状态没有变化就不渲染
import React, { Component, PureComponent } from "react"
import ReactDOM from "react-dom"

// 继承了Component，即使状态未发生改变，组件也会被重新渲染，这样不利于性能优化，而继承PureComponent，如果状态未发生改变，组件就不会被重新渲染，提高性能
// class Counter extends Component {
class Counter extends PureComponent {  
    constructor(props) {
        super(props)
        this.state = {
            number: 99
        }
    }
    handleClick = () => {
        this.setState({ number: 100 })
    }
    UNSAFE_componentWillMount() {
        console.log("componentWillMount")
    }
    componentDidMount() {
        console.log("componentDidMount")
    }
    UNSAFE_componentWillUpdate() {
        console.log("componentWillUpdate")
    }
    // 如果继承的是Component,也可以通过这个钩子函数提高性能   
    // Please extend React.Component if shouldComponentUpdate is used.
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.state.number == nextState.number) {
    //         return false   // 状态未改变，不重新渲染
    //     } else {
    //         return true
    //     }
    // }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    render() {
        return (
            <>
                <h1>父组件</h1>
                <p>{this.state.number}</p>
                <button onClick={this.handleClick}>点击</button>
                <child></child>
            </>
        )
    }

}
ReactDOM.render(<Counter />, window.app)
