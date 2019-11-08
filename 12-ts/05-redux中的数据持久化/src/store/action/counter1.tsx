import * as types from "../action-types"
import {push} from "connected-react-router"

export interface Increment{
    type:typeof types.INCREMENT1
}
export interface Decrement{
    type:typeof types.DECREMENT1
}

export function increment():Increment{
    return{
        type:types.INCREMENT1
    }
}
export function decrement():Decrement{
    return{
        type:types.DECREMENT1
    }
}

export function goCounter2(path:any){
    return push(path)
}

export type Action=Increment | Decrement