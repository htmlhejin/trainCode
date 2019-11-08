import * as React from "react"
import * as ReactDOM from "react-dom"
import store from "./store"
import {Provider} from "react-redux"
import Counter from "./components/Counter"


ReactDOM.render(
    <Provider store={store}>
    <Counter></Counter>
    </Provider>
    ,document.getElementById('root')
)