let appState={
    title:{text:"标题",color:"red"},
    content:{text:"内容",color:"green"}
}

// 渲染标题和内容
function  renderApp(appState){
    renderTitle(appState.title)
    renderContent(appState.content)
}
//  渲染标题
function renderTitle(state){
    let ele=document.getElementById("title")
    ele.style.color=state.color
    ele.innerHTML=state.text
}

//  渲染内容
function renderContent(state){
    let ele=document.getElementById("content")
    ele.style.color=state.color
    ele.innerHTML=state.text
}
renderApp(appState)
// 这样不好，可以随意修改状态
appState.title.color="gold"
appState.content.text="hello world"
renderApp(appState)
