<template>
  <!-- v-model是 :value和@input 的语法糖 -->
  <input type="text" :value="value" @input="onInput" v-bind="$attrs"/>
</template>

<script>
export default {
  inheritAttrs:false,
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    onInput(e) {    //e表示事件对象
        // index传过来一个inupt事件,在子组件中触发这个事件
        this.$emit('input',e.target.value)

        // 触发FormItem中的validate事件---父中的事件
        this.$parent.$emit("validate")
    }
  }
};
</script>