<template>
  <!--提示框组件 -->
  <div class="box" v-if="isShow">
    <h3>{{title}}</h3>
    <p class="box-content">{{message}}</p>
  </div>
</template>

<script>
// import {setTimeout} from 'timers'
export default {
  data() {
    return {
      isShow: false
    };
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    },
    //   提示框的显示时间
    duration: {
      type: Number,
      default: 2000
    }
  },
  methods: {
    show() {
      this.isShow = true;
      // 提示框不能一直显示，this.duration时间后调用this.hide，隐藏
      setTimeout(this.hide, this.duration);
    },
    hide() {
      this.isShow = false;
      this.remove();
    }
  }
};
</script>

<style scoped>
.box {
  position: fixed;
  width: 100%;
  top: 16px;
  left: 0;
  text-align: center;
  pointer-events: none;
}
.box-content {
  width: 200px;
  margin: 10px auto;
  font-size: 14px;
  border: blue 3px solid;
  padding: 8px 16px;
  background: #fff;
  border-radius: 3px;
  margin-bottom: 8px;
}
</style>
 