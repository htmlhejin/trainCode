<template>
    <div class="profile">
      <div class="profile-banner">
        <img class="avatar" src="../../assets/images/photo.png" alt />
        <cube-button primary inline @click="toLogin">登录</cube-button>
      </div>
  </div>
</template>

<script>
export default {
    name:'profile',
    methods:{
        toLogin(){
          // console.log("....")
            this.$router.push("/login")
        }
    }
}
</script>

<style lang="stylus">
.profile {
  &-banner {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    align-items: center;
    height: 300px;
    background: url('../../assets/images/user_bg.png');
    background-color: blue;
  }
  .avatar {
    width: 80px;
    margin-bottom: 30px;
    height: 80px;
  }
  .list {
    font-size: 30px;
    line-height: 30px;
  }
}
</style>