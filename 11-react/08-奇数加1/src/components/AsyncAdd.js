import React,{Component} from "react"

class AsyncAdd extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
           <button onClick={this.props.incrementAsync}>异步+1</button>
        )
    }
    

}

export default AsyncAdd