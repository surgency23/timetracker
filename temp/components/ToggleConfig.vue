<template>
  <strong><h1></h1>{{msg}}</strong>
  <p>configurations go here</p>
</template>

<script>
export default {
    name: "ToggleConfig",
    props: {
        msg: String
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
