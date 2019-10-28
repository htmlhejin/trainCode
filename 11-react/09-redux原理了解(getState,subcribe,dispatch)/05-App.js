
const UPDATE_TITLE_COLOR = "UPDATE_TITLE_COLOR "
const UPDATE_TITLE_TEXT = "UPDATE_TITLE_TEXT "
const UPDATE_CONTENT_COLOR = "UPDATE_CONTENT_COLOR "
const UPDATE_CONTENT_TEXT = "UPDATE_CONTENT_TEXT "

let initState = {
    title: { text: "标题", color: "red" },
    content: { text: "内容", color: "green" }
}
function createStore() {
    let state;
    let listeners=[];   // 观察者
    // 向外暴露一个getState方法，通过这个方法，得到状态
    function getState() {
        return state;
    }
    // 向外暴露一个dispatch方法，通过这个方法，派发action，修改状态
    function dispatch(action) {
        state = reducer(state,action)
        //状态改变，执行subcribe中的回调函数
        listeners.forEach(l=>l())  // 通知每一个观察者
    }
    // 状态改变时调用subcribe中的回调函数，listener是一个回调函数
    function subcribe(listener){
        listeners.push(listener)  // 得到所有的订阅者
    }
    // 初始化state
    dispatch({ type : '@@redux/INIT'});
    return {
        getState,
        dispatch,
        subcribe
    }
}
// 管理员    返回新的状态
function reducer(state=initState, action) {
    switch (action.type) {
        case UPDATE_TITLE_COLOR:
            // ...state把state展开，,后面表示对state进行修改
            return {...state,title:{...state.title,color:action.payload}};
        case UPDATE_TITLE_TEXT:
            return {...state,title:{...state.title,text:action.payload}};
        case UPDATE_CONTENT_COLOR:
            return {...state,content:{...state.content,color:action.payload}};
        case UPDATE_CONTENT_TEXT:
            return {...state,content:{...state.content,text:action.payload}};
        default:
           return state;
    }
}
function renderApp(appState) {
    renderTitle(appState.title)
    renderContent(appState.content)
}
function renderTitle(state) {
    let ele = document.getElementById("title")
    ele.style.color = state.color
    ele.innerHTML = state.text
}
function renderContent(state) {
    let ele = document.getElementById("content")
    ele.style.color = state.color
    ele.innerHTML = state.text
}
// 创建仓库时需要指定一个管理员
let store = createStore(reducer);
renderApp(store.getState())

setTimeout(() => {
    store.dispatch({ type: UPDATE_CONTENT_TEXT, payload: "hello react" });
    // 修改之后要重新渲染
    renderApp(store.getState())
}, 3000)
