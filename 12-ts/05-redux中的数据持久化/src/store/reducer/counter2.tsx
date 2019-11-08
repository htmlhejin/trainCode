import * as types from "../action-types"
import Store from "../types"
import {Action} from "../action/counter2"

export default function (state: Store = { number: 2 }, action:Action) {
    switch (action.type) {
        case types.INCREMENT2:
            return { number: state.number + 1 }
        case types.DECREMENT2:
            return { number: state.number - 1 }
        default:
            return state;
    }
}
