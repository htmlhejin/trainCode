<template>
    <Son></Son>
</template>

<script>
import Son from "./Son"
export default {
    name:'Father',
    components:{Son},
    provide:{
        for:"word"
    }
}
</script>