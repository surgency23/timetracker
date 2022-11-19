<template>
  <div>
    <img alt="Vue logo" src="./assets/Hourglass.png">
    <form @submit.prevent="addToggleToStore">
      <input type="text" v-model="toggleName" />
      <button>Add</button>
    </form>
    <form action="">
      <div v-for="item in toggleStore.toggles" :key="item.uuid" class="toggles">
        <Toggle :toggleName="item.toggleName"/>
        <button @click="toggleStore.removeToggle(item.uuid)">X</button>
      </div>
    </form>
    <button :disabled="!toggleStore.toggles.length" @click="emptyToggleStore" type="button">Clear all toggles</button>
  </div>
</template>

<script>
  import Toggle from "./compontents/Toggle.vue";
  import {
    v4 as uuidv4
  } from 'uuid';
  import {
    useToggleStore
  } from './stores/toggleStore'
  import {
    ref
  } from 'vue'

  export default {
    name: 'App',
    components: {
      Toggle,
    },
    setup() {
      const toggleStore = useToggleStore()
      const toggleName = ref('')
      const toggleUUID = ref('')

      function addToggleToStore() {
        if (!toggleName.value) return
        toggleStore.addItem(toggleName.value, uuidv4())
        toggleName.value = ''
      }

      function emptyToggleStore() {
        if (window.confirm('Are you sure you want to clear all toggles?')) {
          toggleStore.clearToggles();
        }
      }
      window.stores = {
        toggleStore
      }
      return {
        toggleStore,
        toggleName,
        toggleUUID,
        emptyToggleStore,
        addToggleToStore
      }
    },
  }
</script>

<style>
.toggles{
  /* border:2px solid red; */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>