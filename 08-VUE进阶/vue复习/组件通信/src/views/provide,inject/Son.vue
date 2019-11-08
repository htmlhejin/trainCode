<template>
    <div>
        <GrandSon></GrandSon>
    </div>
</template>

<script>
import GrandSon from "./GrandSon"
export default {
    name:'Father',
    components:{GrandSon},
    inject:["for"],
    data(){
        return {
            demo:this.for
        }
    }
}
</script>