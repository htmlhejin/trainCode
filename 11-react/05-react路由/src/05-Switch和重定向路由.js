import React, { Component } from "react"   // 引入框架
import PropTypes from "prop-types"   // 数据校验 
import { Route, Link,Redirect,Switch } from "react-router-dom"
import Home from "./Home"
import User from "./User"
import List from "./List"
import Detail from "./Detail"
import Error from "./404"


class App extends Component {
    render() {
        return (
            <div>
                app
                {/* Switch通常用来包裹Redirect和Route组件，里面不能有其他元素，用来只显示一个路由，匹配到一个路由，就不再往下继续匹配 */}
                <Switch>  
                    <Redirect from="/user" to="/list"></Redirect>
                    <Route path="/" exact component={Home}></Route>   
                    <Route path="/list" component={List}></Route>
                    <Route path="/user" component={User}></Route>
                    <Route path="/detail/:id" exact component={Detail}></Route>
                    {/* 没有写path表示都没有匹配到 */}
                    <Route component={Error}></Route>
                </Switch>
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