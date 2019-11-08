<template>
    <div>
        <div v-for="(item,index ) in articleList" :key="index" @click="emitIndex(index)">
            {{item}}
        </div>
    </div>
</template>
<script>
export default {
    name:'emitSon',
    props:['articleList'],
    methods:{
        emitIndex(index){    // $emit向父组件通信，先绑定一个自定义事件，语句执行时，向父组件传递数据，父组件通过v-on监听事件并接收参数
            this.$emit('onEmitIndex',index)
        }
    }
}
</script>