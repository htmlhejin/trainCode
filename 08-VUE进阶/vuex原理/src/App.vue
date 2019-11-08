<template>
    <div id="app">
        {{this.$store.state.age}} 
        <br>
        {{this.$store.getters.myAge}}
        <br>
        <!-- <button @click="Add">Add</button> -->
        <br>
        <button @click="sub">sub</button>
    </div>
</template>

<script>
    export default {
       name:'app',
       mounted(){
    //    console.log(this.$store.state)  // {age: 10}
       },
       methods:{
           Add(){
               this.$store.commit("add",1)
           },
           sub(){
               this.$store.dispatch("acSub",10)
           }
       }
    }
</script>
