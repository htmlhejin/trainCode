<template>
    <SubMenu>
        <!-- 写标题 -->
        <template #title>{{data.title}}</template>
        <!-- 标题中放的内容 -->
        <template v-for="child in data.children">
            <!-- 如果child里没有children，直接将child的title渲染出来 -->
            <MenuItem :key="child.title" v-if="!child.children">
                {{child.title}}
            </MenuItem>
            <!-- 如果有child，调用递归组件 -->
            <ReSubMenu :key="child.title" v-else :data="child"></ReSubMenu>
        </template>
    </SubMenu>
</template>

<script>
import SubMenu from "./SubMenu";
import MenuItem from "./MenuItem";
export default{
    name:"ReSubMenu",
    props:{
        data:{
            type:Object,
            default:()=>({})    //()=>({})表示默认值是一个空对象，返回的是一个对象，对象用()包起来
        }
    },
    data(){
        return {

        }
    },
    components:{
        SubMenu,MenuItem
    }
}
</script>