<template>
  <div id="app">
      <!-- 内容区域 -->
    <div class="container">
      <!-- name属性的值作为动画的类的开头的名字 -->
        <transition :name = "movie">
          <!-- 有的页面需要缓存，此时使用keep-alive组件 -->
          <keep-alive>
            <router-view v-if="$route.meta.keepalive"></router-view>
          </keep-alive>
        </transition>
        <transition :name = "movie">
            <router-view v-if="!$route.meta.keepalive"></router-view>
        </transition>
    </div>
    <!-- tabbar -->
    <div class="footer">
      <cube-tab-bar 
      v-model="selectedLabelDefault" 
      :data="tabs" 
      @change="changeHandler"
      ></cube-tab-bar>
    </div>
  </div>
</template>
 
 
<script>
import * as types from "@/store/action-types"
export default {
  name: "app",
  data() {
    return {
      selectedLabelDefault: "/",
      movie:"slide-left",
      tabs: [
        {
          label: "首页",
          value:"/",
          icon: "cubeic-home"
        },
        {
          label: "电影",
          value:"/movie",
          icon: "cubeic-like"
        },
        {
          label: "个人中心",
          value:"/profile",
          icon: "cubeic-vip"
        }
      ]
    };
  },
  methods: {
    // 切换路由时
    changeHandler(label) {
        this.$router.push(label)
       
    }
  },
  watch:{
      $route:{
          handler(to,from){
            // console.log(to)
            if(to && from){
              // 说明点击了tabbar
              if(to.meta.idx > from.meta.idx){
                this.movie = "slide-left"
              }else{
              this.movie = "slide-right"
              }
            }
              this.selectedLabelDefault = to.path
          }
      }
  }
};
</script>

 <style lang="stylus">
 html, body, #app {
   width 100%
   height 100%
 }
 #app {
   display flex
   flex-direction column
 }

 .container {
   flex 1
   overflow scroll
 }

 .footer {
   background-color #ccc
 }

 .cube-tab {
   i {
     font-size 25px
   }
   div{
       font-size 20px
   }
 }


.slide-left-enter-active, .slide-left-leave-active,.slide-right-enter-active, .slide-right-leave-active{
  transition all 0.3s linear;
}
.slide-left-enter-active,.slide-right-enter-active{
  position absolute
  top 0
  left 0 
  width 100%
}
.slide-left-enter{
  transform translate(100%)
}
.slide-left-leave-to{
  transform translate(-100%)
}
.slide-right-enter{
  transform translate(-100%)
}
.slide-right-leave-to{
  transform translate(100%)
}
</style>