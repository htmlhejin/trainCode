<template>
  <div>
      son1
      <Grandson1></Grandson1>
  </div>
</template>

<script>
import Grandson1 from "./grandson1"
export default {
  mounted() {
    this.$nextTick(() => {
        // 发布(触发)父组件中订阅的change事件，发布订阅模式
      this.$bus.$emit("change");
    }),
    this.$bus.$on("show",function(){
        window.console.log("Son----->  show...")
    })
  },
  components:{
      Grandson1
  }
};
</script>