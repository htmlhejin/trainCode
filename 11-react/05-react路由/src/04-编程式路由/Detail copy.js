import React,{Component} from "react"
import {createBrowserHistory} from "history"
// 生成history
let history = createBrowserHistory()

export default class Detail extends Component{
    componentDidMount(){
        // console.log(this)  // Detail对象
        // console.log(this.props.match.params.id)   // 得到商品的id号
    }
    render(){
        return(
            <div>
                <h2>1号商品详情页面</h2>
                <p>{'发起ajax请求'+ this.props.match.params.id + '号商品详情'}</p>
                
                {/* history.go(-1)返回上一级 */}
                {/* <button onClick={()=>history.go(-1)}>返回</button>    */}
                {/* history.goBack()  返回前一个路由 */}
                {/* <button onClick={()=>history.goBack()}>返回</button>    */}

                <button onClick={()=>history.goForward()}>返回</button>   
            </div>
        )
    }
}