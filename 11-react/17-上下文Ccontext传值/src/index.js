// 上下文的方式传值    几乎不用
import React, { Component } from "react"
import ReactDOM from "react-dom"

// 创建上下文
let ColorContext = React.createContext()

class Wrapper extends Component {
    state = {
        color: "gold"
    }
    changeColor = (color) => {
        this.setState({
            // color:color
            color
        })
    }

    // react中通信方式，props,context
    // 通过上下文把内容从上向下传   创建一个上下文，在每个组件中定义一个静态属性，这个属性就是上下文,组件就可以通过this.conext.xxx获取状态和方法
    render() {
        // 上下文中存放了所有的状态
        let contextValue = { color: this.state.color, changeColor: this.changeColor }
        // console.log(contextValue)  // {color: "gold", changeColor: ƒ}
        return (
            <ColorContext.Provider value={contextValue}>
                <div style={{ border: `5px solid ${this.state.color}`, padding: "5px" }}>
                    <h1>Wrapper</h1>
                    <Header></Header>
                    <Main></Main>
                </div>
            </ColorContext.Provider>
        )
    }
}
class Header extends Component {
    static contextType = ColorContext;
    render() {
        return (
            <div style={{ border: `5px solid ${this.context.color}`, padding: "5px" }}>
                <h2>header</h2>
                <Title></Title>
            </div>
        )
    }
}
class Title extends Component {
    static contextType = ColorContext
    render() {
        console.log(this.context)
        return (
            <div style={{ border: `5px solid ${this.context.color}`, padding: "5px" }}>
                <h2>title</h2>
            </div>
        )
    }
}
// class Main extends Component {
//     static contextType=ColorContext
//     render() {
//         return (
// <div style={{ border: `5px solid ${this.context.color}`, padding: "5px" }}>
//     <h1>Main</h1>
//     <Content></Content>
// </div>
//         )
//     }
// }

// 函数组件   ColorContext.Consumer消费（获取）状态
function Main() {
    return (
        <ColorContext.Consumer>
            {
                value => (
                    <div style={{ border: `5px solid ${value.color}`, padding: "5px" }}>
                        <h1>Main</h1>
                        <Content></Content>
                    </div>
                )
            }
        </ColorContext.Consumer>
    )
}

class Content extends Component {
    static contextType = ColorContext;
    render() {
        return (
            <div style={{ border: `5px solid ${this.context.color}`, padding: "5px" }}>
                <h2>Content</h2>
                <button onClick={() => this.context.changeColor("red")}>变红</button>
                <button onClick={() => this.context.changeColor("blue")}>变蓝</button>
            </div>
        )
    }
}


ReactDOM.render(<Wrapper />, window.app)
