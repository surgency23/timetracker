<template>
  <div>
      <img alt="Vue logo" src="./assets/Hourglass.png">
      <ToggleConfig msg="Time Tracker Config Manager"></ToggleConfig>
      <Toggles msg="Toggles"  />
  </div>
</template>

<script>
//:switches='[{label: "Clock In",checked:true,timestamp:"12:00:00"}]'
import ToggleConfig from './components/ToggleConfig.vue';
import Toggles from './components/Toggles.vue';
import Switch from './components/Switch.vue'

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