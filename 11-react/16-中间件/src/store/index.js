import {createStore} from "../redux/index"
import reducer from "./reducers"  // 此时reducer是合并之后的reducer
import {applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"   // 处理异步
import {createLogger} from "redux-logger"  // 可以打印出修改前后的装填以及ation
// action SUB1 @ 21:52:52.730
//  prev state {counter1: {…}, counter2: {…}}
//  action     {type: "SUB1", payload: 10}
//  next state {counter1: {…}, counter2: {…}}
import promiseMiddle from "redux-promise"  //处理promise

let logger=createLogger({

})
let arr=[reduxThunk,logger,promiseMiddle]
let createStoreWithMiddleware = applyMiddleware(...arr)(createStore)

// 创建一个带有中间件的仓库
let store = createStoreWithMiddleware(reducer)
export default store;