<template>
  <el-row class="menu_page">
    <el-col>
      <el-menu
        mode="vertical"
        background-color="#eef1f6"
        text-color="#79616a"
        active-text-color="#79616a"
        class="el-menu-vertical-demo"
      >
        <template v-for="item in items">
          <el-submenu
            v-if="item.children"
            :index="item.path"
            :key="item.path"
          >
            <template slot="title">
              <i :class="'fa fa-margin '+item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </template>
            <router-link
              v-for="(citem,cindex) in item.children"
              :to="citem.path"
              :key="cindex"
            >
              <el-menu-item :index='citem.path'>
                <span slot="title">{{citem.name}}</span>
              </el-menu-item>
            </router-link>
          </el-submenu>
        </template>
</el-menu>
</el-col>
</el-row>
</template>
<script>
export default {
  name: "leftmenu",
  data() {
    return {
      items: [
        {
          icon: "user",
          name: "用户管理",
          path: "/user",
          children: [{ path: "/user/list", name: "用户列表" }]
        },
        {
          icon: "dyhd",
          name: "党员互动",
          path: "/dyhd",
          children: [
            { path: "/dyhd/list", name: "帖子列表" },
          ]
        },
        {
          icon: "slider",
          name: "轮播图列表",
          path: "/slider/list",
          children: [{ path: "/slider/list", name: "列表" }]
        },
        {
          icon: "mzpy",
          name: "民主评议",
          path: "/mzpy",
          children: [{ path: "/mzpy/list", name: "评议列表" },{ path: "/mzpy/add", name: "发起评议" }]
        },
        {
          icon: "xdzj",
          name: "心得总结",
          path: "/xdzj/list",
          children: [{ path: "/xdzj/list", name: "总结列表" }]
        },
        {
          icon: "sxhb",
          name: "思想汇报",
          path: "/sxhb/list",
          children: [{ path: "/sxhb/list", name: "汇报列表" }]
        },
        {
          icon: "news",
          name: "新闻管理",
          path: "/news",
          children: [
            { path: "/news/add", name: "添加新闻" },
            { path: "/news/list", name: "新闻列表" }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
.menu_page {
  position: fixed;
  top: 71px;
  left: 0;
  min-height: 100%;
  /* background-color: #324057; */
  background-color: eef1f6;
  z-index: 99;
}
.el-menu {
  border: none;
}
.fa-margin {
  margin-right: 5px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 220px;
  min-height: 400px;
}
.el-menu-vertical-demo {
  width: 35px;
}
.el-submenu .el-menu-item {
  min-width: 220px;
}

.hiddenDropdown,
.hiddenDropname {
  display: none;
}
a {
  text-decoration: none;
}
</style>

