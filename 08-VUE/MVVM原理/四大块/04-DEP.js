// 编译类,把模板中的指令存到文档碎片（内存）中，在文档碎片中编译完成之后在重新渲染到页面上

// 观察者
class Watcher{
    constructor(vm,expr,cb){
        this.vm=vm;
        this.expr=expr;
        this.cb=cb;  // 回调函数
        this.oldValue = this.get()   // 得到老的状态
    }
    // 获取状态
    get(){
        // console.log(this)  // Watcher实例
        // console.log(Dep)
        Dep.target=this;  // 观察者
        let value =CompilerUtil.getVal(this.vm,this.expr);
        // console.log(value)   // beida
        Dep.target=null;  //装填更新后再次获取时需要清除老的状态，如果不清除，再次获取时还是改变前的状态 
        return value;
    }

    // 状态改变时调用观察者的update方法
    update(){
        let newValue =CompilerUtil.getVal(this.vm,this.expr);
        if(newValue !=  this.oldValue){
            this.cb(newValue);
        }
    }
}

 // 存放观察者
 class Dep{
    constructor(){
        this.subs=[];  // 存放所有的观察者
    }
    // 添加观察者
    addSub(watcher){
        this.subs.push(watcher)
    }
    // 状态改变时通知观察者
    notify(){
        this.subs.forEach(sub=>{
            sub.update()
        })
    }
}


// 实现响应式的数据
class Observer{
    constructor(data){
        // console.log(data)   //{school:{}}  此时数据还不是响应式的
        this.observer((data))
    }
    // 监控数据，数据劫持
    observer(data){
        if(data && typeof data == 'object'){
            // 遍历数据，因为每一个都需要监控
            for(let key in data){
                // console.log(key)  // school name age
                // console.log(data[key])  //{name:"xx",age:"xx"}  beida  100
                this.defineReactive(data,key,data[key])
            }
        }
    }
    // 把数据变成响应式
    defineReactive(obj,key,value){
        // {name:"xx",age:"xx"}是一个对象，继续监控，继续遍历
        this.observer(value);
        let dep=new Dep();   // 得到所有的观察者
        Object.defineProperty(obj,key,{
            get(){
                Dep.target && dep.subs.push(Dep.target)  // 把观察者放到数组中
                return value;
            },
            set:(newVal)=>{
                // 两次的值不一样
                if(newVal != value){
                    this.observer(newVal)
                    value=newVal
                    dep.notify();   // 数据改变，通知观察者
                }
            }
        })
    }
}

class Compiler{
    constructor(el,vm){
        // 是元素节点，就得到元素，是文本节点，通过#app等得到对应的模板
        this.el =  this.isElementNode(el) ? el : document.querySelector(el)  // 
        // console.log(this.el)   
        this.vm = vm;
        // 得到模板，存到文档碎片中，
        let  fragment = this.node2fragment(this.el)
        // 在文档碎片中编译
        //  如v-model="school.name",要找到school.name，替换，然后重新给网页
        this.compile(fragment)
        // 编译之后重新渲染到页面上
        this.el.appendChild(fragment)
    }

    // 编译节点的方法
    compile(node){
        // console.log(node)   //#document-fragment
        // node.childNodes只能得到子节点，不能得孙节点
        // console.log(node.childNodes)  //  [text, input, text, div, text, div, text, ul, text]
        // console.log(typeof node.childNodes)  // object
        let childNodes = node.childNodes;
        // [...childNodes] 把伪数组转成真实的数组
        // console.log(Array.isArray( [...childNodes]))  // true
        [...childNodes].forEach(child=>{   // 找到每个子节点
            if(this.isElementNode(child)){   ///是元素节点
                // console.log(child)  // <input> <div></div> <div></div> <ul></ul> <li></li> <li></li>
                // 编译元素节点
                this.compileElement(child)
                // 一个节点中可能还包含其他节点，
                this.compile(child)    //继续编译，继续遍历
            }else{
                // 编译文本节点
                // console.log(child)  
                this.compileText(child)
            }
        })
    }

    // 判断是否是指令
    isDirective(name){
        // console.log(name.startsWith("v-"))  // 以v-打头   // false true
        return name.startsWith("v-")
    }

    // 编译元素节点
    compileElement(node){
        // node.attributes   // 某个节点的属性节点
        // 是元素节点，找到里面的属性节点(如v-model是属性节点)，从而得到属性值，替换
        let attributes = node.attributes;
        // console.log(attributes);  // 也是类数组 {0: type, 1: v-model, type: type, v-model: v-model, length: 2}
        [...attributes].forEach(attr=>{
            let {name,value:expr} = attr 
            // 判断name是否是指令，是指令把处理数据，替换
            if(this.isDirective(name)){
                // console.log(node)  // 包含指令的节点 <input type="text" v-model="school.name">
                // name.split("-")  //把字符型分割形成数组
                // console.log(name.split("-"))  // ["v", "model"]
                // let dir = name.split("-")[1]
                // console.log(dir)  // model
                let [,directive] = name.split("-");   //directive是指令名
                CompilerUtil[directive](node,expr,this.vm)  // 把指令，节点，vue实例传过去
            }

        })
    }

