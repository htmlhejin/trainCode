<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/bg.jpg" alt />
    </div>
    <!-- 手机号 -->
    <InputGroup
    type="number"
    v-model="phone"
    placeholder="手机号"
    :btnTitle="btnTitle"
    :disabled="disabled"
    :error="errors.phone"
    @btnClick="getVerifyCode"
    ></InputGroup>
    <!-- 验证码 -->
    <InputGroup
    type="number"
    v-model="verifyCode"
    placeholder="验证码"
    :error="errors.code"
    ></InputGroup>
    <div class="login_des">
        <p>
        新用户登录即自动注册，表示已同意
        <span>《用户服务协议》</span>
      </p>
    </div>
    <!-- 登陆按钮 -->
    <div class="login_btn">
        <button :disabled="isClick" @click="handleLogin">登录</button>
    </div>
  </div>
</template>

<script>
import InputGroup from "../components/InputGroup";
// import { setInterval, clearInterval } from 'timers';
// import { constants } from 'crypto';
export default {
  name: "login",
  data() {
    return {
        phone:"",
        verifyCode:"",
        btnTitle:"获取验证码",
        disabled:false,
        errors:{}
    };
  },
  computed:{
      isClick(){
          if(!this.phone || !this.verifyCode)
          return true;
          else return false
      }
  },
  components: {
    InputGroup
  },
  methods:{
      handleLogin(){
          this.errors={}
          this.$axios.post("/api/posts/sms_back",{
              phone:this.phone,
              code:this.verifyCode
          }).then(res=>{
            // 保存id,后面会根据这个id去请求接口
              localStorage.setItem("ele_login",true)
              this.$router.push('/')
          }).catch(err=>{
              this.errore={
                  code:err.response.data.msg
              }
          })
      },
      getVerifyCode(){
          if(this.validatePhone()){
              this.validateBtn();
              this.$axios.post("/api/posts/sms_send",{
                  tpl_id:"177559",
                  key:"95418850bedf6c0ad36becdc8d9a8b05",
                  phone:this.phone
              }).then(rs=>{
                  console.log(res)
              })
          }
      },
    //   获取验证码
    validateBtn(){
        let time=60;
        let timer=setInterval(()=>{
            if(time==0){
                clearInterval(timer)
                this.btnTitle="获取验证码";
                this.disabled=false
            }else{
                // 倒计时
                this.btnTitle=time+"秒后重试"
                this.disabled=true
                time--
            }
        },1000)
    },
    //   验证手机号
    validatePhone(){
        if(!this.phone){
            this.errors={
                phone:"手机号不能为空"
            }
            return false
        }else if(!/^1[345678]\d{9}$/.test(this.phone)){
            this.errors={
                phone:"请填写正确的手机号"
            }
            return false
        }else{
            this.errors={}
            return true
        }
    },
    //   handleLogin(){
    //       this.errors={},
          
    //   }
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
}
.logo {
  text-align: center;
}
.logo img {
  width: 150px;
}
.text_group,
.login_des,
.login_btn {
  margin-top: 20px;
}
.login_des {
  color: #aaa;
  line-height: 22px;
}
.login_des span {
  color: #4d90fe;
}
.login_btn button {
  width: 100%;
  height: 40px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}
.login_btn button[disabled] {
  background-color: #8bda81;
}
</style>