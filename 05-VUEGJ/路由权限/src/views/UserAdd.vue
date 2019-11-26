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
   
}
</script>