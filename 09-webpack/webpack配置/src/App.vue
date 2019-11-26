<template>
  <div id="app">
    <Home></Home>
    app
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import axios from "axios"
import Home from "./views/Home"
export default {
  components:{
    Home
  },
  mounted(){
    axios.get("/api/getUser").then(res=>{
      console.log(res)  //在8000下拿后端3030端口的数据肯定拿不到，有跨域问题，可以在vue.config.js中配置代理来解决跨域限制
    })
    .catch(err=>{
      console.log(err)
    })
  }
}
</script>