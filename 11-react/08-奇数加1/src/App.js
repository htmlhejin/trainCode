import React, { Component } from "react"   // 引入框架
import PropTypes from "prop-types"   // 数据校验 
import { Route, Link,Redirect,Switch } from "react-router-dom"

import Count from "./containers/Counter"


class App extends Component {
    render() {
        return (
            <div>
               <Count></Count>
            </div>
        )
    }
    constructor(props) {
        super(props)
        this.state = {

        }
    }

}

export default App