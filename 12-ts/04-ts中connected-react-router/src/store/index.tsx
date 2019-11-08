import {createStore,applyMiddleware} from "redux"
import {routerMiddleware} from "connected-react-router"
import createRootReducer from "../store/reducer"
import {createHashHistory} from "history"

let history=createHashHistory()

export default function configureStore(){
    let store=createStore(
        createRootReducer(history),
        // preloadedState,
        applyMiddleware(routerMiddleware(history))
    )
    // let store = applyMiddleware(routerMiddleware(history))(createStore)(createRootReducer(history))
    return store;
}