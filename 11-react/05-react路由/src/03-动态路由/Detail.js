import React,{Component} from "react"
export default class Detail extends Component{
    componentDidMount(){
        // console.log(this)  // Detail对象
        // console.log(this.props.match.params.id)   // 得到商品的id号
    }
    render(){
        return(
            <div>
                <h2>1号商品详情页面</h2>
                <p>{'发起ajax请求'+ this.props.match.params.id + '号商品'}</p>
            </div>
        )
    }
}