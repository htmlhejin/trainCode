import React,{Component} from "react"   // 引入框架
import Todo from "./Todo"
import PropTypes from "prop-types"


export default class TodoList extends Component{
    render(){
        return(
            <section className="main">
                <input type="checkbox" className="toggle-all"/>
                <ul className="todo-list" >
                    {this.props.todos.map((todo,index)=><Todo deleteTodo={this.props.deleteTodo} todo={todo} key={index}></Todo>)}
                </ul>
            </section>
        )
    }
}


TodoList.propTypes={
    todos:PropTypes.array.isRequired,
    deleteTodo:PropTypes.func.isRequired
}