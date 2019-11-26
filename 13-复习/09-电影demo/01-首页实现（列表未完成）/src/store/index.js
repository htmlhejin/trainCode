import Vue from "vue"
import Vuex from "vuex"
import home from "./modules/home"

Vue.use(Vuex)

export default new Vuex.Store({
    // 存放很多不同组件的不同状态
    modules:{
        home
    }
})

