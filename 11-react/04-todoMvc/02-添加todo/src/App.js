import React,{Component} from "react"   // 引入框架
import PropTypes from "prop-types"   // 数据校验 
import "./styles/todo-mvc.css" 

import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import Footer from "./Footer"

class App extends Component{
    render(){
        return(
            <div>
                <AddTodo addTodo={this.addTodo.bind(this)}></AddTodo> 
                <TodoList todos={this.state.todos}></TodoList> 
                <Footer></Footer> 
            </div>
        )
    }
    constructor(props){
        super(props)
        this.state={
            todos:[
                {content:"AAA",completed:false},
                {content:"BBB",completed:true},
                {content:"CCC",completed:false},
            ]
        }
    }
    // 添加列表
    addTodo(todo){
        this.state.todos.push(todo)  // 添加
        this.setState({
            todos:this.state.todos // 更新状态
        })

    }
}

export default App