import React, { Component } from "react"

// 如果父组件中有子组件，需要先渲染完子组件(自组件的生命周期进行完毕)再渲染父组件
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 99
        }
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
