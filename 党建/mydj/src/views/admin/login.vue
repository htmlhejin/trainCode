<template>
  <div class="all">
    <div class="box">
      <div class="header">信工党建e家</div>
      <h1>系统登录</h1>
      <el-form ref="form" label-width="90px">
        <el-form-item label="用户名:">
          <el-input v-model="userinfo. adminName"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input v-model="userinfo.adminPwd" type="password"></el-input>
        </el-form-item>
        <el-form-item label="验证码:">
          <el-input v-model="yanzhengma" style="width:40%" type="text"></el-input>
          <input v-model="checkcode" @click="createCode" class="code" type="button">
        </el-form-item>
        <el-form-item>
          <el-button type="danger" class="aaa" @click=" getData">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    name: "admin",
    data() {
      return {
        code: "",
        yanzhengma: "",
        checkcode: "",
        userinfo: {
          adminName: "xxx",
          adminPwd: "123456"
        }
      };
    },
    created() {
      this.createCode();
    },
    methods: {
      // 获取数据
      getData() {
        //   console.log("...");
        this.$axios
          .post("http://localhost:3000/api/admin/adminLogin.do", {
            adminName:this.userinfo.adminName,
            adminPwd:this.userinfo.adminPwd
          })
          .then(res => {
              // 登录成功 保存token
              const {
                token
              } = res.data
              // console.log(res.data)
              // console.log(token)
              localStorage.setItem("eleToken", token)
              // console.log(res.data);
              if (this.yanzhengma.toLowerCase() == this.checkcode.toLowerCase()) {
                // 解析token
                // const decode=jwt_decode(token);
                this.$router.push("/user");
              } else {
                alert("验证码错误");
              }
          })
          .catch(err => {
            console.log("用户名不存在");
          });
      },
      // 创建验证码
      createCode() {
        // console.log("...")
        this.code = "";
        this.checkcode = "";
        this.yanzhengma = "";
        var codelength = 4;
        // 随机数
        var random = new Array(
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z"
        );
        for (let i = 0; i < codelength; i++) {
          // 获取随机数索引（0-35）
          let index = Math.floor(Math.random() * 36);
          // 根据索引得到的随机数加到code上
          this.code += random[index];
        }
        // 把code值赋给验证码
        this.checkcode = this.code;
      },
      login() {
        this.$router.push("/user");
      }
    }
  };
</script>
<style scoped>
  .all {
    width: 100%;
    height: 100%;
  }
  .box {
    width: 500px;
    margin: 13% auto;
    border: 2px solid white;
    /* padding:30px 55px 20px 20px */
  }
  .header {
    color: white;
    text-align: center;
    width: 100%;
    line-height: 40px;
    font-size: 20px;
    margin-bottom: 15px;
    background-color: #49a9df;
  }
  h1 {
    font-size: 20px;
    text-align: center;
    margin-bottom: 15px;
  }
  .aaa {
    margin-left: 120px;
    background-color: #49a9df;
    border-color: #49a9df;
  }
  .right {
    position: fixed;
    right: 20px;
    top: 10px;
    font-size: 11px;
  }
  a {
    color: #549;
  }
  .el-input__inner {
    width: 420px;
  }
  .code {
    background-color: #eef1f6;
    width: 100px;
    height: 40px;
    border-radius: 5px;
    margin-left: 50px;
    border: none;
  }
</style>