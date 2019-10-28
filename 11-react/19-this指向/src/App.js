
// setState有可能是异步的
import React, { Component } from "react"

export default class App extends Component {
    // 状态可以单独定义在外面，如果有constructor,状态定义在constructor中
    state = { number: 99 }
    // 如果让this代表当前组件，有多种方式
    // 一、如果是普通函数，调用时手动绑定this
    // handleClick(){
    //     // 当有多个setState时，最后一个会覆盖前面的，本案例中最终结果是加10后的结果
    //     this.setState({
    //         number:this.state.number+1
    //     })
    //     // console.log(this)  // App {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
    // }
    // 二、如果是箭头函数，调用时无需绑定this,绑定也可以
    // handleClick=()=>{
    //     this.setState({
    //         number:this.state.number+1
    //     })
    // }
    // 三、普通函数，
    // handleClick(){
    //     // 当有多个setState时，最后一个会覆盖前面的，本案例中最终结果是加10后的结果
    //     this.setState({
    //         number:this.state.number+1
    //     })
    //     // console.log(this)  // App {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
    // }
    // 四、箭头函数  如果需要传参，调用时需要使用匿名函数
    // handleSubmit = (event) => {
    //     event.preventDefault()  // 阻止默认事件
    //     console.log(event)   // SyntheticEvent {dispatchConfig: {…}, _targetInst: FiberNode, nativeEvent: Event, type: "submit", target: form, …}
    // }

    handleSubmit(event){
        event.preventDefault()  
        console.log(event) 
    }
    render() {
        return (
            <div>
                {/* this指当前组件App */}
                {/* <p>{this.state.number}</p> */}
                {/* 一 */}
                {/* <button onClick={this.handleClick.bind(this)}>+</button> */}
                {/* 二 */}
                {/* <button onClick={this.handleClick}>+</button>
                <button onClick={this.handleClick.bind(this)}>+</button> */}
                {/* 三 */}
                {/* <button onClick={()=>this.handleClick()}>+</button>  */}
                <form action="" onSubmit={(event)=>this.handleSubmit(event)}>
                    用户名：<input type="text" />
                    密码：<input type="text" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
