// 入口文件

import React from "react"   // 引入框架
import ReactDOM from "react-dom"   //react-dom专门针对webapp
// 引入根组件
import App from "./App"

// 把根组件渲染到页面中
// ReactDOM.render(<App></App>,document.getElementById("app"))
// --------------------------------

// 渲染字符串
// ReactDOM.render("hello world",document.getElementById("app"))
// --------------------------------

// 渲染变量
// let ele="react"
// ReactDOM.render(ele,document.getElementById("app"))
// --------------------------------


// jsx中必须有一个根标签
// let ele=<div><span>react study</span></div>
// let ele=<><span>react study</span></>
// let ele=<React.Fragment><span>react study</span></React.Fragment>  // 两边是空标签
// let ele=<div><span>react study</span></div>
// ReactDOM.render(ele,document.getElementById("app"))
// --------------------------------


// jsx中严格区分大小写
// let ele=<Div><span>react study</span></div>   // 报错
// --------------------------------


// 所有标签必须关闭
// let ele=<div><img src=""/></div>
// --------------------------------


// 属性名必须加引号
// let ele=<div><h1 title="hello">hello react~</h1></div>
// --------------------------------


// jsx中可以放字面量，变量，运算符表达式,函数调用，jsx
// let ele=<div><h1>hello react </h1></div>   // 放字面量

// heml代码中放js代码，用{}
// let name='wangcai'
// let ele=<div><span>{name}</span></div>    // 放变量  

// let name='wangcai'
// let ele=<div><span>{name+ "hello"}</span></div>   
// let ele=<div><span>{1+1+1}</span></div>   // 放运算符表达式

// let ele=<div><span>{Math.random()}</span></div>    // 放函数调用

// let obj=<strong>hello</strong>
// let ele=<div><span>{obj}</span></div>  
// --------------------------------

// vue中使用v-if  v-for  react不同
// if  else
// let res=""
// // let isLogn=false
// let isLogn=true
// if(isLogn){
//     res="ok"
// }else{
//     res="不ok"
// }
// let ele=<div>{res}</div>

// let isLogin=true
// let loginOK=<div>ok</div>
// let loginerr=<div>不ok</div>
// let ele=<div>{isLogin ? loginOK : loginerr}</div>



// map
// let arr=['vue','react','node']
// let ele=<ul>{arr.map((item,idx)=><li key={idx}>{item}</li>)}</ul>
// arr.map((item,index)=>{
//     <li>{item}</li>
// })
// --------------------------------

// react中添加类,用className   
// vue中-----class   react中-----className
// vue中-----for   react中-----htmlFor
// let ele=<div className="box">hello</div>  // 控制台中element中还是会被渲染成class
// --------------------------------


// 注释也属于js代码，要放在{}中
// let ele=<div>{/* 注释也属于js代码 */}</div>
// --------------------------------


// 行内样式也属于js代码，要放在{}中，要把行内样式当作对象来写
let ele=<div style={{color:"red"}}>hello</div>


ReactDOM.render(ele,document.getElementById("app"))

