import React from "react"

export default class AddTodo extends React.Component{
    render(){
        return(
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo" type="text" placeholder="What needs to be done ?"/>
            </header>
        )
    }
}