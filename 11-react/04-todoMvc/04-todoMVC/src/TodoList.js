import React,{Component} from "react"   // 引入框架
import Todo from "./Todo"
import PropTypes from "prop-types"


export default class TodoList extends Component{
    render(){
        return(
            <section className="main">
                {/* checked={this.props.todo.completed} */}
                <input type="checkbox"  className="toggle-all" checked={this.props.allChecked} onChange={(e)=>{this.props.toggleAll(e.target.checked)}} />
                <ul className="todo-list" >
                    {this.props.todos.map((todo,index)=>
                    <Todo toggleTodo={this.props.toggleTodo} deleteTodo={this.props.deleteTodo} todo={todo} key={index}></Todo>
                    )}
                </ul>
            </section>
        )
    }
}


TodoList.propTypes={
    todos:PropTypes.array.isRequired,
    deleteTodo:PropTypes.func.isRequired,
    toggleTodo:PropTypes.func.isRequired,
    toggleAll:PropTypes.func.isRequired,
    allChecked:PropTypes.func.isRequired,
}