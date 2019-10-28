// combineReducers  合并多个reducers
// 暴露出一个方法，返回合并之后的reducers，是一个对象，里面有很多reducer
export default function combineReducers (reducers){
    // reducer是函数
    // counter {n1:100}
    // counter {n2:200}
    // counter {n1:100,n2:200}
   return function(state={},action){
        let nextState={}
        for(let key in reducers){   // key是属性名，reducer是值
            nextState[key]=reducers[key](state[key],action)
        }
        return nextState;   // 返回合并之后的reducers，是一个对象，里面有很多reducer
   } 
}
