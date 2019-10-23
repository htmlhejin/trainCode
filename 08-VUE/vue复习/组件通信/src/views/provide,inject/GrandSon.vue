<template>
    <div>{{demo}}</div>
</template>

<script>
export default {
    name:'grandSon',
    inject:["for"],
    data(){
        return {
            demo:this.for
        }
    }
}
</script>