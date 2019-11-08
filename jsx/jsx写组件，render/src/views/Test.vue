<template>
    <div>
        <!-- 这种方式不够灵活 -->
        <!-- 如果没有插槽，App.vue中的内容将渲染不出来 -->
        <h1 v-if="n===1"><slot></slot></h1>
        <h2 v-else-if="n===2"><slot></slot></h2>
        <h3 v-else-if="n===3"><slot></slot></h3>
        <h4 v-else-if="n===4"><slot></slot></h4>
        <h5 v-else-if="n===5"><slot></slot></h5>
        <h6 v-else-if="n===6"><slot></slot></h6>
    </div>
</template>

<script>
export default {
    props:{
        n:{
            type:Number
        }
    }
}
</script>