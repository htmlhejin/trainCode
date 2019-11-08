<template>
    <div>
        <p>{{message}}</p>
        <button @click="changeSonData">改变子组件数据</button>
        <Son></Son>
    </div>
</template>
<script>
import Son from "./Son"
export default {
    name:'father',
    components:{
        Son
    },
   data(){
       return {
           message:"this is father data"
       }
   },
   methods:{
       changeSonData(){
        //    this.$children  获取到子组件
        //    this.$children[0].msg="this is new son data"
        // this.$children的值是数组
           this.$children[0].news="this is new son data"
       }
   }
}
</script>