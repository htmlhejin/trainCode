import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import ReactDOM from "react-dom"
import Home from "./components/Home"
import Counter from "./components/Counter"
import {Provider} from "react-redux"
import configureStore,{history} from "./store"
import { ConnectedRouter } from 'connected-react-router'

let store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        {/*  使用与仓库连接之后的路由 */}
        <ConnectedRouter history={history}>   
            <Link to="/">首页</Link>
            <Link to="/counter">计数器</Link>
            <Route path="/" exact component={Home}></Route>
            <Route path="/counter"  component={Counter}></Route>
        </ConnectedRouter>
    </Provider>
    , document.getElementById("app")
)

