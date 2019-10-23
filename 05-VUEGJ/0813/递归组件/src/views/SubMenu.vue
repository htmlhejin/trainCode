<template>
  <div>
    <div class="title" @click="change">
      <!-- 具名插槽 ，放大标题 -->
      <slot name="title"></slot>
    </div>
    <!-- 下拉菜单中的标题 -->
    <div v-show="flag" class="sub">
      <!-- 插槽放MenuItem -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  methods: {
    change() {
      this.flag = !this.flag;
    }
  }
};
</script>

<style scoped>
.sub {
  padding-left: 20px;
}
</style>