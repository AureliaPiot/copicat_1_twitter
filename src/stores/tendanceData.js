import { defineStore } from 'pinia'
// https://pinia.vuejs.org/core-concepts/
// on evite d'exporter des données qui sont accessible depuis tout le projte, ça sert a rien, autant les demander là ou on les veux sans passer par le store

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useTendanceDataStore = defineStore('tendancedata',  {
    state : ()=> {//data of store
        return{
            tendance_type:[
                "seulement sur tweeter",
                "Tendance dans la category France",
                "technologie.tendance"
              ],
              tendance_name:[
                "Discord",
                "Bonjour",
                "Gateaux",
                "Minecraft",
                "Eau",
                "France Travail",
                "Etats Uni",
                "Mathilde",
                "Ordrac",
                "GIEC",
                "Euro",
                "pokemon",
                "Zelda",
                "Paris",
                "Vegas",
                "Pluis",
                "Mr Propre",
                "Orage",
                "Termina",
                "nuages",
              ],
        }
    },
    getters: { //computed of the store
      
    },
    actions: {//methods of the store
        /**
         * @param {int} $int; executer dans une boucle, int represente le nombre de tour de boucle 
         * @returns un objet avec 3 entrées
         */
        getTendanceFormatData($int){
            return {
                "tendance_type":this.tendance_type[Math.round(Math.random()*2)],
                "tendance_name":this.tendance_name[$int],
                "tweet_number":Math.round(Math.random()*1000),
              }
        }
    },
})