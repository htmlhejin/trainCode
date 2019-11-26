// 上下文的方式传值    几乎不用
import React,{Component} from "react" 
// react必须引进来，虽然下面没有用到，但其实render函数中的语法，浏览器无法识别，引入React之后，通过React.createlement会创建元素里面是浏览器可以识别的语言
import ReactDOM from "react-dom"

class Counter extends Component{
    constructor(props){
        super(props) 
        this.state={
            number:99
        }
    }
    handleClick = ()=>{
        this.setState({number:this.state.number+1})
    }
    render(){
        return(
            <>
                <h1>父组件</h1>
                <p>{this.state.number}</p>
                <button onClick={this.handleClick}>+</button>
                <SubCounter number={this.state.number}></SubCounter>
            </>
        )
    }
}

class SubCounter extends Component{
    constructor(props){
        super(props)
        this.state={
            number:0
        }
    }
    // 获取的属性变成自己的state，并且可以修改状态
    // static getDerivedStateFromProps(nextProps,prevState){
    //     // console.log(nextProps)  // {number: 99}   
    //     // console.log(prevState)  // {number: 0} 还未定义初始状态
    //     // nextProps是父组件中的nextProps,prevState是自己组件中的prevState
    //     let {number} = nextProps
    //     // 变成自己的state，通过this.state.xxx就可以得到父组件中的数据
    //     // 第一个number表示子组件的状态，第二个我表示接受的数据
    //     return {number:number}
    // }
    static getDerivedStateFromProps(nextProps,prevState){
        let {number} = nextProps
        if(number%2===0){  // 接收的是偶数
            return{number:prevState.number+2}
        }else{
            return{number:prevState.number+1}
        }
    }
	// getSnapshotBeforeUpdate   
    render(){
        return(
            <>
                <p>子组件</p>
                {/* <p>{this.props.number}</p> */}
                <p>{this.state.number}</p>
            </>
        )
    }
}

ReactDOM.render(<Counter />, window.app)
