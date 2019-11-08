<template>
  <header class="head-nav">
    <el-row>
      <el-col
        :span="6"
        class='logo-container'
      >
        <img
          src=""
          class='logo'
          alt=""
        >
        <span class='title'>信工党建e家</span>
      </el-col>
      <el-col
        :span='6'
        class="user"
      >
        <div class="userinfo">
          <img
            class='avatar'
            alt=""
          >
          <div class='welcome'>
            <p class='name comename'>欢迎</p>
            <p class='name avatarname'>张三</p>
          </div>
          <span class='username'>
            <el-dropdown trigger="click" @command="setDialogInfo">
              <span class="el-dropdown-link">
                <i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command='info'>个人信息</el-dropdown-item>
                <el-dropdown-item command='logout' >退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
        </div>
      </el-col>

    </el-row>

  </header>
</template>
<script>
   export default{
        methods:{
          setDialogInfo(cmditem){
            if(!cmditem){
              this.$message("没有command属性")
              return;
            }
          //   switch(cmditem){
          //    case "info":
          //      this.showInfoList();
          //      break;
          //  }
           switch(cmditem){
             case "logout":
               this.logout();
               break;
           }
          },
          // showInfoList(){
          //     this.$router.push("/infoshow")
          // },
          logout(){
            this.$router.push("/")
          }
        }
   }
</script>
</template>
<style scoped>
.head-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  min-width: 600px;
  padding: 5px;
  background: #49a9df;
  color: #fff;
}
.logo-container {
  line-height: 60px;
  min-width: 400px;
}
.logo {
  height: 50px;
  width: 50px;
  margin-right: 5px;
  vertical-align: middle;
  display: inline-block;
}
.title {
  vertical-align: middle;
  font-size: 22px;
  font-family: "Microsoft YaHei";
  letter-spacing: 3px;
}
.user {
  line-height: 60px;
  text-align: right;
  float: right;
  padding-right: 10px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
  display: inline-block;
}
.welcome {
  display: inline-block;
  width: auto;
  vertical-align: middle;
  padding: 0 5px;
}
.name {
  line-height: 20px;
  text-align: center;
  font-size: 14px;
}
.comename {
  font-size: 12px;
}
.avatarname {
  color: #409eff;
  font-weight: bolder;
}
.username {
  cursor: pointer;
  margin-right: 5px;
}
.el-dropdown {
  color: #fff;
}
</style>
