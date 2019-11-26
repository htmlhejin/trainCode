<template>
    <div>
        <p>父组件</p>
        <Son1></Son1>
    </div>
</template>

<script>
import Son1 from "./son1"
export default {
    // 父组件提供数据
    provide:{
        name:"wagncai"
    },
   components:{
       Son1
   }
}
</script>


