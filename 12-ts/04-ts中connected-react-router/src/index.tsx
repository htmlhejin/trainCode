import * as React from "react"
import {HashRouter as Router,Route,Link} from "react-router-dom"
import * as ReactDOM from "react-dom"
import Counter1 from "./components/Counter1"
import Counter2 from "./components/Counter2"
import { Provider } from "react-redux"
import configureStore from "./store"
import { ConnectedRouter } from "connected-react-router"
import { createHashHistory } from "history"

let store = configureStore()
let history = createHashHistory();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/counter1" component={Counter1}></Route>
            <Route path="/counter2" component={Counter2}></Route>
            <Counter1></Counter1>
            <hr />
            <Counter2></Counter2>
        </ConnectedRouter>

    </Provider>
    , document.getElementById("app")
)

