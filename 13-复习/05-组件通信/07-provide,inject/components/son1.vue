<template>
  <div>
      {{name}}
  </div>
</template>

<script>
export default {
    // 子组件注入数据   注入的数据应该是一个数组或对象
  inject:['name']
//    Invalid value for option "inject": expected an Array or an Object, but got String.
};
</script>