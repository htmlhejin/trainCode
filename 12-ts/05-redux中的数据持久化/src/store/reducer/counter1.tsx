import * as types from "../action-types"
import Store from "../types"
import {Action} from "../action/counter1"

export default function (state: Store = { number: 1 }, action:Action) {
    switch (action.type) {
        case types.INCREMENT1:
            return { number: state.number + 1 }
        case types.DECREMENT1:
            return { number: state.number - 1 }
        default:
            return state;
    }
}
