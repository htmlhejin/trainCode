<template>
    <div>
        <p>父中的钱是{{money}}</p>
        <hr>
        <!-- 第一个money是Son1中的属性，第二个是本组件中的属性 -->
        <!-- money="money"表示给Son1组件传递了一个money属性，值就是一个字符串money -->
        <!-- :money="money"表示给Son1组件传递了一个money属性，值就是money的值 -->
        <!-- @change="change"表示给子传递了一个change属性，第一个change是子中的属性，第二个是父中的属性 -->
        <Son1 :money="money" @change="change"></Son1>
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
        change(newValue){
            // this表示当前实例
            this.money = newValue
        }
    }
}
</script>


