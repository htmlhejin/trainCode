import React, { Component } from "react"   // 引入框架
import {Route,Link} from "react-router-dom"
import Login from "./Login"
import Reg from "./Reg"

export default class User extends Component{
    render(){
        return (
            <div>
                <ul>
                    <li><Link to="/user/reg">注册</Link></li>
                    <li><Link to="/user/login">登录</Link></li>
                </ul>
                {/* 嵌套路由 */}
                <Route path="/user/login" component={Login}></Route>
                <Route path="/user/reg" component={Reg}></Route>
            </div>
        )
    }
}