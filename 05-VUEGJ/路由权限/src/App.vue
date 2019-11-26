<template>
  <div id="app">
    <div class="navbar navbar-inverse">
      <ul class="container-fluid">
        <div class="navbar-header">
          <div class="navbar-brand">
            <a href>管理</a>
          </div>
        </div>
        <div class="ul">
          <ul class="navbar-nav nav">
            <li>
              <router-link :to="{name:'home'}">首页</router-link>
            </li>
            <li>
              <router-link :to="{name:'profile'}">个人中心</router-link>
            </li>
            <li>
              <!-- 使用名字跳转时会出现警告，所以用path -->
              <router-link :to="{path:'/user'}">用户</router-link>
            </li>
            <li>
              <router-link :to="{name:'login'}">登陆</router-link>
            </li>
          </ul>
        </div>
      </ul>
    </div>
    <div class="container">
      <router-view></router-view>
      <router-view name="name"></router-view>
      <router-view name="version"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style scoped>
.container-fluid{
  background-color: gray;
}
.navbar-nav nav li {
  display: flex;
  border:1px solid red;
}
</style>



