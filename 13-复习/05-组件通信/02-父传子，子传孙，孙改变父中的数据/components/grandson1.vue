<template>
    <div>
        <p>孙中的钱是{{money}}</p>
        <button @click="change2">修改钱</button>
    </div>
</template>

<script>
export default {
    props:{
        money:Number
    },
    methods:{
        change2(){
            // 孙触发父中的方法，然后父又触发子中的方法，通过两层触发，实现孙改变父中的数据
            // this.$emit("change1",300)
            // -------------------------
            // 还有一种孙改变父中的数据的方法，直接触发父仲的方法，子不需要传递方法
            // 这里的change是子中的方法，也就是父给子传递过来的方法
            this.$parent.$emit("change",3000)
        }
    },
    // mounted(){
    //     console.log(this.$parent)   // Son1组件实例  VueComponent{......}
    // }
}
</script>



