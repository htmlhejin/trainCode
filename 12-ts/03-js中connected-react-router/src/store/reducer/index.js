// connected-react-router  --- redux用来绑定路由  也是把仓库和路由连接，dispatch时实现路由切换
import { connectRouter } from 'connected-react-router'
import counter from "./counter"
import { combineReducers } from "redux"

// let reducer=combineReducers({
//     counter:counter
// })
// export default reducer;

// 导出一个函数
export default (history) => combineReducers({
    counter: counter,
    router:connectRouter(history)  // 路由是与仓库连接后的路由
})