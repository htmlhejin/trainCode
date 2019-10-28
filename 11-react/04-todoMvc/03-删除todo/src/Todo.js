import React,{Component} from "react"   // 引入框架
import PropTypes from "prop-types"


export default class Todo extends Component{
    render(){
        return(
            <li className="todo">
                <div className="view">
                    <input type="checkbox" checked={this.props.todo.completed}/>
                    <label htmlFor="">{this.props.todo.content}</label>
                    <button  onClick={()=>this.props.deleteTodo(this.props.todo)} className="destroy"></button>
                    <input type="text" ref="ipt" style={{display:'none'}} className="edit" />
                </div>
            </li>
        )
    }
   
}

Todo.propTypes={
    todo:PropTypes.object.isRequired,
    deleteTodo:PropTypes.func.isRequired
}
