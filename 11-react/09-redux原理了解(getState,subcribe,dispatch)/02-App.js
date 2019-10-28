let appState = {
    title: { text: "标题", color: "red" },
    content: { text: "内容", color: "green" }
}

// 渲染标题和内容
function renderApp(appState) {
    renderTitle(appState.title)
    renderContent(appState.content)
}
//  渲染标题
function renderTitle(state) {
    let ele = document.getElementById("title")
    ele.style.color = state.color
    ele.innerHTML = state.text
}

//  渲染内容
function renderContent(state) {
    let ele = document.getElementById("content")
    ele.style.color = state.color
    ele.innerHTML = state.text
}
renderApp(appState)
// 这样不好，可以随意修改状态
// appState.title.color="gold"
// appState.content.text="hello world"
// renderApp(appState)

// 要想修改状态，需要派发一个动作
// 定义动作
const UPDATE_TITLE_COLOR = "UPDATE_TITLE_COLOR "
const UPDATE_TITLE_TEXT = "UPDATE_TITLE_TEXT "
const UPDATE_CONTENT_COLOR = "UPDATE_CONTENT_COLOR "
const UPDATE_CONTENT_TEXT = "UPDATE_CONTENT_TEXT "

// 用dispatch派发一个动作   派发一个action,action是一个对象，每一个action中必有一个type，action{type:"add",payload}
function dispatch(action) {
    switch (action.type) {
        case UPDATE_TITLE_COLOR:
            // 更新颜色，肯定要传过来一个颜色
            appState.title.color = action.payload
            break;
        case UPDATE_TITLE_TEXT:
            appState.title.text = action.payload
            break;
        case UPDATE_CONTENT_COLOR:
            appState.content.color = action.payload
            break;
        case UPDATE_CONTENT_TEXT:
            appState.content.text = action.payload
            break;
        default:
            break;
    }
}


setTimeout(() => {
    dispatch({ type: UPDATE_CONTENT_TEXT, payload: "hello react" });
    dispatch({ type: UPDATE_TITLE_COLOR, payload: "skyblue" });
    // 修改之后要重新渲染
    renderApp(appState)
}, 3000)
