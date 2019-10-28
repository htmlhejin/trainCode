import React, { Component } from "react"   // 引入框架
import {Link} from "react-router-dom"
export default class List extends Component{
    render(){
        return (
            <div>
                <h1>商品列表页</h1>
                <ul>
                    <li><Link to="/detail/1">1号商品详情页面</Link></li>
                    <li><Link to="/detail/2">2号商品详情页面</Link></li>
                    <li><Link to="/detail/3">3号商品详情页面</Link></li>
                </ul>
            </div>
        )
    }
}