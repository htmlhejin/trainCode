<template>
  <div class="home">
      <!-- //:router="true"  点击时可以跳转 -->
    <el-menu default-active="2" :router="true"> 
      <template v-for="m in menuList">
        <ReSubMenu :key="m.auth" v-if="m.children" :data="m"></ReSubMenu>
        <el-menu-item :key="m.auth" :index="m.path" v-else>{{m.name}}</el-menu-item>
      </template>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ReSubMenu from "./ReSubMenu.vue";
export default {
  name: "home",
  // 通过计算属性把menuList映射出来
  computed: {
    ...mapState(["menuList"])
  },
  components: {
    ReSubMenu
  }
};
</script>