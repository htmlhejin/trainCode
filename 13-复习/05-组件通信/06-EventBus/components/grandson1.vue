<template>
    <div>
        grandson1
    </div>
</template>


<script>
export default {
    mounted(){
       this.$nextTick(()=>{
        //    可以触发上一级组件中订阅的方法，也可以隔级触发
            this.$bus.$emit("show"),   // 父中的方法 
            this.$bus.$emit("alert")   // 爷中的方法
       })
    }
}
</script>



