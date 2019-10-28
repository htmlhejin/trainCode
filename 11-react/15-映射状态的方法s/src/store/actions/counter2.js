import * as types from  "../action-types"
function increment(payload){
    return {
        type:types.ADD2,
        payload
    }
}
function decrement(payload){
    return {
        type:types.SUB2,
        payload
    }
}

export default{increment,decrement}