import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const types={
    SET_LOCATION:'SET_LOCATION',
    SET_ADDRESS:'SET_ADDRESS'
};
const state={
    location:{},
    address:''
};
// 获取location，address
const getters={
    location:state=>state.location,
    address:state=>state.address
};
const mutations={
    [types.SET_LOCATION](state,location){
        if(location){
            state.location=location
        }else{
            state.location=null
        }
    },
    [types.SET_ADDRESS](state,address){
        if(address){
            state.address=address
        }else{
            state.address='';
        }
    }
};
const actions={
    setLocation:({commit},location)=>{
        commit(types.SET_ADDRESS,location)
    },
    setAddress:({commit},address)=>{
        commit(types.SET_ADDRESS,address)
    }
}
export default new Vuex.Store({
        state,getters,mutations,actions
})