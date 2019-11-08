// 也是一个组件

// 利用jsx解决代码不灵活的问题，即我们想要以什么样的标签展示内容，就以什么样的标签展示内容，即可以动态改变标签
// jsx写组件靠的就是render函数，render函数中有一个固定的参数h,
// h是一个函数，相当于createElement，创建一个元素
// h(),第一个参数表示创建什么样的标签，第二个参数表示元素的属性，第三个参数表示元素的内容
// 在render函数中要返回函数h的调用

// export default{
//     render(h){
//         return h("h1",{
//             on:{
//                 click(){
//                     alert("hello")
//                 }
//             },
//             attrs:{
//                 id:"box"    // <h1 id="box"><span>wangcai</span></h1>
//             }
//         },[h("span",{},"wangcai")]) // h1标签中放了一个span标签
//     }
// }


// jsx----js和标签混着写
// jsx中要想在html中写js代码，需要把代码放到{}中
// export default{
//     render(h){  // 函数是js  ，<h1><span>hello world~</span></h1>是标签
//         return <h1 on-Click={()=>alert("hello")}><span>hello world~</span></h1>
//     }
// }

// 相当于动态的渲染标签
export default{
    props:{
        n:{
            type:Number
        }
    },
    render(h){
        let flag="h"+this.n
        // {this.$slots.default}通过插槽接收使用组件时传递的内容
        return <flag>{this.$slots.default}</flag>
    }
}


