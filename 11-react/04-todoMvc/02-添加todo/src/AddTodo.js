import React from "react"
import PropTypes from "prop-types"

export default class AddTodo extends React.Component{
    render(){
        return(
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo" type="text" placeholder="What needs to be done ?" onKeyUp={this.handleKeyUp.bind(this)}/>
            </header>
        )
    }
    handleKeyUp(e){
        let content = e.target.value.trim()  //trim两边去除空格
        if(!content)  return ;
        if(e.keyCode===13){  // 按了回车键
            this.props.addTodo({content,completed:false})
            e.target.value=""   // 清空输入框中的内容
        }
    } 
}

AddTodo.propTypes={
    addTodo:PropTypes.func.isRequired
}