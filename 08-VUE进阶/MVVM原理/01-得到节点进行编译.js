// 编译类,把模板中的指令存到文档碎片（内存）中，在文档碎片中编译完成之后在重新渲染到页面上
class Compiler{
    constructor(el,vm){
        // 是元素节点，就得到元素，是文本节点，通过#app等得到对应的模板
        this.el =  this.isElementNode(el) ? el : document.querySelector(el)  // 
        // console.log(this.el)   
        // 得到模板，存到文档碎片中，
        this.node2fragment(this.el)
        // 在文档碎片中编译
        
        // 编译之后重新渲染到页面上
        this.el.appendChild(fragment)
    }

    // 把节点存到文档碎片中的方法
    node2fragment(node){
        // 创建文档碎片
        let fragment = document.createDocumentFragment()
        let firstChild;
        // 模板中可能有很多指令,一条一条的存放
        while(firstChild=node.firstChild){
            fragment.appendChild(firstChild)  // 每找到第一个就存到文档碎片中
        }
        // 把文档碎片返回，里面就已经有了原模板中的若干指令
        return fragment
    }

    // 判断一个节点是否是元素节点
    isElementNode(node){
        // console.log(node.nodeType === 1);   // ===1表示是元素节点   //false  2表示属性节点，3表示文本节点
        return node.nodeType===1;
    }
}


// Vue类
class Vue{
    constructor(options){   // new时调用constructor函数
        // console.log(options)
        // 把配置项中的边界，数据挂在vue实例上
        this.$el=options.el;
        this.$data=options.data;
        if(this.$el){   // $el存在的话，找到html模板，进行编译
            new Compiler(this.$el,this)  // this指Vue实例
        }
    }
}
