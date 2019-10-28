import {createStore} from "../redux/index"
import reducer from "./reducers"

let store = createStore(reducer)
export default store;