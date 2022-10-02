<template>
  <div>
    <img alt="Vue logo" src="./assets/Hourglass.png">
    <form @submit.prevent="addToggle" data-testid="add-toggle">
      <input type="text" v-model="toggleLabel"/>
      <button>Add Toggle</button>
    </form>
    
    <!-- <Toggle class ="toggles" v-model:checked="shouldReceiveNewsletter" label="Toggle Label" /> -->
  </div>
</template>

<script>
  import Toggle from "./compontents/Toggle.vue";
  import {
    useToggleStore
  } from './stores/toggleStore'
  import {
    ref
  } from 'vue'

  export default {
    name: 'App',
    components: {
      Toggle
    },
    setup() {
      const toggles = useToggleStore()
      const toggleLabel = ref('')

      function addToggle() {
        if (!toggleLabel.value) return
        cart.addItem(toggleLabel.value)
        toggleLabel.value = ''
      }
      window.stores = {
        toggles
      }
      return {
        toggles,
        toggleLabel,
        addToggle
      }
    },
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

  .toggles {
    justify-content: center;
  }
</style>