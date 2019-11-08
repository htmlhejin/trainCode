<template>
  <div class="layout">
    <sideBar></sideBar>
    <topHeader></topHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import sideBar from "./coms/side-bar.vue"
import topHeader from "./coms/top-header.vue"

export default {
    name: 'layout',
    components:{
      sideBar:sideBar,
      topHeader:topHeader,
    }
  }
</script>

<style scoped>
.layout{
  margin-top: 82px;
  margin-left: 230px;  
  padding-left: 30px;  
}
.cell{
  font-size:20px;
  text-align: center
}
.el-table td, .el-table th{
  padding: 15px 0;
}

.el-button--mini{
  font-size: 16px;
  padding: 9px 18px;
  border-radius: 6px;
}
</style>

