import { Action } from "../action"
import * as types from "../action-types"
// import {INCREMENT,DECREMENT} from "../action-types"   ///如果这样引，下面的case直接写INCREMENT，DECREMENT
interface Store {
    number: number
}

export default function (state: Store = { number: 99 }, action: Action) {
    switch (action.type) {
        case types.INCREMENT:
            // ...state写不写都无所谓
            return { ...state, number: state.number + 1 }
        case types.DECREMENT:
            return { number: state.number - 1 }
        default:
            return state;
    }
}