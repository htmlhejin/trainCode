<template>
  <div>
    <SubMenu>
      <template #title>{{data.title}}</template>
      <template v-for="child in data.children">
        <!--  //菜单1，菜单2，菜单3 -->
        <ReSubMenu v-if="child.children" :data="child" :key="child.title"></ReSubMenu>
        <MenuItem v-else :key="child.title">{{child.title}}</MenuItem>
      </template>
    </SubMenu>
  </div>
</template>

<script>
import SubMenu from "./SubMenu";
import MenuItem from "./MenuItem";
export default {
  name: "ReSubMenu",
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    SubMenu,
    MenuItem
  }
};
</script>