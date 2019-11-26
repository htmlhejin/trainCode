<template>
  <div class="login wrapper">
    <MyHeader>登录</MyHeader>
    <div class="login-form">
      <img src="../../assets/images/login_bg1.png" alt />
      <cube-form :model="model" @submit="submitHandler">
        <cube-form-group>
          <cube-form-item :field="fields[0]"></cube-form-item>
          <cube-form-item :field="fields[1]"></cube-form-item>
        </cube-form-group>
        <cube-form-group>
          <cube-button type="submit">登录</cube-button>
        </cube-form-group>
      </cube-form>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import { mapActions } from "vuex";
import * as types from "@/store/action-types";
export default {
  name:'login',
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      fields: [
        {
          type: "input",
          modelKey: "username",
          label: "用户名 ",
          props: {
            placeholder: "请输入用户名"
          },
          rules: {
            required: true
          }
        },
        {
          type: "input",
          modelKey: "password",
          label: "密码",
          props: {
            placeholder: "请输入密码",
            type: "password"
          },
          rules: {
            required: true
          }
        }
      ]
    };
  },
  methods: {
    ...mapActions([types.LOGIN]),
    submitHandler(e) {
      // console.log(e)
      e.preventDefault();
      try {
        this[types.LOGIN](this.model);
        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    }
  },
  components: {
    MyHeader
  }
}
</script>

<style lang="stylus">
.login {
  &-form {
    width: 80%;
    margin: 0 auto;
    img {
      width: 100px;
      height: 100px;
      margin: 0 auto;
      display: block;
      margin-bottom: 40px;
    }
  }
}
.wrapper{
  position absolute;
  height 100%;
  left:0;
  top:0;
  width 100%;
  z-index 10;
  background #fff
}
</style>