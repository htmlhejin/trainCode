<template>
    <div>
        <p>子中的钱是{{money333}}</p>
        <button @click="changeMoney">修改钱</button>
        <hr>
        <!-- <Grandson1 v-model="value"></Grandson1> -->
        <Grandson1></Grandson1>
    </div>
</template>

<script>
import Grandson1 from "./grandson1"
export default {
    // 通过props来接收父传递过来的数据
    props:{
        money333:{
            type:Number
        }
    },
    methods:{
        changeMoney(){
            // 触发的是本组件内部的方法(父给子传递过来的)，只不过值是父中的方法
            // 说触发父中的方法，这种说法也正确
            // this.$emit('update',2000)
            // this.$emit('update:money',2000)
            // money是parent组件中 <Son1 :money333.sync="money"></Son1>中的money333
            this.$emit('update:money333',2000)    // 父组件中不需要再写方法，该代码就表示修改数据
            // window.console.log(".....")
        }
    },
    components:{
        Grandson1
    },
    
}
</script>