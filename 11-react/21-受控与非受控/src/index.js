// 上下文的方式传值    几乎不用
import React from "react" 
// react必须引进来，虽然下面没有用到，但其实render函数中的语法，浏览器无法识别，引入React之后，通过React.createlement会创建元素里面是浏览器可以识别的语言
import ReactDOM from "react-dom"
import App from "./App.js"

ReactDOM.render(<App />, window.app)
