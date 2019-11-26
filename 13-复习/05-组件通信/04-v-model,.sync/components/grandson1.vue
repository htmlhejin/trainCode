<template>
    <div>
        <p>孙中的钱是{{value}}</p>
        <button @click="change2">修改钱</button>
    </div>
</template>


<script>
export default {
    props:{
        value:Number
    },
    methods:{
        change2:function(){
            window.console.log(".....")
            // v-model子给父传的话，只是传递了一个属性，事件并没有传递下来，孙改变父中(跨级)的事件时需要this.$parent.$emit
             this.$parent.$emit("input",3000)
        }
    }
}
</script>



