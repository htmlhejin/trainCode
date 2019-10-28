
// setState有可能是异步的
import React,{Component} from "react"

export default class App extends Component{
    // 状态可以单独定义在外面，如果有constructor,状态定义在constructor中
    state={number:99}

    handleClick(){
        // 当有多个setState时，最后一个会覆盖前面的，本案例中最终结果是加10后的结果
        this.setState({
            number:this.state.number+1
        })
        this.setState({
            number:this.state.number+1
        })
        this.setState({
            number:this.state.number+10
        })   // 最终结果是109
        console.log("...")

        // ------------------
        // 如果想在上一次的装态之后再去改变状态，可以如下这样写,函数中的第一个参数是prevState
        // 第一种写法
        // this.setState((prevState)=>({
        //     number:prevState.number+1
        // }))
        // this.setState((prevState)=>({
        //     number:prevState.number+5
        // }))
        // this.setState((prevState)=>({
        //     number:prevState.number+10
        // }))  // 最终结果是115

         // 第二种写法   嵌套
        //  this.setState({number:this.state.number+1},()=>{
        //      this.setState({number:this.state.number+10},()=>{
        //          this.setState({number:this.state.number+20})
        //      })
        //  })   // 最终结果是130
    }
    render(){
        return(
            <div>
                {/* button只当前组件App */}
                <p>{this.state.number}</p>   
                <button onClick={()=>this.handleClick()}>+</button>
            </div>
        )
    }
}
