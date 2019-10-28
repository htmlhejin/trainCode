// 根组件

import React,{Component} from "react"   // 引入框架

// react组件分两类  class(有状态组件)  function(无状态组件)
// 如果要使用类，需要继承Component
// export default class App extends React.Component{}
export default class App extends Component{
    // 组件中的状态定通过state实现，定义在construtor中,vue中的状态通过data实现，
    constructor(props){
        // super代指父类实例，不调用super得不到父类的this对象
        super(props)
        this.state={   // this表示当前组件
            name:"wangcai"
        }
    }

    // 类组件中靠render，而且必须要return
    render(){
        return (
            <>
                {/* <h1>根组件</h1> */}
                <h1>{this.state.name}</h1>
            </>
        )
    }
    

}