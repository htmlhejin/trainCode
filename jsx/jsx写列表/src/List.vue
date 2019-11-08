<template>
    <div>
        <template v-for="(item,index) in data">
            <!-- 没有传递render函数，就以li的形式展示 -->
            <li :key="index" v-if="!render">{{item}}</li>   
             <!--传递了render函数，以render函数中返回的标签显示  -->
            <ListItem :key="index" v-else :render="render" :item="item">{{item}}</ListItem>
        </template>
    </div>
</template>


<script>
import ListItem from "./ListItem"
export default {
    components:{
        ListItem
    },
    props:{
        render:{
            type:Function
        },
        data:{
            type:Array
        }
    }
}
</script>