<template>
    <div>
        <p>--{{$attrs}}--</p>
        <p>{{age}}</p>
    </div>
</template>

<script>
export default {
    name:'grandSon',
    props:{
        age:Number
    }

}
</script>