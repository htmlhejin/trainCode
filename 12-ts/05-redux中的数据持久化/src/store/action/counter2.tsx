import * as types from "../action-types"

export interface Increment{
    type:typeof types.INCREMENT2
}
export interface Decrement{
    type:typeof types.DECREMENT2
}

export function increment():Increment{
    return{
        type:types.INCREMENT2
    }
}
export function decrement():Decrement{
    return{
        type:types.DECREMENT2
    }
}

export type Action=Increment | Decrement