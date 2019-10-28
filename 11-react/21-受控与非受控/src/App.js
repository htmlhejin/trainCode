// 受控与非受控   受react控制
import React, { Component } from "react"

export default class App extends Component {
    constructor(props){
        super(props)
        // 给组件挂num1，num2，res
        this.num1=React.createRef()
        this.num2=React.createRef()
        this.res=React.createRef()
        this.state={
            num1:10,
            num2:10
        }
    }
    // add=()=>{
    //     let res=parseFloat(this.num1.current.value)+parseFloat(this.num2.current.value)
    //     this.res.current.value=res
    // }
    // 两个输入框的值发生变化时都会触发这个，那么就需要通过一个值来区分date-name
    handleChange=(event)=>{
        // console.log(event)
        this.setState({
            [event.target.dataset.name]:parseFloat(event.target.value)
        })
    }
    render() {
        return (
            <div>
                {/* 表达一般是非受控的，可以随意输入，可以输字母，也可以输数字，我们把它变成受控的 */}
                <input type="text" ref={this.num1} data-name="num1" value={this.state.num1} onChange={this.handleChange}/>+
                <input type="text" ref={this.num2} data-name="num2" value={this.state.num2} onChange={this.handleChange}/>
                <button ref="res" onClick={this.add}>=</button>
                <input type="text" readOnly ref={this.res} value={this.state.num1+this.state.num2} />
            </div>
        )
    }
}
