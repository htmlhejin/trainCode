import React,{Component} from "react"
import * as types from "../store/action-types"
import { bindActionCreators } from "../redux"
import store from "../store"

export default class Counter2 extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h2>Counter2</h2>
                <p>2</p>
                <button>+</button>
                <button>-</button>
            </div>
        )
    }
}
