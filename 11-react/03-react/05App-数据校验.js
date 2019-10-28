import React,{Component} from "react"   // 引入框架
import PropTypes666 from "prop-types"   // 数据校验  

// 无状态组件:
/*  
    1、function  不会被实例化，性能高
    2、没有state,数据源只能靠props,
    3、无状态组件中不能访问this
    4、没有生命周期(钩子函数)
    react建议尽可能使用无状态组件
*/
// const App = function (props){
//     return (
//         <div>{props.name}</div>   // wangcai
//         // <div>{this.props.name}</div>  // Cannot read property 'props' of undefined
//     )
// }
const App=props=>(<div>{props.name}</div>)

App.propTypes={
    name:PropTypes666.string   // name是字符串
}
// 默认值
App.defaultProps={
    name:"hello world "
}

export default App