<template>
    <div>
        <span>{{msg}}</span>
        <br>
        <span>{{news}}</span>
        <br>
        <p>获取父组件中的值：{{parentVal}}</p>
    </div>
</template>
<script>
export default {
    name:'son',
   data(){
       return {
           msg:"this is son data",
           news:"anc"
       }
   },
   computed:{
       parentVal(){
        //    $parent的值是对象
           return this.$parent.message
       }
   }
}
</script>