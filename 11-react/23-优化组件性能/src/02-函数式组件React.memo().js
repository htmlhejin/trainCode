
// 优化性能，减少不必要的渲染，如果组件的状态没有变化就不渲染
import React, { Component, PureComponent } from "react"
import ReactDOM from "react-dom"

// 继承了Component，即使状态未发生改变，组件也会被重新渲染，这样不利于性能优化，而继承PureComponent，如果状态未发生改变，组件就不会被重新渲染，提高性能
// class Counter extends Component {
class Counter extends PureComponent {  
    constructor(props) {
        super(props)
        this.state = {
            date:new Date()
        }
    }
    handleClick = () => {
        this.setState({ number: 100 })
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000)
    }
    render() {
        return (
            <>
                <h1>父组件</h1>
                <p>{this.state.date.toString()}</p>
                <Child></Child>
            </>
        )
    }

}

// 如果有子组件，父组件每渲染一次，子组件都会被渲染，即使子组件的状态未发生变化，这就造成了性能的浪费
// 如果是函数式组件，使用React.memo优化性能   React.memo只针对函数式组件
function SubCounter() {
    console.log("子组件被渲染")
    return(
        <div>子组件</div>
    )
}
// Child  第一个字母大写
let Child = React.memo(SubCounter)
ReactDOM.render(<Counter />, window.app)
