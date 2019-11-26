<template>
  <div id="app">
    <Menu>
      <!-- template是ubMenu -->
      <template v-for="menu in menulist">
        <MenuItem :key="menu.title" v-if="!menu.children">{{menu.title}}</MenuItem>
        <ReSubMenu v-else :key="menu.title" :data="menu"></ReSubMenu>
      </template>
    </Menu>

    <!-- 没有使用data中的数据 -->
    <!-- <Menu> -->
    <!-- <SubMenu> -->
    <!-- slot="title"  === #title -->
    <!-- <template slot="title">菜单1</template> -->
    <!-- <MenuItem>
          <SubMenu>
            <template slot="title">菜单1-1</template>
            <MenuItem>菜单1-1-1</MenuItem>
            <MenuItem>菜单1-1-2</MenuItem>
            <MenuItem>菜单1-1-3</MenuItem>
          </SubMenu>
    </MenuItem>-->
    <!-- <MenuItem>
          <SubMenu>
            <template slot="title">菜单1-2</template>
            <MenuItem>菜单1-2-1</MenuItem>
            <MenuItem>菜单1-2-2</MenuItem>
            <MenuItem>菜单1-2-3</MenuItem>
          </SubMenu>
    </MenuItem>-->
    <!-- </SubMenu> -->
    <!-- </Menu> -->
  </div>
</template>

<script>
import Menu from "./views/Menu";
import SubMenu from "./views/SubMenu";
import MenuItem from "./views/MenuItem";
import ReSubMenu from "./views/ReSubMenu";
export default {
  data() {
    return {
      menulist: [
        {
          title: "菜单1",
          children: [
            {
              title: "菜单1-1",
              children: [
                { title: "菜单1-1-1" },
                { title: "菜单1-1-2" },
                { title: "菜单1-1-3" }
              ]
            },
            {
              title: "菜单1-2",
              children: [
                { title: "菜单1-2-1" },
                { title: "菜单1-2-2" },
                { title: "菜单1-3-3" }
              ]
            }
          ],
        },
        {
          title: "菜单2"
        },
        {
          title: "菜单3"
        }
      ]
    };
  },
  components: {
    Menu,
    SubMenu,
    MenuItem,
    ReSubMenu
  }
};
</script>




