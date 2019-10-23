<template>
  <!-- 蒙版 -->
  <div :class="{'open':isSort || isScreen}" @click.self="hideView">
    <div v-if="filterData" class="filter_wrap">
      <!-- 导航 -->
      <aside class="filter">
        <div
          class="filter-nav"
          v-for="(item,index) in filterData.navTab"
          :key="index"
          :class="{'filter-bold':currentFilter==index}"
          @click="filterSort(index)"
        >
          <span>{{item.name}}</span>
          <i v-if="item.icon" :class="'fa fa-'+item.icon"></i>
        </div>
      </aside>
    </div>
    <!-- 综合排序中的数据排序 -->
    <section class="filter-extend" v-if="isSort">
      <ul>
        <li v-for="(item,index) in filterData.sortBy" :key="index" @click="selectort(item,index)">
          <span :class="{'selectName':currentSort==index}">{{item.name}}</span>
          <i v-show="currentSort==index" class="fa fa-check"></i>
        </li>
      </ul>
    </section>
    <!-- 筛选中的数据 -->
    <section class="filter-extend" v-if="isScreen">
      <div class="filter-sort">
        <div v-for="(screen,index) in filterData.screenBy" :key="index" class="morefilter">
          <p class="title">{{screen.title}}</p>
          <ul>
            <li
              v-for="(item,i) in screen.data"
              :key="i"
              :class="{'selected':item.select}"
              @click="selectScreen(item,screen)"
            >
              <img :src="item.icon" alt v-if="item.icon" />
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="morefilter-btn">
        <span @click="clearFilter" class="morefilter-clear">清空</span>
        <span @click="filterOk" class="morefilter-ok">确定</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "FilterView",
  data() {
    return {
      currentFilter: 0, //选中当前哪一个导航
      isSort: false, //控制蒙版是否显示，默认不显示
      currentSort: 0, //默认勾选第一个排序规则
      isScreen: false //控制筛选框是否显示,默认不显示
    };
  },
  // 对两个按钮操作
  computed: {
    edit() {
      let edit = false;
      this.filterData.screenBy.forEach(screen => {
        screen.data.forEach(item => {
          if (item.select) {
            edit = true;
          }
        });
      });
      return edit;
    }
  },
  props: {
    filterData: Object
  },
  methods: {
    // 点击时每一个导航时
    filterSort(index) {
      this.currentFilter = index;
      switch (index) {
        // 点击了综合排序
        case 0:
          this.isSort = true; //点击综合排序时自已加粗
          this.$emit("searchFixed", true); //注册一个searchFixed事件实现样式
          break;
        // 点击了距离最近
        case 1:
          this.$emit("update", {
            condition: this.filterData.navTab[1].condition //{condition: "distance"}
          });
          this.hideView();
          break;
        // 点击了品质联盟
        case 2:
          this.$emit("update", {
            condition: this.filterData.navTab[2].condition // {condition: "is_premium"}
          });
          this.hideView();
          break;
        case 3:
          this.isSort = true; //显示蒙版
          this.isScreen = true; //显示筛选框
          this.$emit("searchFixed", true); //true,调用样式
          break;
        default:
          this.hideView();
          break;
      }
    },
    // 取消蒙版
    hideView() {
      this.isSort = false; //点击蒙版自身时取消蒙版
      this.isScreen = false; //取消筛选框
      this.$emit("searchFixed", false); //同时取消蒙版的类
    },
    // 点中综合排序中的每个数据，"综合排序"四个字改变，并且后面显示√
    selectort(item, index) {
      this.currentSort = index;
      this.filterData.navTab[0].name = this.filterData.sortBy[index].name;
      this.hideView();
      // 更新数据
      this.$emit("update", { condition: item.code });
    },
    // 选中某个筛选条件
    selectScreen(item, screen) {
      if (screen.id !== "MPI") {
        // 单选
        screen.data.forEach(ele => {
          ele.select = false;
        });
      }
      item.select = !item.select;
    },
    // 清空按钮
    clearFilter() {
      this.filterData.screenBy.forEach(screen => {
        screen.data.forEach(item => {
          item.select = false;
        });
      });
    },
    // 确定按钮
    filterOk() {
      let screenData = {
        MPI: "", //screenBy[0] id--多选
        offer: "", //screenBy[1] id--单选
        per: "" //screenBy[2] id--单选
      };
      let mpiStr = "";
      this.filterData.screenBy.forEach(screen => {
        screen.data.forEach((item, index) => {
          if (item.select) {
            if (screen.id !== "MPI") { 
              // 单选
              screenData[screen.id] = item.code;             
            }else{
              mpiStr+=item.code+",";
              screenData[screen.id]=mpiStr
            }
          }
        });
      });
      this.$emit("update",{condition:screenData})
      this.hideView();
    }
  }
};
</script>

<style scoped>
.filter_wrap {
  background: #fff;
  position: sticky;
  top: 54px;
  z-index: 10;
}
.filter {
  position: relative;
  border-bottom: 1px solid #ddd;
  line-height: 10.4vw;
  z-index: 101;
  height: 10.666667vw;
  display: flex;
  justify-content: space-around;
}
.filter-nav {
  flex: 1;
  text-align: center;
  color: #666;
  font-size: 0.8333rem;
}
.filter-nav i {
  width: 1.6vw;
  height: 0.8vw;
  margin-left: 1.333333vw;
  margin-bottom: 0.533333vw;
  fill: #333;
  will-change: transform;
}

.filter-bold {
  font-weight: 600;
  color: #333;
}

.open {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  z-index: 3;
}

.filter-extend {
  background-color: #fff;
  color: #333;
  padding-top: 2.133333vw;
  position: absolute;
  width: 100%;
  z-index: 4;
  left: 0;
  top: 24.533333vw;
}
.filter-extend li {
  position: relative;
  padding-left: 5.333333vw;
  line-height: 10.666667vw;
  overflow: hidden;
}
.fa-check {
  float: right;
  color: #009eef;
  margin-right: 3.733333vw;
  line-height: 10.666667vw;
}

.selectName {
  color: #009eef;
}
/* 筛选 */
.filter-sort {
  background: #fff;
  padding: 0 2.666667vw;
  line-height: normal;
}
.morefilter {
  margin: 2.666667vw 0;
  overflow: hidden;
}
.morefilter .title {
  margin-bottom: 2vw;
  color: #666;
  font-size: 0.5rem;
}
.morefilter ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.morefilter li {
  box-sizing: border-box;
  width: 30%;
  height: 9.333333vw;
  line-height: 9.333333vw;
  margin: 0.8vw 1%;
  background: #fafafa;
}
.morefilter li img {
  width: 3.466667vw;
  height: 3.466667vw;
  vertical-align: middle;
  margin-right: 0.8vw;
}
.morefilter li span {
  margin-left: 2%;
  vertical-align: middle;
}

.morefilter-btn {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fafafa;
  box-shadow: 0 -0.266667vw 0.533333vw 0 #ededed;
  line-height: 11.466667vw;
  box-sizing: border-box;
}
.morefilter-btn span {
  font-size: 0.826667rem;
  text-align: center;
  text-decoration: none;
  flex: 1;
}
.morefilter-clear {
  color: #ddd;
  background: #fff;
}
.morefilter-ok {
  color: #fff;
  background: #00d762;
  border: 0.133333vw solid #00d762;
}

.selected {
  color: #3190e8 !important;
  background-color: #edf5ff !important;
}

.edit {
  color: #333 !important;
}
</style>
