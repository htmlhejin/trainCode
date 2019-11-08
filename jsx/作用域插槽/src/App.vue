<template>
    <div id="app">
        <Slot2 :data="foo">
            <template v-slot:default="ctx">
            <!-- <template v-slot:default="{bookName}">   解构赋值 -->
                <li>{{ctx.bookName}}</li>
            </template>
        </Slot2>
    </div>
</template>

<script>
    import Slot2 from "./Slot2.vue"
    export default {
        components: {
            Slot2
        },
        data() {
            return {
                foo: [{
                        book: '1',
                        age: '1'
                    },
                    {
                        book: '2',
                        age: '2'
                    },
                    {
                        book: '3',
                        age: '3'
                    }
                ]
            }
        }
    }
</script>
