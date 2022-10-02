// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useToggleStore = defineStore({
    id:'toggles',
    state: () => ({
        /**@type {object[]}*/
        rawToggles:[],
    }),
    getters:{
        /**
         * @returns {Array<{label: string; checked:boolean, timeChecked:string, uuid:string}>}
         */
        toggles:(state) => {
            return state.rawToggles
        }
    },
    addToggle(emptyToggle){
        this.rawToggles.push(emptyToggle)
    },
    removeToggle(toggleuuid){
        const i = this.rawToggles.indexOf(toggleuuid);
        if (i > -1) this.rawToggles.splice(i, 1);
    }
})
