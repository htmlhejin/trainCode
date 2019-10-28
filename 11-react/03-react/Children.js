import React,{Component} from "react"

// class有状态组件
export default class App extends Component{
    render(){
        return (
            <div>子组件
                <h1>{this.props.age}</h1>
                <button onClick={this.props.f1}>父传递方法</button>
                <p>{this.props.name}</p>
            </div>
        )
    }
}