<template>
  
        <ul id="suggestion_list" class="container_liste">
  
          <li class="suggestion_list--title">
            <h5>suggestions</h5>
          </li>
  
          <li class="suggestion_list--item" v-for="n in 4" :key="n">
            <a href="">

              <span class="suggestion_span--img_profile"></span>
              
              <div class="suggestion_span--group">
                <span class="suggestion_span--name_profile">blahblah</span>
                <span class="suggestion_span--tag_profile">@blubhbluh</span>
              </div>
              <span class="suggestion_span--follow_profile--action">Suivre</span>
            
            </a>
  
  
            
          </li>
  
          <li class="suggestion_list--more">
            <a href="#">
              <p>en savoir plus</p>
            </a>
          </li>
  
        </ul>

   
   </template>
     
     <script>

  
     export default {
       name: 'templateNavSuggestion',
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
  overflow: hidden;

}
h5{
  font-size: large;
  font-weight: bold;
}
.suggestion_list--title{
  padding: 0.45rem 1rem;

}
  .suggestion_list--more > a{
    display: block;
    padding: 12px ;
  }
  .suggestion_list--item >a{
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 12px 1rem;

  }
  a:hover{
  background: rgba(0, 0, 0, 0.055);
}
  .suggestion_span--img_profile{
    display: block;
    width: 2rem;
    height: 2rem;
    background: black;
    border-radius: 25px;
  }
  
  .suggestion_span--group{
    display: flex;
    flex-direction: column;
  }
  .suggestion_span--follow_profile--action{
    font-weight: 700;
    color: white;
    margin-left: auto;
    padding: 4px 1rem;
    background-color: rgb(0, 0, 0);
    border-radius: 25px;
  }
</style>