<template>
    <div>
        <p>子中的钱是{{money}}</p>
        <!-- @click="changeMoney",如果不传参，()可以省略，默认传递一个事件对象 -->
        <!-- @click="changeMoney()" 表示没有传递任何参数 -->
        <button @click="changeMoney">修改钱</button>
        <hr>
        <!-- 子把数据传递给孙，并且传递一个方法 -->
        <!-- <Grandson1 :money="money" @change1="change1"></Grandson1> -->
        <Grandson1 :money="money"></Grandson1>
    </div>
</template>

<script>
import Grandson1 from "./grandson1"
export default {
    // 通过props来接收父传递过来的数据
    props:{
        money:{
            type:Number
        }
    },
    methods:{
        changeMoney(){
            // 触发的是本组件内部的方法(父给子传递过来的)，只不过值是父中的方法
            // 说触发父中的方法，这种说法也正确
            this.$emit("change",200)
        },
        // change1(newValue){
        //     this.$emit("change",newValue)
        // }
    },
    components:{
        Grandson1
    }
}
</script>