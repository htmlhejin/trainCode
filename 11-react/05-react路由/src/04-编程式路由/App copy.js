import React, { Component } from "react"   // 引入框架
import PropTypes from "prop-types"   // 数据校验 
import { Route, Link } from "react-router-dom"
import Home from "../Home"
import User from "../User"
import List from "../List"
import Detail from "../Detail"


class App extends Component {
    render() {
        return (
            <div>
                app
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                    </li>
                    <li>
                        <Link to="/list">列表页</Link>
                    </li>
                    <li>
                        <Link to="/user">用户页</Link>
                    </li>
                </ul>
                {/* exact精确匹配，访问/user时不会匹配到/ */}
                <Route path="/" exact component={Home}></Route>   
                <Route path="/list" component={List}></Route>
                <Route path="/user" component={User}></Route>
                <Route path="/detail/:id" exact component={Detail}></Route>
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