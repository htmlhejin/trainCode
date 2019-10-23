<template>
    <div class="addcounter">
        <p>我是addcounter组件:{{this.$store.state.counter}}</p>
        <button @click="addone">加1</button>
    </div>
</template>

<script>
export default {
    methods:{
        addone(){       //提交事件
            this.$store.state.counter++
        }
    }
}
</script>
