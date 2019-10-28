function createStore() {
    let state = {
        title: { text: "标题", color: "red" },
        content: { text: "内容", color: "green" }
    }
    // 向外暴露一个方法，通过这个方法，得到状态
    function getState() {
        return state;
    }
    // store.getState   说明函数返回的是一个对象
    return {
        getState
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
let store = createStore();
renderApp(store.getState())

const UPDATE_TITLE_COLOR = "UPDATE_TITLE_COLOR "
const UPDATE_TITLE_TEXT = "UPDATE_TITLE_TEXT "
const UPDATE_CONTENT_COLOR = "UPDATE_CONTENT_COLOR "
const UPDATE_CONTENT_TEXT = "UPDATE_CONTENT_TEXT "

function dispatch(action) {
    switch (action.type) {
        case UPDATE_TITLE_COLOR:
            // 更新颜色，肯定要传过来一个颜色
            store.getState().title.color = action.payload
            break;
        case UPDATE_TITLE_TEXT:
            store.getState().title.text = action.payload
            break;
        case UPDATE_CONTENT_COLOR:
            store.getState().content.color = action.payload
            break;
        case UPDATE_CONTENT_TEXT:
            store.getState().content.text = action.payload
            break;
        default:
            break;
    }
}



setTimeout(() => {
    dispatch({ type: UPDATE_CONTENT_TEXT, payload: "hello react" });
    // 修改之后要重新渲染
    renderApp(store.getState())
}, 3000)
