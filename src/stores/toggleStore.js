// @ts-check
// @ts-ignore
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useToggleStore = defineStore({
    id:'toggles',
    state: () => ({
       /** @type Array<{
    toggleName:string,
    uuid:string,
    timeStamp:string,
    checked:boolean
}> */
       rawToggles: [],
    }),
    getters:{
        /**
         * @returns Array<{
    toggleName:string,
    uuid:string,
    timeStamp:string,
    checked:boolean
}>
         */
        toggles:(state) => {
            return state.rawToggles
        }
    },
    actions:{
        /**
     * 
     * @param {string} toggleName 
     */
    addItem(toggleName){
        this.rawToggles.push({toggleName:toggleName,uuid:"temp",timeStamp:"temp", checked:false});
    },
    // removeToggle(toggleuuid){
    //     const i = this.rawToggles.indexOf(toggleuuid);
    //     if (i > -1) this.rawToggles.splice(i, 1);
    // }
    clearToggles(){
        this.rawToggles = [];
    }

    }
    
})
