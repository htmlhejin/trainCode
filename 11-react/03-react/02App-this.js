import React,{Component} from "react"   // 引入框架

export default class App extends Component{
    constructor(props){
        super(props)
        this.state={   // this表示当前组件
            name:"wangcai",
            age:100
        }
        // 把this绑到f1上，让f1可以使用this  第一种方法
        // this.f1=this.f1.bind(this)
        // this.f2=this.f2.bind(this)
    }

    render(){
        return (
            <>
                {/* <h1>根组件</h1> */}
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
                {/* 状态改变靠事件，一定要注意this */}

                {/* 如果不绑定this */}
                {/* <button onClick={this.f1}>修改age</button> */}
                {/* 绑定this */}
                {/* <button onClick={this.f1.bind(this)}>修改age</button> */}
                 {/* 不绑定this且调用的函数中没有用到this,可以不绑定 */}
                 {/* <button onClick={this.f1}>修改age</button> */}

                {/* <button onClick={this.f1}>修改age</button>  // 第一种方法
                <button onClick={this.f2}>修改name</button> */}

                    {/* 第二种方法 手动绑定this */}
                <button onClick={this.f1.bind(this)}>修改age</button>  
                <button onClick={this.f2.bind(this)}>修改name</button>

            </>
        )
    }
    f1(){   // 函数中如果没有用到this，调用时可以不绑定
        // 如果不绑定this
        // console.log(this)   // undefined
        // console.log("hello")   // hello

        // 如果绑定this
        // console.log(this)   // App {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}

        // 通过seteState修改状态
        this.setState({
            // age: this.state.age++     //  ++在后，值是旧值  
            // age: ++this.state.age   //  ++在前，值是新值
            age:this.state.age+1
        })
    }
    f2(){
        this.setState({
            name:"xiaoqiang"
        })
    }

}