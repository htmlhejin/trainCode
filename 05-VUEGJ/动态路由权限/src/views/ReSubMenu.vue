<template>
    <el-submenu :index="data.path">
        <template #title>
            <router-link :to="data.path">{{data.name}}</router-link>
        </template>
        <template v-for="child in data.children" >
            <ReSubMenu :data="child" :key="child.auth" v-if="data.children"></ReSubMenu>
            <el-menu-item :key="child.auth" v-else :index="child.path">
                {{data.name}}
            </el-menu-item>
        </template>
    </el-submenu>
</template>

<script>
export default {
    name:"ReSubMenu",
    props:{
        data:{
            type:Object,
            default:()=>({})
        }
    }
}
</script>