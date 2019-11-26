<template>
  <div class="home">
    <HomeHeader :categories="categories" @change="change"></HomeHeader>
    <!-- {{categories}} -->
    <!--轮播图 -->
    <cube-slide :data="slides" />
    <!-- 电影列表 -->
    <div class="home-wrapper">
      <cube-recycle-list class="list" :size="size" :on-fetch="onFetch" :offset="offset">
        <template slot="item" slot-scope="{ data }">
          <div :id="data.id" class="item" @click="handleClick(data)">
            <div class="avatar" :style="{backgroundImage: 'url(' + (data.avatar || '') + ')'}"></div>
            <div class="bubble">
              <p>{{ data.msg }}</p>
              <div class="meta">
                <time class="posted-date">{{ data.time }}</time>
              </div>
            </div>
          </div>
        </template>
      </cube-recycle-list>
    </div>
  </div>
</template>
<script>
// home中的状态定义好之后，可以引入，也可以把状态映射到组件中
import HomeHeader from "./HomeHeader";
import {} from "@/api/home.js";
// 映射
// import {mapActions,mapState} from "vuex"
// 另一种映射的方式
import { createNamespacedHelpers } from "vuex";
let { mapActions, mapState, mapMutations } = createNamespacedHelpers("home");

import * as types from "../../store/action-types.js";

export default {
  data() {
    return {
      swipeData: [
        {
          item: {
            id: "3646653877",
            name: "还不是因为你长得不好看",
            desc: "伤感：歌词再狠，也抵不过现实伤人",
            imgurl:
              "http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyPJnE9O51CqaN72iaDgvFmDKaia12UFhU5uQ/600?n=1"
          },
          btns: [
            {
              action: "clear",
              text: "不再关注",
              color: "#c8c7cd"
            },
            {
              action: "delete",
              text: "删除",
              color: "#ff3a32"
            }
          ]
        },
        {
          item: {
            id: "1789676645",
            name: "秋水浮萍任飘渺",
            desc: "『武侠配乐』快意恩仇江湖情",
            imgurl:
              "http://p.qpic.cn/music_cover/8KfvDey9cibtZ5xkWxRic6vhXgdPic3wnB7reibI4pdPQBCP8u57uqcjsQ/600?n=1"
          },
          btns: [
            {
              action: "clear",
              text: "不再关注",
              color: "#c8c7cd"
            },
            {
              action: "delete",
              text: "删除",
              color: "#ff3a32"
            }
          ]
        },
        {
          item: {
            id: "3649034125",
            name: "念葳蕊",
            desc: "江海迦：热恋后哼一首歌为自己悲悯的歌",
            imgurl:
              "http://p.qpic.cn/music_cover/jXFicBvicUcfIWSoCNT1OrbAoHG2fqqnrJVnGV4iaLCapWUpCKqbmAicJg/600?n=1"
          },
          btns: [
            {
              action: "clear",
              text: "不再关注",
              color: "#c8c7cd"
            },
            {
              action: "delete",
              text: "删除",
              color: "#ff3a32"
            }
          ]
        }
      ]
    };
  },
  // actions,mutations映射成方法，状态映射成计算属性
  methods: {
    // 把home中的所有actions映射过来，在mounted中可以调用该方法
    // ...mapActions('home',['setCategories'])
    // 另一种映射方法对应的写法
    ...mapActions([types.SET_CATEGORIES, types.SET_SLIDES]),
    ...mapMutations([types.SET_CURRENT_MOVIE]),
    change(newV) {
      this[types.SET_CURRENT_MOVIE](newV[0]);
    },
    onItemClick(item) {
      // console.log('click item',item)
    },
    onBtnClick(btn, index) {
      if (btn.action === "delete") {
        this.$createActionSheet({
          title: "确认要删除吗",
          active: 0,
          data: [{ content: "删除" }],
          onSelect: () => {
            this.swipeData.splice(index, 1);
          }
        }).show();
      } else {
        this.$refs.swipeItem[index].shrink();
      }
    }
  },
  // create和mounted都可以发起ajax
  // 有时候调用接口时，会调用多次
  // created(){
  //     // console.log(ajaxCategory())   // Promise {<pending>}
  //     ajaxCategory().then(data=>{
  //         // console.log(data)
  //         // 也可以不通过dispatch的方法派发一个actions，通过映射的方法
  //         // this.$store.dispatch('home/setCategories')
  //     })
  // },
  components: {
    HomeHeader
  },
  mounted() {
    this[types.SET_CATEGORIES](), this[types.SET_SLIDES]();
  },
  // 状态映射成计算属性
  computed: {
    ...mapState(["categories", "slides"])
  }
};
</script>
<style lang="stylus">
.cube-slide-item {
  width: 100%;
  height: 150px;
}

.swipe-wrapper {
  overflow: scroll;
}

.item-inner {
  display: flex;
}

.text {
  font-size: 16px;
  padding-left: 16px;
  padding-top: 10px;
  margin-top: 18px;
}
</style>