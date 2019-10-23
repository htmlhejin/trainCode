<template>
  <div id="app">
    <!-- 使用router-link，通过点击实现路由匹配 -->
    <router-link to="/">home组件</router-link><br>
    <router-link to="/setting">设置页</router-link><br>
    <router-link to="/find">发现页</router-link><br>
    <!-- 存放路由匹配的组件, router-view ，在url后面输入find转到对应的find组件...-->
    <router-view ></router-view>   
  </div>
</template>

<script>
</script>

<style scoped>
.app{color:red}
</style>
