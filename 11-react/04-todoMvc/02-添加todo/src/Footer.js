import React,{Component} from "react"   // 引入框架

export default class Footer extends Component{
    render(){
        return(
            <footer className="footer">
                <span className="todo-count"><strong>1</strong> items left</span>
                <ul className="filters">
                    <li><a href="" className="selected">All</a></li>
                    <li><a href="">Active</a></li>
                    <li><a href="">Completed</a></li>
                </ul>
                <button className="clear-completed">clear completed</button>
            </footer>
        )
    }
}