<template>
    <div class="section">
        <emitSon :articleList="articleList" @onEmitIndex="onEmitIndex"></emitSon>
        <!-- <emitSon :articleList="articleList" v-on:onEmitIndex="onEmitIndex"></emitSon>   -->
        <p>{{currentIndex}}</p>
    </div>
</template>
<script>
import EmitSon from "./emitSon"
export default {
    name:"emitFather",
    components:{
           EmitSon
        },
    data(){
        return {
            currentIndex:0,
            articleList:['hello','world','wangcai']
        }
    },
    methods:{
        onEmitIndex(idx){
            this.currentIndex=idx
        }
    }
}
</script>