import React, { Component } from "react"   // 引入框架
import PropTypes from "prop-types"   // 数据校验 
import "./styles/todo-mvc.css"

import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import Footer from "./Footer"

class App extends Component {
    render() {
        return (
            <div>
                <AddTodo addTodo={this.addTodo.bind(this)}></AddTodo>
                <TodoList  allChecked={this.allChecked()} toggleAll={this.toggleAll.bind(this)} toggleTodo={this.toggleTodo.bind(this)} deleteTodo={this.deleteTodo.bind(this)} todos={this.filterTodos()}></TodoList>
                <Footer setVisibility={this.setVisibility.bind(this)} visibility={this.state.visibility} leftTodos={this.leftTodo()} ></Footer>
            </div>
        )
    }
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                { content: "AAA", completed: false },
                { content: "BBB", completed: true },
                { content: "CCC", completed: false },
            ],
            visibility: "all"
        }
    }
    // 添加todo
    addTodo(todo) {
        this.state.todos.push(todo)  // 添加
        this.setState({
            todos: this.state.todos // 更新状态
        })

    }
    // 删除todo
    deleteTodo(todo) {
        let index = this.state.todos.findIndex(t => t == todo)  // 得到要删除数据的索引
        this.state.todos.splice(index, 1)  // 从index开始，删除一个数据
        this.setState({
            todos: this.state.todos
        })
    }
    // 切换单个todo状态
    toggleTodo(todo) {
        let index = this.state.todos.findIndex(t => t == todo);   // 找到要切换的索引
        this.state.todos[index].completed = !this.state.todos[index].completed;
        this.setState({
            todos: this.state.todos
        })
    }
    // 批量切换todo状态
    toggleAll(done) {   // done表示true或false
        this.state.todos.forEach(todo => todo.completed = done)
        this.setState({
            todos: this.state.todos
        })
    }
    // 判断所有todo的completed
    allChecked() {
        let res = this.state.todos.every(function (todo) {
            return todo.completed == true
        })
        return res   // 返回true或false
        // return this.state.todos.every((todo)=>todo.completed)
    }
    // 剩余的item
    leftTodo() {
        return this.state.todos.filter(todo => todo.completed == false).length;
    }
    //  根据visibility筛选出某些todo
    filterTodos() {
        switch (this.state.visibility) {
            case "all":
                return this.state.todos;
            case "active":
                return this.state.todos.filter(todo=>!todo.completed);
            case "completed":
                return this.state.todos.filter(todo=>todo.completed);
             default:break;
        }
    }
    // 改变visibility的值
    setVisibility(flag){
        this.setState({
            visibility:flag
        })
    }
}

export default App