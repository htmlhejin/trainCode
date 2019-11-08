<template>
    <div class="container">
        <div class="every">
            <div style="width:8%">轮播图:</div>
            <input type="file">
        </div>
        <div class="every">
            <span class="item">标题:</span>
            <input class="input" type="text" v-model="fromData.title">
        </div>
        <div class="every">
            <span class="item">顺序:</span>
            <input class="input" type="text" v-model="fromData.sort">
        </div>
        <div class="every">
            <span class="item">状态:</span>
            <input class="input" type="text" v-model="fromData.status">
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
                fromData: {
                    title: "",
                    sort: "",
                    status: "",
                    pic: ""
                }
            }
        },
        methods: {
            doAdd() {
                this.$axios.post("http://localhost:3000/api/focus/add", this.fromData)
                    .then(res => {
                        // console.log(res.data)
                        this.$router.push(("/slider/list"))
                    })
            }
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0
    }
    .container {
        background-color: skyblue;
        width: 60%;
        margin: 10px auto
    }
    .container .every {
        padding: 20px;
        display: flex;
    }
    .container .item {
        display: block;
        font-size: 18px;
        width: 80px;
        padding-right: 15px;
    }
    .container .input {
        width: 90%;
        height: 30px;
    }
    .container .erji {
        display: block;
        text-align: center;
        margin-bottom: 16px;
    }
    .container .erji .btn {
        width: 90px;
        height: 40px;
        background-color: gold;
        font-size: 16px;
        line-height: 40px;
        text-align: center;
        border-radius: 8px;
        border: transparent
    }
</style>