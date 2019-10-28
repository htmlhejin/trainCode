import React,{Component} from "react"

class Show extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <h3>{this.props.counter}</h3>
            </div>
        )
    }
    

}

export default Show