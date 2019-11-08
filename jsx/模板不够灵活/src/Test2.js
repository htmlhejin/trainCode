// 利用jsx解决代码不灵活的问题，即我们想要以什么样的标签展示内容，就以什么样的标签展示内容，即可以动态改变标签
// jsx写组件靠的就是render函数，render函数中有一个固定的参数h,
// h是一个函数，相当于createElement，创建一个元素
// h(),第一个参数表示什么样的标签，第二个参数表示元素的属性，第三个参数表示元素的内容
export default{
    render(h){
        h("h1",{
            on:{
                click(){
                    alert("hello")
                }
            }
        },world)
    }
}