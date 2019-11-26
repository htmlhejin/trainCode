<template>
    <div>
        <p>父组件</p>
        <Son1></Son1>
    </div>
</template>

<script>
import Son1 from "./son1"
export default {
    mounted(){
        // EventBus   事件总线
        // window.console.log(this.$bus.$on)   // 是一个函数
        // this.$bus.$on  订阅一个change事件
        this.$bus.$on("change",function(){  // 回调函数
            window.console.log("Parent----->  change...")
        }),
        this.$bus.$on("alert",function(){  // 回调函数
            window.console.log("Parent----->  alert...")
        })
    },
   components:{
       Son1
   }
}
</script>


