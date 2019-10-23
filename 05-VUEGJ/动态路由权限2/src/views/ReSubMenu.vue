<template>
    <el-submenu :index="data.path">
        <template slot="title">
            <router-link :to="data.path">{{data.name}}</router-link>
        </template>
        <template v-for="c in data.children">
            <ReSubMenu :data="c" :key="c.auth" v-if="data.children"></ReSubMenu>
            <el-menu-item :key="c.auth" v-else :index="c.path">{{c.name}}</el-menu-item>
        </template>
    </el-submenu>
</template>
<script>
export default {
    name:'ReSubMenu',
    props:{
        data:{
            type:Object,
            default:()=>({})
        }
    },
}
</script>