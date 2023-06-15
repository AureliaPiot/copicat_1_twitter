<template>
  
  <ul class="container_liste">
        <li class="TD_list--title">
          <h5 class="fw-bold">Tendance pour vous</h5>
        </li>
        <li class="TD_list--item" v-for="element in elements" :key="element">
          <a class="TD_list--link" :href="'http://localhost:8080/#/explorer/'+element.tendance_name">       
            <span class="TD_span--type">{{ element.tendance_type }}</span>
            <span class="TD_span--name">{{ element.tendance_name }}</span>
            <span class="TD_span--number">{{ element.tweet_number }}K Tweet</span>
          </a>
          
        </li>
    </ul>


</template>
 
 <script>

// import { mapStores } from 'pinia'
// import { useDataStore } from '@/stores/data.js'
import { useTendanceDataStore } from '@/stores/tendanceData.js'


 export default {


   name: 'templateNavTendanceContainerList',
   props: {//ici les proprietes transmise par le parents
   //   msg: String
   },
   data(){
    return{//ici les proprietes du composant
      
    }
   },
   emits:[//ici les evenement a transmettre au parent
   ],
   methods: {//ici les methodes
   },
///////////////////
  computed:{//(retrun)ici , return de propieter qui necessite une logique de modification, sans modifier les propriete utiliser de base
    //elles sont automatiquement recalculer si une propriete de base est modifier
    //proprieter mis en cache (gain de ressource, temps etc ..)

    storeTendanceData(){
        return useTendanceDataStore()
    },
    elements(){
      let array_List_object=[];
      for(let i=0; i<9 ; i++ ){
        array_List_object.push(this.storeTendanceData.getTendanceFormatData(i)) 
        }
        return array_List_object;
       
      }//elements
    
   },
   mounted(){

   }
 }
 </script>
 

 <style scoped>


.container_liste{
  margin-top: 3.5rem;
  width: 100%;
  background-color: #eff3f4;
  border-radius: 15px;
  text-align: initial;
  overflow: hidden;
}
h5{
  font-size: large;
  font-weight: bold;
}
.TD_list--title {
  font-weight: 900 !important;
  padding: 0.45rem 1rem;

}

.TD_list--item a{
  display: flex;
  flex-direction: column;
  padding: 0.45rem 1rem;

  /* text-align: initial; */
}
a:hover{
  background: rgba(0, 0, 0, 0.055);
}
.TD_span--type , .TD_span--number{
  font-size: small;
  font-weight: 300;
}
.TD_span--name{
  /* font-size: larger; */
  font-weight: 700;
}
</style>