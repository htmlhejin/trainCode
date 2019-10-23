<template>
  <div class="homt">
    <el-menu default-active="2" :router="true">
      <template v-for="menu in menuList">
        <ReSubMenu :key="menu.auth" :data="menu" v-if="menu.children"></ReSubMenu>
        <el-menu-item :key="menu.auth" v-else :index="menu.path">{{menu.name}}</el-menu-item>
      </template>
    </el-menu>
  </div>

  <!-- <el-menu default-active="2" :router="true"> -->
  <!-- <el-submenu index="1">
      <template slot="title">导航1</template>
      <el-submenu index="1-1">
        <template slot="title">选项1-1</template>
        <el-menu-item index="1-1-1">导航1-1</el-menu-item>
        <el-menu-item index="1-1-2">导航1-2</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">导航2</el-menu-item>
  <el-menu-item index="3">导航3</el-menu-item>-->
  <!-- </el-menu> -->
  <!-- <router-view></router-view> -->
</template>

<script>
import ReSubMenu from "./ReSubMenu";
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(["menuList"])
  },
  components: {
    ReSubMenu
  }
};
</script>