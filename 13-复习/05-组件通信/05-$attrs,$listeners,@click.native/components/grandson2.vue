<template>
    <div>
        <hr>
        <button @click="show">向Grandson2传递$listeners中的方法</button>
    </div>
</template>

<script>
export default {
    

    methods:{
        show(){
            this.$listeners.mousedown()

        }
    }
}
</script>