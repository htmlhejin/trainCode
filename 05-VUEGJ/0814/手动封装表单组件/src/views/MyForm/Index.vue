<template>
    <div>
        <h2>form组件</h2>
        <hr>
        <k-form :model="model" :rules="rules" ref="loginForm">
            <k-form-item label="用户名:" prop="username">
                <!--  v-model="model.username"不能实现双向数据绑定，因为k-input是一个组件。里面写的都是属性，属性需要传给这个组件 -->
                <k-input v-model="model.username" autocomplete=:off placeholder="请输入用户名"></k-input>
            </k-form-item>
            <k-form-item label="密码:" prop="password">
                <k-input type="password" v-model="model.password" autocomplete=:off placeholder="确认密码"></k-input>
            </k-form-item>
            <k-form-item>
                <button @click="submitForm('loginForm')">提交</button>
            </k-form-item>
        </k-form>
        {{model}}
    </div>
</template>

<script>
import KForm from "./Form"
import KFormItem from "./FormItem"
import KInput from "./Input"
import Notice from "./KNotice"
export default {
    data(){
        return {
            // label1:"用户名",
            // label2:"密码",
            // prop1:"username",
            // prop2:"password",
            model:{
                username:"wangcai",
                password:""
            },
            rules:{
                username:[
                    {required:true,message:"请输入用户名"}
                ],
                password:[
                    {required:true,message:"请输入密码"}
                ]
            }
        }
    },
    methods:{
        submitForm(form){
            // valid保存验证后的信息，通过或没通过
            // this.$refs[form]表示点击提交后得到form表单，.validate表示调用表单中的方法
            this.$refs[form].validate(valid=>{
                // 验证通过，create上面的弹出框，并传递数据
                const notice=this.$create(Notice,{
                    title:"hello",
                    message: valid ? "请求登陆" : "验证失败",
                    duration:1000
                })
                notice.show()
            })
        }
    },
    components:{
        KForm,KFormItem,KInput,Notice
    },
}
</script>