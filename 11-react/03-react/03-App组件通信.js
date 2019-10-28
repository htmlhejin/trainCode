import React,{Component} from "react"   // 引入框架
import Children from "./Children"

export default class App extends Component{
    constructor(props){
        super(props)
        this.state={   // this表示当前组件
          name:"wangcai"
        }
    }
    f1(){
        alert("hello")
    }

    render(){
        return (
            <>
            {/* // 向子组件传递age,子组件通过this.props.属性名接收 */}
            <Children age="100" f1={this.f1} name={this.state.name}></Children>  
            </>
        )
    }
   

}