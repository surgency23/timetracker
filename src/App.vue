<template>
  <div>
      <img alt="Vue logo" src="./assets/Hourglass.png">
      <ToggleConfig msg="Time Tracker Config Manager"></ToggleConfig>
      <Toggles msg="Toggles"  />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    ToggleConfig,
    Toggles,
    Switch
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>