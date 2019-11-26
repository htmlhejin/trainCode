<template>
  <div class="home">
    <HomeHeader :categories="categories" @change="change"></HomeHeader>
    <!-- {{categories}} -->
    <!--轮播图 -->
    <cube-slide class="home-slide" :data="slides" />
    <!-- 滚动区域电影列表 -->
    <div class="home-wrapper">
      <cube-recycle-list ref="list" class="list" :size="size" :on-fetch="onAjax" :offset="offset">
        <template slot="item" slot-scope="{data}">
          <div class="item">
            <!-- {{data}} -->
            <h2 style="font-weight:bold; text-align:center">{{data.title}}</h2>
            <img :src="data.pic" alt />
            <p style="text-align:center">{{data.info}}</p>
          </div>
        </template>
      </cube-recycle-list>
    </div>
  </div>
</template>
<script>
import HomeHeader from "./HomeHeader";
import { ajaxMovieList } from "@/api/home.js";
import { createNamespacedHelpers } from "vuex";
let { mapActions, mapState, mapMutations } = createNamespacedHelpers("home");
import * as types from "../../store/action-types.js";
export default {
  data() {
    return {
      size: 3,
      offset: 0
      // movieList:[]
    };
  },
  // 如果一些数据不想被侦测到，可以放在created中
  created() {
    // 给vm挂上一个offsetIndex,hasMore
    this.offsetIndex = 0;
    this.hasMore = true;
  },
  methods: {
    ...mapActions([types.SET_CATEGORIES, types.SET_SLIDES]),
    ...mapMutations([types.SET_CURRENT_MOVIE]),
    // 点击抽屉中的列表项时
    change(newV) {
      this[types.SET_CURRENT_MOVIE](newV[0]);
      this.hasMore = true; // 点击了菜单，hasMore为true,有数据才能渲染
      this.offsetIndex = 0; // 表示没有偏移，全部渲染出来
      this.$refs.list.reset(); // 清空列表，以便重新渲染对应的数据
    },
    // 获取电影列表
    async onAjax() {
      if (this.hasMore) {
        let { result, hasMore } = await ajaxMovieList(
          this.size,
          this.offsetIndex
        );
        // console.log(result,hasMore); // {result: Array(3), hasMore: true}
        this.hasMore = hasMore;
        this.offsetIndex = this.offsetIndex + result.length;
        // this.movieList = result
        // console.log(result)
        return result;
      } else {
        return false;
      }
    }
  },
  // 页面再次切换回来时，称激活,自动执行该函数
  activated() {
    // 需要拿到之前滑动的高度
    let position = sessionStorage.getItem("position");
    // 把之前的高度赋给页面当前的滚动高度，这样就可以定位到之前的高度
    this.$refs.list.$el.scrollTop = position;
  },
  // 切换到其他页面时
  deactivated() {},
  components: {
    HomeHeader
  },
  mounted() {
    this[types.SET_CATEGORIES]();
    this[types.SET_SLIDES]();
    let timer;
    // 防抖，页面已经滑动到一定高度，再次切换回来时(actived)使之仍然定位在之前高度
    // 防抖 缓存页面，记录位置
    // 给电影列表添加一个滚动事件,滚动事件配合定时器
    // this.$refs.list.$el拿到列表的元素<div></div>
    this.$refs.list.$el.addEventListener("scroll", e => {
      // console.log(e.target)
      // 第一次timer肯定是undefined，不执行
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        // 把高度保存在sessionStorage app关闭时，高度自然随之消亡，也不需要这个高度
        sessionStorage.setItem("position", e.target.scrollTop);
      }, 75);
    });
  },
  // 状态映射成计算属性
  computed: {
    ...mapState(["categories", "slides"])
  }
};
</script>
<style lang="stylus" scoped>
.home {
  &-slide {
    width: 100%;
    height: 150px;
  }

  &-wrapper {
    height: calc(100vh - 300px);
    width: 80%;
    margin: 0 auto;

    .item {
      display: flex;
      flex-direction: column;
      border: 2px solid #ccc;
      margin: 10px;
      justify-content: center;
      height: 250px;

      img {
        width: 100%;
      }
    }
  }
}
</style>