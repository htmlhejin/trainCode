<template>
    <div>
        <p>父中的钱是{{money}}</p>
        <hr>
        <!-- <Son1 :money="money" @change="change"></Son1> -->
        <!-- v-model是 :value和@input的语法糖,相当于给子组件传递了一个value属性和input事件 -->
        <!-- <Son1 :value="money" @input="(newValue)=>money = newValue"></Son1> -->
        <!-- <Son1 v-model="money"></Son1> -->

        <!-- <Son1 :money="money" @update="change"></Son1> -->
        <!-- <Son1 :money="money" @update:money="change"></Son1> -->
        <!-- 这种方式是上面方式的语法糖，触发时 此时不需要change方法 -->  
        <Son1 :money333.sync="money"></Son1>   


    </div>
</template>

<script>
import Son1 from "./son1"
export default {
    data(){
        return {
            money:100
        }
    },
    components:{
        Son1
    },
    methods:{
        // change(newValue){
        //     this.money = newValue
        // }
    }
}
</script>


