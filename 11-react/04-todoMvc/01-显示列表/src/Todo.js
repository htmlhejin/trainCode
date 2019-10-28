import React,{Component} from "react"   // 引入框架

export default class Todo extends Component{
    render(){
        return(
            <li className="todo">
                <input type="checkbox" checked={this.props.todo.completed}/>
                <label htmlFor="">{this.props.todo.content}</label>
                <button className="destroy"></button>
                <input type="text" ref="ipt" style={{display:'none'}} className="edit" />
            </li>
        )
    }
}