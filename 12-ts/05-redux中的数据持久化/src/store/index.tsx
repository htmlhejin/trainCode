import { createStore } from "redux"
import reducers from "../store/reducer"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    storage
}
// 持久化之后的管理员
let persistedReducer = persistReducer(persistConfig, reducers)

let store = createStore(persistedReducer)
let persistor = persistStore(store)
// 把老的仓库和持久化之后的仓库返回
export default { store, persistor };