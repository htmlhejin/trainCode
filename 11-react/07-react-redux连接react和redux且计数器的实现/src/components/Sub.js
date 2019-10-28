import React,{Component} from "react"

class Sub extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <button onClick={this.props.decrement}>-</button>  
            </div>
        )
    }
}

export default Sub