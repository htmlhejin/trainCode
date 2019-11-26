<template>
  <div>
    <div class="header">
      <h1>Logo</h1>
      <!-- iconfont -->
      <span @click="showDrawer" class="menu">
        <svg
          t="1573566998862"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3388"
          width="16"
          height="16"
        >
          <path
            d="M92 92l840 0C965.104 92 992 118.864 992 152c0 33.136-26.896 60-60 60L92 212C58.864 212 32 185.136 32 152 32 118.864 58.864 92 92 92z"
            p-id="3389"
          />
          <path
            d="M92 452l840 0c33.104 0 60 26.864 60 60 0 33.104-26.896 60-60 60L92 572C58.864 572 32 545.104 32 512 32 478.864 58.864 452 92 452z"
            p-id="3390"
          />
          <path
            d="M92 812l840 0c33.104 0 60 26.896 60 60s-26.896 60-60 60L92 932C58.864 932 32 905.104 32 872S58.864 812 92 812z"
            p-id="3391"
          />
        </svg>
      </span>
    </div>
    <!-- 抽屉 -->
    <div>
      <cube-drawer
        ref="drawer"
        title="请选择"
        :data="data"
        :selected-index="selectedIndex"
        @select="selectHandler"
      ></cube-drawer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: Array
  },
  // 在列表中添加一个全部电影字段，可以通过计算属性来获取data
  computed: {
    data() {
      // 第一个数组是一级标题，第二个是二级标题
      let allActive = [{ text: "全部电影", value: -1 }];
      return this.categories.length > 0
        ? [[...allActive, ...this.categories]]
        : [allActive];
    }
  },
  data() {
    return {
      selectedIndex: []
    };
  },
  methods: {
    showDrawer() {
      this.$refs.drawer.show();
    },
    // 知道点击了哪一个
    selectHandler(selectedVal, selectedIndex, selectedText) {
      // console.log(selectedVal); // 是索引
      // console.log(selectedIndex)
      // console.log(selectedText)
      this.$emit("change", selectedVal);
    }
  }
};
</script>

<style lang="stylus" scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 45px;
  padding-left  10px
  padding-right  10px
  line-height: 45px;
  background-color: #ccc;
}

.menu {
}
</style>