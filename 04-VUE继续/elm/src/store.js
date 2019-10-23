import Vue from 'vue'
import Vuex from 'vuex'       //vuex-----》状态管理模式

// 调用Vue.use(Vuex)，可以将根组件中的状态注入到每个子组件中，子组件通过this.$store可以访问到store中的状态
Vue.use(Vuex)

// types
const types = {
  // 使用常量代替mutation事件类型
  SET_LOCATION: 'SET_LOCATION',
  SET_ADDRESS: 'SET_ADDRESS'
};

// state
const state = {
  location: {},
  address: ''
};

// getters
const getters = {
  location: state => state.location,
  address: state => state.address
};

// mutations    commit派发mutation中的事件
const mutations = {
  // 我们可以使用 ES2015风格的计算属性 命名功能来使用一个常量作为函数名
  [types.SET_LOCATION](state, location) {
    if (location) {
      state.location = location;
    } else {
      state.location = null;
    }
  },
  [types.SET_ADDRESS](state, address) {
    if (address) {
      state.address = address;
    } else {
      state.address = '';
    }
  }
};

// actions    dispatch派发action 中的事件
const actions = {
  setLocation: ({ commit }, location) => {
    commit(types.SET_LOCATION, location);
  },
  setAddress: ({ commit }, address) => {
    commit(types.SET_ADDRESS, address);
  }
};

// 通过store选项,导出Store实例，这样所有的子组件都可以访问根组件中的状态，需要调用Vue.use(Vuex)
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});