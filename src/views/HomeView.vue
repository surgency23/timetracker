<script setup lang="ts">
import { useToggleStore } from "@/stores/toggleStore";
import { ref } from "vue";

const toggleStore = useToggleStore();
toggleStore.initFromLocalStorage();

let currentToggleInp = ref("");

function addToggle() {
  const text = currentToggleInp.value;
  currentToggleInp.value = "";

  if (text.trim() !== "") {
    toggleStore.addToggle(text);
  }
}
</script>

<template>
  <main>
    <h1>Toggles</h1>

    <button @click="toggleStore.resetAllToggles()" class="clear">
      Reset all toggles
    </button>
    <button @click="toggleStore.removeAllToggles()" class="clear">
      Remove all toggles
    </button>

    <div class="prog">
      <progress
        :max="toggleStore.toggles.length"
        :value="toggleStore.completedToggles.length"
      ></progress>
      <p>
        <b>{{ toggleStore.completedToggles.length }}</b> out of
        <b>{{ toggleStore.toggles.length }}</b> completed
      </p>
    </div>
    <ul class="toggles" v-for="toggle in toggleStore.toggles" v-bind:key="toggle.id">
      <li class="toggle">
        <input
          type="checkbox"
          name="isCompleted"
          :id="toggle.id"
          :checked="toggle.isCompleted"
          @change="toggleStore.toggleToggle(toggle.id)"
        />
        <label
          :for="toggle.id"
          :class="toggle.isCompleted ? 'completed' : 'incomplete'">{{ toggle.text }}</label>
        <span class="timestamp">{{toggle.timestamp}}</span>
        <button @click=toggleStore.removeToggle(toggle.id)>X</button>
        
      </li>
    </ul>

    <form @submit.prevent="addToggle" class="addForm">
      <label for="add">Add Toggle</label>
      <div class="sl">
        <input type="text" name="add" id="add" v-model="currentToggleInp" />
        <button type="submit" class="clear">Add</button>
      </div>
    </form>
  </main>
</template>

<style scoped>
.timestamp{
  margin-left: 1rem;
}
progress {
  width: 100%;
}

.prog {
  margin-bottom: 1.5rem;
}
.prog > p {
  text-align: end;
  margin-top: 0rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  padding: 0.25rem 0;
  font-size: 1.5rem;
}

input[type="checkbox"] {
  display: inline-block;
  padding: 1rem;
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
}

.clear {
  margin-bottom: 1.5rem;
  border: 1px solid hsl(244, 7%, 54%);
  color: hsl(247, 34%, 85%);
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  font-size: 12px;
  cursor: pointer;
}
label.completed {
  color: hsl(245, 20%, 76%);
  text-decoration: line-through;
}

.addForm {
  margin-top: 1rem;
  border-top: 1px solid #242424;
  padding: 1rem 0;
}

.addForm > label {
  display: block;
  color: #ccc5d8;
}

.sl {
  display: flex;
  /* justify-content: center;*/
  justify-content: center; 
  /* margin-top: 0.25rem; */
}
.sl > input {
  border: 1px solid #3f3f3f;
  /* padding: 0.75rem 1rem; */
  border-radius: 0.5rem;
  margin-right: 1rem;
  /* width: 100%; */
}

.sl > button {
  border-color: #42d392;
  background-color: #42d392;
  /* padding: 0.75rem 1rem; */
  border-radius: 0.5rem;
  color: #1a1a1a;
}
</style>
