<template>
  <div>
    <img alt="Vue logo" src="./assets/Hourglass.png">
    <form @submit.prevent="addToggleToStore">
        <input type="text" v-model="toggleName" />
        <button>Add</button>
      </form>
        <Toggle :toggleName="item.toggleName" v-for="item in toggleStore.toggles" :key="item.label" class="toggles"/>
      <!-- <ul >
          <li v-for="item in toggleStore.toggles" :key="item.label">
            <Toggle :label="item.label"/>
            <button
              @click="toggleStore.removeToggle(item.uuid)"
              type="button"
            >X</button>
          </li>
        </ul> -->

       
        <button
          :disabled="!toggleStore.toggles.length"
          @click="emptyToggleStore"
          type="button"
        >Clear all toggles</button>

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
      Toggle,
    },
    setup() {
      const toggleStore = useToggleStore()
      const toggleName = ref('')

      function addToggleToStore() {
      if (!toggleName.value) return
      toggleStore.addItem(toggleName.value)
      toggleName.value = ''
    }

      function emptyToggleStore() {
        if (window.confirm('Are you sure you want to clear the cart?')) {
          toggleStore.clearToggles();
        }
      }
      window.stores = {
        toggleStore
      }
      return {
        toggleStore,
        toggleName,
        emptyToggleStore,
        addToggleToStore
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
    margin:10px
  }
</style>