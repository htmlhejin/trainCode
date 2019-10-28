import * as types from "../action-types"

export default function reducer(state={number:99},action){
    switch(action.type){
        case types.ADD:
            return {number:state.number+action.payload};
        case types.SUB:
            return {number:state.number-action.payload};
        default:
            return state;
    }
} 