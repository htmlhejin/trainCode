import {INCREMENT,DECREMENT} from "../action-types"

// export 是为了别的文件可能需要用到这个接口类型
export interface Increment{
    type:typeof INCREMENT
}

export interface Decrement{
    type:typeof DECREMENT
}

// 定义reducer时给action指定类型
export type Action=Increment | Decrement

// action是由actionCreator创建的
// ts中都要考虑参数以及返回值的类型
export function Increment():Increment{
    return {
        type:INCREMENT
    }
}
export function Decrement():Decrement{
    return {
        type:DECREMENT
    }
}