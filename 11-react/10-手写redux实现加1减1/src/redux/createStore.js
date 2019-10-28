export default function createStore(reducer){
    let state;
    let listeners=[];
    function dispatch(action){
        state = reducer(state,action);
        listeners.forEach(l=>l())
    }
    function subcribe(listener){
        listeners.push(listener)
        // 不再执行render，也就是不再渲染
        return function(){
            listeners=listeners.filter(item=>item != listener)
        }
    }
    function getState(){
        return state;
    }
    dispatch({type:'@@redux/INIT'})
    return {
        getState,
        dispatch,
        subcribe
    }
}