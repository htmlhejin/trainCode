<template>
    <div>
        <p>父组件--->{{money}}</p>
        <hr>
        <!-- v-model可以和数据绑定同时使用 -->
        <!-- <Son1 :money="money" :counter="counter" v-model="value1"></Son1>    -->

        <!-- 通过v-bind="$attrs"把所有数据向下传递 -->
        <!-- <Son1 v-bind="$attrs" :money="money" :counter="counter"></Son1>    -->

        <!-- 给子组件绑定了两个事件 -->
        <!-- <Son1 @mousedown="show" @change1="change"></Son1>   -->


        <!-- 如果直接给子组件传递一个和原生方法同名的方法，那么这个方法会被当作一个普通的方法，而不是原生方法 -->
        <!-- 这样点击son1是没有效果的 -->
        <!-- <Son1 @click="show" v-bind="$attrs" :money="money" :counter="counter"></Son1> -->
        <!-- 把普通的一个click方法变成原生的 -->
        <Son1 @click.native="show" v-bind="$attrs" :money="money" :counter="counter"></Son1>
    </div>
</template>

<script>
import Son1 from "./son1.vue"
export default {
    data(){
        return {
            money:100,
            counter:1,
            // value1:2000
        }
    },
    
    components:{
        Son1
    },
    methods:{
        change(newV){
            this.money = newV
        },
        show(){
            window.console.log("show...")
        }
    }
}
</script>


