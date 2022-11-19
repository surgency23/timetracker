import { ref, computed, type Ref } from "vue";
import { defineStore } from "pinia";
import { nanoid } from "nanoid";

type Toggle = { id: string; text: string; isCompleted: boolean, timestamp: string };

export const useToggleStore = defineStore("counter", () => {
  const toggles: Ref<Toggle[]> = ref([]);
  const completedToggles = computed(() =>
    toggles.value.filter((toggle) => toggle.isCompleted === true)
  );
  const incompleteToggles = computed(() =>
    toggles.value.filter((toggle) => toggle.isCompleted !== true)
  );

  const lsKey = "_v_toggles";

  function initFromLocalStorage() {
    const lstoggles = localStorage.getItem(lsKey);

    if (lstoggles === null) {
      toggles.value = [];
    } else {
      try {
        toggles.value = JSON.parse(lstoggles);
      } catch (e) {
        toggles.value = [];
      }
    }

    updateLocalStorage();
  }

  function updateLocalStorage() {
    localStorage.setItem(lsKey, JSON.stringify(toggles.value));
  }

  function addToggle(text: string) {
    toggles.value = [
      ...toggles.value,
      {
        id: nanoid(),
        isCompleted: false,
        text,
        timestamp:""
      },
    ];
    updateLocalStorage();
  }

  function removeToggle(id: string) {
    toggles.value = toggles.value.filter((toggle) => toggle.id !== id);
    updateLocalStorage();
  }
  function formatAMPM(date:Date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  function toggleToggle(id: string) {
    toggles.value.forEach((toggle) => {
      if (toggle.id === id){ 
        if(toggle.isCompleted === false){
          toggle.timestamp = formatAMPM(new Date())
        }
        else toggle.timestamp = ""
        toggle.isCompleted = !toggle.isCompleted;
      }
    });
    updateLocalStorage();
  }

  function resetAllToggles() {
    toggles.value.map((toggle) => {
      toggle.isCompleted = false
      toggle.timestamp=""
    })
  }
  function removeAllToggles(){
    toggles.value = new Array();
  }

  return {
    toggles,
    completedToggles,
    incompleteToggles,
    removeAllToggles,
    addToggle,
    removeToggle,
    toggleToggle,
    initFromLocalStorage,
    updateLocalStorage,
    resetAllToggles,
  };
});
