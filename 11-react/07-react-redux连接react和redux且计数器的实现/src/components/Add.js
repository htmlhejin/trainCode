import React,{Component} from "react"

class Add extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <button onClick={this.props.increment}>+</button>  
            </div>
        )
    }
    

}

export default Add