// setState有可能是异步的
import React, { Component } from "react"

export default class App extends Component {
    // ref传值
    // 第一种方式    ref="num1"   this.refs.num1.value接收   被废弃
    // add=()=>{
    //     let num1=this.refs.num1.value
    //     let num2=this.refs.num2.value
    //     console.log(typeof  num1)  // string
    //     let res = parseFloat(num1)+parseFloat(num2)
    //     this.refs.res.value=res
    // }
    // --------------------

    // 第二种方式  
    // add = () => {
    //     let num1 = this.num1.value
    //     let num2 = this.num2.value
    //     let r = parseFloat(num1) + parseFloat(num2)
    //     this.res.value = r
    // }
    // ---------------------
    // 第三种方式    创建一个ref对象   推荐使用
    constructor(props){
        super(props)
        // 给组件挂num1，num2，res
        this.num1=React.createRef()
        this.num2=React.createRef()
        this.res=React.createRef()
    }
    add=()=>{
        let num1=this.num1.current.value
        let num2=this.num2.current.value
        let r=parseFloat(num1) + parseFloat(num2)
        this.res.current.value=r
    }

    render() {
        return (
            <div>
                {/* 一 */}
                {/* <input type="text" ref="num1" />+
               <input type="text" ref="num2" />
               <button ref="res" onClick={this.add}>=</button>
               <input type="text" ref="res" /> */}
                {/* // -------------------- */}

                {/* 二 利用ref函数 获取dom元素  也被废弃 */}
                {/* <input type="text" ref={input => this.num1 = input} />+
                <input type="text" ref={input => this.num2 = input} />
                <button ref="res" onClick={this.add}>=</button>
                <input type="text" ref={input => this.res = input} /> */}

                {/* 三 */}
                <input type="text" ref={this.num1} />+
                <input type="text" ref={this.num2} />
                <button ref="res" onClick={this.add}>=</button>
                <input type="text" ref={this.res} />
            </div>
        )
    }
}
