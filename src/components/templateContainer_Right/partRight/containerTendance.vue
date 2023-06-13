<template>
  
  <ul class="container_liste">
        <li class="TD_list--title">
          <h5 class="fw-bold">Tendance pour vous</h5>
        </li>
        <li class="TD_list--item" v-for="element in elements" :key="element">

            <span class="TD_span--type">{{ element.tendance_type }}</span>
            <span class="TD_span--name">{{ element.tendance_name }}</span>
            <span class="TD_span--number">{{ element.tweet_number }}K Tweet</span>
          
        </li>
    </ul>


</template>
 
 <script>


 export default {
   name: 'templateNavTendanceContainerList',
   props: {//ici les proprietes transmise par le parents
   //   msg: String
   },
   data(){
    return{//ici les proprietes du composant
        
        tendance_type:[
          "seulement sur tweeter",
          "Tendance dans la category France",
          "technologie.tendance"
        ],
        tendance_name:[
          "Discord",
          "Mr Propre",
          "Minecraft",
          "GIEC",
          "France Travail",
          "Etats Uni",
          "Mathilde",
          "Ordrac",
          "Euro"
        ],
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
    elements(){
        return [
          {
            "tendance_type":this.tendance_type[1],
            "tendance_name":this.tendance_name[0],
            "tweet_number":Math.round(Math.random()*1000),
          },
          {
            "tendance_type":this.tendance_type[1],
            "tendance_name":this.tendance_name[1],
            "tweet_number":Math.round(Math.random()*1000),
          },
          {
            "tendance_type":this.tendance_type[0],
            "tendance_name":this.tendance_name[2],
            "tweet_number":Math.round(Math.random()*1000),
          },
          {
            "tendance_type":this.tendance_type[2],
            "tendance_name":this.tendance_name[3],
            "tweet_number":Math.round(Math.random()*1000),
          },
          {
            "tendance_type":this.tendance_type[0],
            "tendance_name":this.tendance_name[4],
            "tweet_number":Math.round(Math.random()*1000),
          },
          {
            "tendance_type":this.tendance_type[0],
            "tendance_name":this.tendance_name[5],
            "tweet_number":Math.round(Math.random()*1000),
          },
          {
            "tendance_type":this.tendance_type[1],
            "tendance_name":this.tendance_name[6],
            "tweet_number":Math.round(Math.random()*1000),
          },
          {
            "tendance_type":this.tendance_type[2],
            "tendance_name":this.tendance_name[7],
            "tweet_number":Math.round(Math.random()*1000),
          },
          {
            "tendance_type":this.tendance_type[0],
            "tendance_name":this.tendance_name[8],
            "tweet_number":Math.round(Math.random()*1000),
          },
        ]
      }//elements
    
   },
 }
 </script>
 

 <style scoped>


.container_liste{
  margin-top: 3.5rem;
  width: 100%;
  background-color: #eff3f4;
  border-radius: 15px;
  text-align: initial;
  padding: 1rem ! important;
}
h5{
  font-size: large;
  font-weight: bold;
}
.TD_list--title {
  font-weight: 900 !important;
}

.TD_list--item {
  display: flex;
  flex-direction: column;
  padding: 0.45rem 0;
  /* text-align: initial; */
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