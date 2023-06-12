<template>
  
  <div class="lightBlue tNavTendance ">

    <div class="container_Tendance">

      <form class="tendance_search">
        <div class="tendance_search--group-input">
          <input id="tendance_search--input" type="text" placeholder=" Recherche Twitter">
          <label for="tendance_search--input"><i class="bi bi-search"></i></label>
        </div>
      </form>

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

    </div>

  </div>
 </template>
   
   <script>
   // @ is an alias to /src


   export default {
     name: 'templateNavTendance',
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
.tNavTendance{


  width: 55%;
  height: fit-content;

  padding:  0 3rem;

}
.container_Tendance{

  width: 60%;
  position: relative;
}
.tendance_search{
  position: fixed;
  top: 0;
  width: 20%;
  /* margin: 0.2rem; */
  padding: 0.3rem;
  background-color: #ffffff;

}
.tendance_search--group-input{
  width: 100%;
  border-radius: 25px;
  background-color: #eff3f4;
}

.tendance_search input{
  padding: 0.6rem 0;

  font-size: 1.1rem;
  background: transparent;
  border: none;
}
.container_liste{
  margin-top: 3.5rem;
  width: 100%;
}
h5{
  font-size: large;
  font-weight: bold;
}
ul{
  background-color: #eff3f4;
  border-radius: 15px;
  text-align: initial;
  padding: 0.5rem ! important;

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
   