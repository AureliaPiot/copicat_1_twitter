<template>
  
  <div class="lightBlue tNavTendance " ref="containerTendance">

    <div class="container_Tendance">
<!-- ----------- -->
      <searchBar/>
<!-- ----------- -->

        <templateNavTendanceContainerList/>
<!-- ----------- -->
       <templateNavSuggestion/>
<!-- ----------- -->

      <ContainerLinkMetaData/>
<!-- ----------- -->
    </div> <!-- container_Tendance -->
  </div>
 </template>
   
   <script>
   // @ is an alias to /src

import templateNavSuggestion from '@/components/templateContainer_Right/partRight/suggestion.vue';
import templateNavTendanceContainerList from '@/components/templateContainer_Right/partRight/containerTendance.vue';
import ContainerLinkMetaData from '@/components/templateContainer_Right/partRight/ContainerLinkMetaData.vue'
import searchBar from '@/components/templateContainer_Right/partRight/searchBar.vue'

   export default {
     name: 'templateNavTendance',
     props: {//ici les proprietes transmise par le parents
     //   msg: String
     },
     components:{
        templateNavTendanceContainerList,
        templateNavSuggestion,
        ContainerLinkMetaData,
        searchBar
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
     
      
     },
   }
   </script>
   

   <style scoped>
.tNavTendance{


  /* width: 55%; */
  flex: 1;

  /* height: fit-content; */
  border-left: 1px solid #eff3f4;

  padding:  0 3rem;

  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;

}
.container_Tendance{
  width: 60%;
  position: relative;
  
}




/* -- ----------- -- */


   </style>
   