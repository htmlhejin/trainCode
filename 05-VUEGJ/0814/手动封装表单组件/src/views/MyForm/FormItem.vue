<template>
  <div>
    <label  v-if="label">{{label}}</label>
        <!-- 输入框 -->
    <slot></slot>
    <p v-if="errorMessage">{{errorMessage}}</p>
  </div>
</template>

<script>
//安装第三方模块，用于验证输入框中的信息
import Schema from "async-validator"
export default {
    // 子接收父传过来的值
    inject:["form"],
    data(){
        return {
            errorMessage:""
        }
    },
    props:{
        label:{
            type:String,
            default:""
        },
        // 接收的是类型--文本框是text,还是password等
        prop:{
            type:String
        }
    },
    // 页面渲染完毕自动调用这个钩子
    mounted(){
        // 注册validate事件
        this.$on('validate',this.validate)
    },
    methods:{
        validate(){
            // 得到model和rules     model中有uername和password,props接收的也是uername和password
            const value=this.form.model[this.prop]
            const rules=this.form.rules[this.prop]

            //校验
            // 固定写法
            const desc={[this.prop]:rules}
            const schema=new Schema(desc)
            // 把校验结果返回                           ,后面是回调函数
            return schema.validate({[this.prop]:value},errors=>{
                if(errors){     //校验失败
                    this.errorMessage=errors[0].message
                }else{
                    this.errorMessage=''
                }
            })      //47到53行是一个promise,见form.vue30行
        }
    }
}
</script>