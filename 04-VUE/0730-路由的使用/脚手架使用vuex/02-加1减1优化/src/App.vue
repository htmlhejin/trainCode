<template>
  <div id="app">
    <h1>我是根组件，当前的值是{{this.$store.state.counter}}</h1>
    <br>
    <add-counter></add-counter>
    <br>
    <sub-counter></sub-counter>
    <!-- <button>加1</button> -->
  </div>
</template>

<script>
import AddCounter from "@/components/AddCounter"
import SubCounter from "@/components/SubCounter"
export default{
  components:{
    AddCounter,
    SubCounter
  }
}
</script>

<style>
</style>