    // 编译文本节点
    compileText(node){
        // 插值表达式和普通文本以及回车属于文本节点
        // console.log(node)  // "{{school.name}}"  "{{school.age}}"  "1"  "2" 还有回车  typeof是object
        // node.textContent找到文本节点的内容
        // console.log(node.textContent)  // {{school.name}} {{school.age}} 1 2
        let content=node.textContent;
        let reg= /\{\{(.+?)\}\}/;  
        // console.log(reg)  //   /\{\{(.+?)\}\}/
        // console.log(reg.test(content))  // 两个true
        if(reg.test(content)){
            // 找到符合正则表达式的数据
            // console.log(content)  //  {{school.name}} 
            CompilerUtil["text"](node,content,this.vm)
        }
    }

     // 判断一个节点是否是元素节点
     isElementNode(node){
        // console.log(node.nodeType === 1);   // ===1表示是元素节点   //false  2表示属性节点，3表示文本节点
        return node.nodeType===1;   // 返回true或false
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

}

// 定义一个对象，里面包含很多属性节点的键v-model  v-for等
CompilerUtil = {
    // 得到v-mode后面的数据以及插值表达式的内容
    getVal(vm,expr){
        // console.log(vm.$data)   // {school:{name:"beida",age:100}} 
        // console.log(expr)  // school.name  --> [school,name]
        return expr.split(".").reduce((data,current)=>{
            // console.log(data)  // {school:{name:"beida",age:100}}  {name:"beida",age:100}
            // console.log(current)  // school   name
            // console.log(data[current])  // 第一次{name:"beida",age:100}  第二次beida
            return data[current];
        },vm.$data);
    },

    // 设置数据，  改变输入框中的内容
    setVal(vm,expr,value){   //输入内容时调用setVal，给node添加input事件
        // console.log(expr.split("."))   // ["school", "name"]
        expr.split(".").reduce((data,current,index,arr)=>{
            // 找到name，进行替换
            if(index == arr.length-1){   // 找到name 
               return data[current] = value   // 把设置的数据赋给data[current]
            }
            return data[current]
        },vm.$data)
    },

    // 处理v-model
    model(node,expr,vm){  // v-model
        // 得到value,需要给输入框绑定一个value属性，把值绑上去
        let fn =  this.updater["modelUpdater"];
        node.addEventListener('input',(e)=>{  // e是事件源
            // console.log(e.target.value)  // beida1
            this.setVal(vm,expr,e.target.value)
        })
        // 输入框添加一个观察者
        new Watcher(vm,expr,(newVal)=>{
            fn(node,newVal)
        })
        let value = this.getVal(vm,expr)
        fn(node,value);
    },

    // input数据改变时要得到新的内容
    getContentValue(vm,expr){
        return expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            // console.log(args)  //  ["{{school.age}}", "school.age", 0, "{{school.age}}"]
            return this.getVal(vm,args[1])   // 得到beida,把beida返回
        })
    },  

    // 处理v-text
    text(node,expr,vm){  // v-text   {{}}是v-text的语法糖
    // 得到值后更新视图，即文本框中的东西
    let fn = this.updater['textUpdater'];
    // console.log(node)  // "{{school.name}}"   "{{school.age}}"  typeof是object
    // console.log(expr)  // {{school.name}}     {{school.age}} 
    // console.log(vm)   //Vue{$el:"#app",data:{...}}
    // console.log(expr.replace(/\{\{(.+?)\}\}/g))  // undefined
        let content = expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{   // 把school.name替换成beida
            // console.log(args)  //    ["{{school.name}}", "school.name", 0, "{{school.name}}"]
            // let r=this.getVal(vm,args[1])
            // console.log(r)  // beida
            // console.log(args[1])  // school.name
            new Watcher(vm,args[1],()=>{
                fn(node,this.getContentValue(vm,expr))   // 调用fn更新{{}}中的数据
            })
            return this.getVal(vm,args[1])
        })
        fn(node,content);
    },
    html(){  // v-html

    },
    // 更新数据
    updater:{
        // 更新v-model绑定的数据
        modelUpdater(node,newVal){
            // 添加value属性
            node.value=newVal
        },
        textUpdater(node,r){
            // textContent得到文本节点的内容
            node.textContent=r
        },
        // 更新v-html绑定的数据
        htmlUpdater(){

        }
    }
}
// Vue类
class Vue{
    constructor(options){   // new时调用constructor函数
        // console.log(options)
        // 把配置项中的边界，数据挂在vue实例上
        this.$el=options.el;
        this.$data=options.data;
        let computed=options.computed;   //实现computed的数据绑定
        if(this.$el){   // $el存在的话，找到html模板，进行编译
            // 让vm代理data中的数据
            new Observer(this.$data);   // vue实例创建完成之后，new Observer自动监控数据
            for(let key in computed){
                Object.defineProperty(this.$data,key,{
                    get:()=>{
                        return computed[key].call(this);
                    },
                })
            }
            this.proxyVm(this.$data)
            new Compiler(this.$el,this)  // this指Vue实例
        }
    }
    // vm代理data
    proxyVm(data){
        for(let key in data){
            Object.defineProperty(this,key,{
                get(){
                    return data[key];
                }
            })
        }
    }
}
