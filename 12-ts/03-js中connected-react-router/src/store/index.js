import reducer from "../store/reducer"
import {createBrowserHistory} from "history"
import {applyMiddleware,compose,createStore} from"redux"
import creatRootReducer from "./reducer"
import { routerMiddleware } from "connected-react-router"

export const history=createBrowserHistory()

export default function configureStore(preloadedState){
    // const store = createStore(
    //     creatRootReducer(history),   // 指定一个reducer,并传递参数
    //     preloadedState,
    //     compose(
    //         applyMiddleware(
    //             // dispatch的时候通过这个中间件实现路由跳转，因为redux只能dispatch对象，不能dispatch一个路由，所以需要使用中间件
    //             routerMiddleware(history)
    //         )
    //     )
    // )
    const store = applyMiddleware(routerMiddleware(history))(createStore)(creatRootReducer(history))
    return store;
}
// export default applyMiddleware(routerMiddleware(history))(createStore)(creatRootReducer(history))