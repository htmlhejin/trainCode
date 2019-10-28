// 入口文件
import React from "react"   // 引入框架
import ReactDOM from "react-dom"   //react-dom专门针对webapp
// 引入根组件
import App from "./App"
// Provider让左右组件都可以使用redux中的状态
import {Provider} from "react-redux"
import store from "./store"


// 把根组件渲染到页面中
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById("app"))
