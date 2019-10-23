<template>
    <div>
         {{this.$route.query.id}}号用户 问号传递参数<br>
         {{this.$route.params.id}}号用户 通过路径传递参数
    </div>
</template>

<script>
export default {
    // 只有在hash模式下，才能监控到路径的变化
    // 使用问号传参，如果路径变化，我们需要监控到
    // 监控路径有两种方式，watch不常用
    // watch:{
    //     $route(){   //监控route
    //         alert(1)
    //     }
    // }
    // 更正规的监控路径的方法
    beforeRouteUpdate(to,from,next){
        console.log("beforeRouteUpdate")
        alert(1)
        next()
    }
    // 除了可以在子组件中使用钩子，还可以在配置文件中使用，这时使用?传参，见route，
    // 更新一个组件时，先走配置文件中的钩子，再走组件中的钩子
}
</script>