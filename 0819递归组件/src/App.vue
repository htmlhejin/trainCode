<template>
  <div id="app">
    <Menu>
        <template v-for="menu in menuList">
          <MenuItem v-if="!menu.children" :key="menu.title">{{menu.title}}</MenuItem>
          <ReSubMenu v-else :key="menu.title" :data="menu"></ReSubMenu>
        </template>
    </Menu>




    <!-- <Menu>
      <SubMenu>
        <template #title>菜单1</template>
        <MenuItem>
          <SubMenu>
            <template #title>菜单1-1</template>
            <MenuItem>菜单1-1-1</MenuItem>
            <MenuItem>菜单1-1-2</MenuItem>
            <MenuItem>菜单1-1-3</MenuItem>
          </SubMenu>
        </MenuItem>
        <MenuItem>菜单1-2</MenuItem>
      </SubMenu>
      <SubMenu>
        <template #title>菜单2</template>
      </SubMenu>
      <SubMenu>
        <template #title>菜单3</template>
      </SubMenu>
    </Menu> -->
  </div>
</template>

<script>
import Menu from "_v/MenuComponent/Menu";
import SubMenu from "_v/MenuComponent/SubMenu";
import MenuItem from "_v/MenuComponent/MenuItem";
import ReSubMenu from "_v/MenuComponent/ReSubMenu";
export default {
  data() {
    return {
      menuList: [
        {
          title: "菜单1",
          children: [
            {
              title: "菜单1-1",
              children: [
                { title: "菜单1-1-1" },
                { title: "菜单1-1-2" },
                {
                  title: "菜单1-1-3",
                  children: [
                    { title: "菜单1-1-1" },
                    { title: "菜单1-1-2" },
                    {
                      title: "菜单1-1-3",
                      children: [
                        { title: "菜单1-1-1" },
                        { title: "菜单1-1-2" },
                        {
                          title: "菜单1-1-3",
                          children: [
                            { title: "菜单1-1-1" },
                            { title: "菜单1-1-2" },
                            { title: "菜单1-1-3" }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { title: "菜单1-2" },
            { title: "菜单1-3" }
          ]
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