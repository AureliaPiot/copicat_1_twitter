import { defineStore } from 'pinia'
// https://pinia.vuejs.org/core-concepts/
// on evite d'exporter des données qui sont accessible depuis tout le projte, ça sert a rien, autant les demander là ou on les veux sans passer par le store

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useDataStore = defineStore('data',  {
    state : ()=> {//data of store
        return{

            nameUser : 'bluhbluh',
        }
    },
    getters: { //computed of the store
     
    },
    actions: {//methods of the store
      
    },
})