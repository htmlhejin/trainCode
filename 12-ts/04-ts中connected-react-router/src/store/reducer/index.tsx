import {combineReducers} from "redux"
import {connectRouter} from "connected-react-router"
import counter1 from "./counter1"
import counter2 from "./counter2"



let createRootReducer = (history:any)=>combineReducers({
    counter1,
    counter2,
    router:connectRouter(history)
})

export default createRootReducer;