import React,{Component} from "react"   // 引入框架
import PropTypes from "prop-types"


export default class Footer extends Component{
    render(){
        return(
            <footer className="footer">
                <span className="todo-count"><strong>{this.props.leftTodos}</strong> items left</span>
                <ul className="filters">
                    <li><a href="javascripte:;" onClick={()=>this.props.setVisibility("all")} className={this.props.visibility=="all" ? "selected" : ""} >All</a></li>
                    <li><a href="javascripte:;" onClick={()=>this.props.setVisibility("active")} className={this.props.visibility=="active" ? "selected" : ""}>Active</a></li>
                    <li><a href="javascripte:;" onClick={()=>this.props.setVisibility("completed")} className={this.props.visibility=="completed" ? "selected" : ""}>Completed</a></li>
                </ul>
                <button className="clear-completed">clear completed</button>
            </footer>
        )
    }
}

Footer.propTypes={
    leftTodos:PropTypes.number.isRequired,
    visibility:PropTypes.string.isRequired,
    setVisibility:PropTypes.func.isRequired
}