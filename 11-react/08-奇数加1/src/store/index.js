import {createStore,applyMiddleware} from "redux"
import reducer from "../reducers/index"
// 引入中间件,处理异步的action
import thunkMiddleware from "redux-thunk"
// 创建一个带有中间件的仓库
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)


// 初始化状态
const state={
    counter:0
}

// 创建仓库时直接把状态放在仓库中
const store = createStoreWithMiddleware(reducer,state);
export default store
