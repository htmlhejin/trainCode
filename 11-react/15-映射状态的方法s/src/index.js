import React from "react"
import ReactDOM from "react-dom"
import Counter1 from "./components/Counter1"
import Counter2 from "./components/Counter2"
import { Provider } from "react-redux"
import store from "./store"

ReactDOM.render(
    // Provider把要渲染的组件包起来，并且提供store，使每个组件都可以使用store中的状态(映射)
    <Provider store={store}>
        <Counter1></Counter1>
        <br />
        <Counter2></Counter2>
    </Provider>
    , window.app)
