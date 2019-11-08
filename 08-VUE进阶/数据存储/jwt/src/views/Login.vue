<template>
        <div>
            <i-input v-model="username" type="text" placeholder="请输入用户名" />
            <i-button type="primary" @click="login()">登录</i-button>
        </div>
</template>

<script>
import {mapActions} from "vuex"
    export default {
        data(){
            return {
                username:""
            }
        },
        methods:{
           ...mapActions(['toLogin']),   // 得到actions
           login(){
            //    alert("...")
               this['toLogin'](this.username).
               then(data=>{
                   this.$router.push("/")
               },err=>{
                   this.$Message.error(err)
               })
           }
        }
    }
</script>