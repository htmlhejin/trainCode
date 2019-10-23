<template>
  <div class="search">
    <!-- 头部 -->
    <Header title="搜索" :isLeft="true"></Header>
    <!-- 搜索框 -->
    <div class="search_header">
      <form class="search_wrap">
        <i class="fa fa-search"></i>
        <input v-model="key_word" type="text" placeholder="输入商家，商品名称" />
        <button @click.prevent="searchHandle">搜索</button>
      </form>
    </div>
    <div class="shop" v-if="result && !showShop">
      <div class="empty_wrap" v-if="empty">
        <img src="https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png" alt />
        <div class="empty_txt">
          <h4>附近没有搜索结果</h4>
          <span>换个关键词试试吧</span>
        </div>
      </div>
      <div v-else>
        <SearchIndex  :data="result.restaurants"></SearchIndex>
        <SearchIndex @click="shopItemClick" :data="result.words"></SearchIndex>
      </div>
    </div>
    <div class="container" v-if="showShop">
      <FilterView :filterData="filterData" @update="update"></FilterView>
      <div class="shoplist" v-infinite-scroll="loadMore"  :infinite-scroll-disabled="loading">
        <IndexShop v-for="(item,index) in restaurants" :key="index" :restaurant="item.restaurant"></IndexShop>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import SearchIndex from "../components/SearchIndex";
import IndexShop from "../components/IndexShop";
import FilterView from "../components/FilterView";
import {InfiniteScroll} from "mint-ui";

export default {
  name: "search",
  data() {
    return {
      key_word: "", //搜索值
      result: null, //搜索的结果存放在result中
      empty: false,   //默认不是空
      showShop: false, //显示商家或关键字
      filterData:null,
      restaurants:[],
      page:0,
      size:7,
      loading:false,  //加载动画
      data:null
    };
  },
  watch: {
    // 监控谁，谁是一个函数
    key_word() {
      this.empty=false;
      this.keyWordChange();
    }
  },
  created(){
    this.$axios("/api/profile/filter").then(res=>{
      this.filterData=res.data
    })
  },
  methods: {
    keyWordChange() {
      //   console.log(this.key_word)
      // 输入搜索内容时获取数据
      this.$axios(`/api/profile/typeahead/${this.key_word}`)
        .then(res => {
          console.log(res.data);
          this.result = res.data;
        })
        .catch(err => {
          this.result = null;
        });
    },
    shopItemClick(){
      this.page=0;
      this.restaurants=[];
      this.showShop=true
    },
    // 搜索
    searchHandle(){
      if(!this.key_word){
        return ;    //如果this.key_word没有值，结束程序
      }
      if(this.result && (this.result.restaurants.length>0 || this.result.words.length>0)){
        this.shopItemClick();
      }else{
        this.empty=true
      }
    },
    update(condition){
      this.data=condition;
      this.shopItemClick()
    },
    loadMore(){
      this.page++;
      this.$axios.post(`/api/profile/restaurants/${this.page}/${this.size}`,this.data)
      .then(res=>{
        if(res.data.length>0){
          res.data.forEach(item=>{
            this.restaurants.push(item)
            // console.log(this.restaurants)
          })
        }else{
          this.loading=true
        }
      })
    }
  },
  components: {
    Header,
    SearchIndex,
    IndexShop,
    FilterView
  }
};
</script>

<style scoped>
.search {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.search_header {
  margin-top: 45px;
  background: #fff;
  padding: 0 4.266667vw;
}
.search_header .search_wrap {
  padding: 2.933333vw 2.933333vw 2.933333vw 0;
  display: flex;
  align-items: center;
  position: relative;
}
.search_wrap .fa-search {
  width: 2.933333vw;
  height: 2.933333vw;
  color: #888;
  position: absolute;
  top: 4.6666666vw;
  left: 2.933333vw;
}
.search_wrap input {
  flex-grow: 1;
  border-radius: 0.266667vw;
  background-color: #f8f8f8;
  padding: 1.733333vw 4vw 1.733333vw 8.8vw;
  color: #666;
  outline: none;
  border: none;
}
.search_wrap button {
  outline: none;
  border: none;
  color: #333;
  font-size: 0.426667rem;
  background: #fff;
  font-weight: 700;
  margin-left: 2.933333vw;
  font-size: 14px;
}

.shop {
  width: 100%;
  height: calc(100% - 95px);
  overflow: auto;
}

.empty_wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #fff;
  display: flex;
  justify-content: center;
}
.empty_wrap img {
  width: 35vw;
  height: 35vw;
}
.empty_txt h4 {
  color: #666;
  font-size: 1rem;
  margin: 12vw 0 2vw 0;
}
.empty_txt span {
  color: #999;
  font-size: 0.8rem;
}
</style>

