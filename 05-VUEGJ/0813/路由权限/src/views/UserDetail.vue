<template>
    <div>
         {{this.$route.query.id}}号用户 问号传递参数<br>
         {{this.$route.params.id}}号用户 通过路径传递参数
    </div>
</template>

<script>
export default {
}
</script>