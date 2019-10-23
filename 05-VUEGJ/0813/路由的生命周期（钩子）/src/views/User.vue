<template>
  <div>
    <div class="col-md-3">
      <div class="nav nav-stacked">
        <div>
          <router-link :to="{name:'useradd'}">添加用户</router-link>
        </div>
        <div>
          <router-link :to="{name:'userlist'}">用户列表</router-link>
        </div>
      </div>
    </div>
    <div class="col-md-9">
        <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
</style>