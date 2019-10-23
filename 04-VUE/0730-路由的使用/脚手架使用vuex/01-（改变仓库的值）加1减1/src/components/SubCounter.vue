<template>
    <div class="subcounter">
        <p>我是subcounter组件:{{this.$store.state.counter}}</p>
        <button @click="subone">减1</button>
    </div>
</template>

<script>
export default {
    methods:{
        subone(){       //提交事件
            this.$store.state.counter--
        }
    }
}
</script>
