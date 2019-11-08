<template>
    <div>
        <Test :n="1">app</Test>
    </div>
</template>

<script>
    import Test from "./views/Test"
    export default {
        components: {
            Test
        }
    }
</script>
