// 存放home中的状态

import {ajaxCategory,ajaxSlides} from "../../api/home"
import * as types from "../action-types"
export default {
    namespaced:true,  // 表示只有当前组件可以使用该状态
    state:{
        categories:[] ,  // 存放分类信息
        currentMovie:-1,   // 当前分类默认是'全部电影'
        slides:[]
    },
    mutations:{
        [types.SET_CATEGORIES](state,payload){
            // categories中就有数据了
            state.categories = payload
        },
        [types.SET_CURRENT_MOVIE](state,currentMovie){
            state.currentMovie = currentMovie
        },
        [types.SET_SLIDES](state,slides){
            state.slides = slides
        }
    },
    actions:{
        async [types.SET_CATEGORIES]({commit}){
            // 调用ajaxCategory方法，内部请求接口，返回分类信息
           let res = await ajaxCategory()
        //    触发mutations修改状态，向categories中保存数据
           commit(types.SET_CATEGORIES,res)
        },
        async [types.SET_SLIDES]({commit}){
            let slides = await ajaxSlides()
            commit(types.SET_SLIDES,slides)
        }
    }
}

ajaxCategory()




