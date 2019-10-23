<template>
    <div>
        <!-- <p>name:{{name}}</p> -->
        <p>{{$attrs}}</p>  
        <p>--+{{$attrs.age}}+--</p>
        <GrandSon v-bind="$attrs"></GrandSon>
    </div>
</template>

<script>
import GrandSon from "./GrandSon"
export default {
    name:'son',
    components:{GrandSon},
    // props:{
    //     name:String,
    //     age:Number,
    //     // 没有接收heigth,heigth保存在$atttrs中
    // },
    
}
</script>