<template>
    <div>
        <!-- 模板中直接使用data中的数据，不需要this.money,模板中没有this -->
        <!-- <div>{{money}}</div> -->
        <Parent></Parent>
    </div>
</template>
<script>
import Parent from "./components/parent"
export default {
    data(){
        // 必须返回一个对象，因为只有对象能被侦测到
        return {
            money:100
        }
    },
    components:{
        Parent
    }
}
</script>