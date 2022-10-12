import { defineStore, acceptHMRUpdate } from 'pinia'

export const useToggleStore = defineStore({
    id:'toggles',
    state: () => ({
       rawToggles: [],
    }),
    getters:{
        toggles:(state) => {
            return state.rawToggles
        }
    },
    actions:{
        /**
         * @param {string} toggleName
         * @param {string} uuid
         */
    addItem(toggleName,uuid){
        this.rawToggles.push({toggleName:toggleName,uuid:uuid,timeStamp:"temp", checked:false});
    },
    removeToggle(toggleuuid){
        console.log("in removeToggle");
        this.rawToggles = this.rawToggles.filter((toggle) => toggle.uuid !== toggleuuid);
    },
    clearToggles(){
        this.rawToggles = [];
    }

    }
    
})
