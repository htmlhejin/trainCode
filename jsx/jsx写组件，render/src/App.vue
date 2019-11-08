<template>
    <div id="app">
        <Test2 :n="3">test2</Test2>
    </div>
</template>

<script>
    import Test2 from "./Test2"
    export default {
        components: {
            Test2
        }
    }
</script>
