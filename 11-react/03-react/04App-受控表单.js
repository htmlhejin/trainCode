import React,{Component} from "react"   // 引入框架
import Children from "./Children"

export default class App extends Component{
    constructor(props){
        super(props)
        this.state={   // this表示当前组件
          name:"wangcai"
        }
    }

    render(){
        return (
            <>
            {/* 默认情况下表单是非受控的 */}
            {/* <input type="text" value="hello"/> */}

            {/* 通过onChange事件，把非受控的变成受控的 */}
            {/* 输入框内容改变会触发onChange事件 */}
            <input type="text" value={this.state.name} onChange={this.f1.bind(this)}/>
            <p>{this.state.name}</p>
            </>
        )
    }

    f1(e){
        // console.log(e)
        // console.log(e.target.value)   // e.target.value是输入框中的内容
        this.setState({
            name:e.target.value
        })
    }
   

}