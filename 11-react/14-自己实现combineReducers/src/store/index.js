import {createStore} from "../redux/index"
import reducer from "./reducers"  // 此时reducer是合并之后的reducer

let store = createStore(reducer)
export default store;