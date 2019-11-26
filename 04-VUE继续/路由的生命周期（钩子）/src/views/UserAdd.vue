<template>
    <div>
        <input type="text" v-model="username">
        <button @click="toList">去列表页面</button>
    </div>
</template>
<script>
export default {
    // name:"useradd",
    data(){
        return{
            username:''
        }
    },
    methods:{
        toList(){
            this.$router.push('/user/userlist')
        }
    },
    // 钩子函数
    beforeRouteLeave(to,from,next){
        console.log("beforeRouteLeave")
        if(this.username){
            let confirm=window.confirm("你确定要去列表页面吗?")
            if(confirm){
                next()
            }else{
                next()
            }
        }
    }
}
</script>