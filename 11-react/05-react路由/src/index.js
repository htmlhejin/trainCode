// 入口文件
import React from "react"   // 引入框架
import ReactDOM from "react-dom"   //react-dom专门针对webapp
// 引入根组件
import App from "./App"
import {BrowserRouter as Router} from "react-router-dom"


// 把根组件渲染到页面中
ReactDOM.render(
    <Router>
        <App/>
    </Router>
    ,document.getElementById("app"))
