<template>
    <div>
        <!-- <p>{{value}}</p> -->

        <!-- 上一级组件传递过来的数据都保存在$attrs中，以对象的形式显示出来,也不需要props接收,使用$attrs省去了子组件中接收这一步骤，如果传递的数据很多，子组件不需要接收，直接$attrs.xxx使用即可
        传递过来的方法都保存在$listeners中 -->
        <p>子组件中{{$attrs}}</p>
        <!-- 子组件中{ "money": 100, "counter": 1 } -->
        <p>子组件的money是{{$attrs.money}}</p>
        <p>子组件的counter是{{$attrs.counter}}</p>

        <!-- $listeners中保存了所有方法 -->
        <button v-on="$listeners" @click="$listeners.change1(888)">修改钱</button>
        <!-- 子向孙传递了很多接收过来的方法 -->
        <Grandson2 v-on="$listeners"></Grandson2>
    </div>
</template>

<script>
import Grandson2 from "./grandson2"
export default {
    // props:{
    //     value:Number
    // },
    mounted(){
        // window.console.log(this.$attrs)   // {money: 100, counter: 1}
    },
    methods:{
       change(){
           this.$emit("change",999)
       }
    },
    components:{
        Grandson2
    },
    
}
</script>