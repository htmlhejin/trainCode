<template>
    <div class="container">
        <div class="every">
            <span class="item">用户名:</span>
            <input class="input" type="text" v-model="userInfo.username">
        </div>
        <div class="every">
            <span class="item">证件:</span>
            <input class="input" type="text" v-model="userInfo.idnumber">
        </div>
        <div class="every">
            <span class="item">电话:</span>
            <input class="input" type="text" v-model="userInfo.tpnumber">
        </div>
        <div class="every">
            <span class="item">积分:</span>
            <input class="input" type="text" v-model="userInfo.score">
        </div>
        <div class="erji"  @click="doAdd">
            <button class="btn">添加</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userInfo: {
                    username:"",
                    idnumber:"",
                    tpnumber:"",
                    score:""
                }
            }
        },
        methods: {
            doAdd() {
                this.$axios.post("http://localhost:3000/api/userlist/add",this.userInfo)
                .then(res=>{
                    // console.log(res.data)
                    this.$router.push(("/user/list"))
                })
            }
        }
    }
</script>

<style scoped>
*{margin:0;padding:0}
    .container{
        background-color: skyblue;
        width:60%;
        margin:10px auto
    }
    .container .every{
        padding:20px;
        display:flex;
    }
    .container .item{
        display:block;
        font-size: 18px;
        width:80px;
        padding-right: 15px;
    }
    .container .input{
        width:90%;
        height: 30px;
    }
    .container .erji{
        display:block;
        text-align:center;
        margin-bottom:16px;
    }
    .container .erji .btn{
        width: 90px;
        height:40px;
        background-color: gold;
        font-size: 16px;
        line-height: 40px;
        text-align:center;
        border-radius: 8px;
        border:transparent
    }
</style>