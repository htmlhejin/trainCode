import * as React from "react"
import {HashRouter as Router,Route,Link} from "react-router-dom"
import * as ReactDOM from "react-dom"
import Counter1 from "./components/Counter1"
import Counter2 from "./components/Counter2"
import { Provider } from "react-redux"
import obj from "./store"
import { createHashHistory } from "history"
import {PersistGate} from "redux-persist/integration/react"

let history = createHashHistory();

ReactDOM.render(
    <Provider store={obj.store}>
        <PersistGate persistor={obj.persistor}>
            <Counter1></Counter1>
            <hr />
            <Counter2></Counter2>
        </PersistGate>

    </Provider>
    , document.getElementById("app")
)

