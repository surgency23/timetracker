<template>
    <strong>
        <h1></h1>{{msg}}
    </strong>
    <p>toggles go here</p>
    Parent: {{name}}
    <!-- <div v-for="item in switches">
        <Switch :label=item.label :checked=item.checked :timestamp=item.timestamp class="switches"></Switch>

    </div> -->
</template>

<script>
    import Switch from "./Switch.vue";
    import {
        ref
    } from "vue";
    export default {
        setup() {
            const name = ref("");
            return {
                name
            };
        },
        components: {
            Switch
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .switches {
        justify-content: center;
    }
</style>