import {createStore} from "redux"
import reducer from "../reducers/index"

// 初始化状态
const state={
    counter:0
}

// 创建仓库时直接把状态放在仓库中
const store = createStore(reducer,state);
export default store
