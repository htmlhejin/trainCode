import {combineReducers} from "redux"   //  把多个管理员合并成一个
import counter from "./counter"

const reducer =combineReducers({
    counter
})
export default reducer