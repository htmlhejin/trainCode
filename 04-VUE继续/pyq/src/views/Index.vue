<template>
    <div id="app">
        <router-view></router-view>
        <TabBar :data="tabbarData"></TabBar>
    </div>
</template>

<script>
import TabBar from '../components/TabBar'
export default {
    data(){
        return {
            tabbarData:[
                {title:"微信",icon:"comment",path:'/wchart'},
                {title:"通讯录",icon:"address-book",path:'/abook'},
                {title:"发现",icon:"compass",path:'/find'},
                {title:"我的",icon:"user",path:'/mine'}
            ]
        }
    },
    components:{
        TabBar
    }
}
</script>

<style>

</style>

