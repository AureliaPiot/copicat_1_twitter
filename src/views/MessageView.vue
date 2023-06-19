<template>


    <section class="template_Nav " >
      <templateNav />
    </section>

    <section class="part_right " @scroll="handleScroll">
      
<!-- part center --------------------------------------------->

      <div class="tfeed_message">
        <templateHeader :title="title"/>



      </div>

<!-- part right --------------------------------------------->


      <div class="lightBlue container_Right " >

      </div>

    </section>


</template>






<script>
// @ is an alias to /src
import templateNav from '@/components/templateContainer_Left/templateNav.vue'

// --

import templateHeader from  '@/components/templateContainer_Right/partCenter/template_header.vue';

// --





export default {
name: 'HomeView',
components: {
  templateNav,
  // --
  templateHeader,

  // --


},
data(){
  return{
    title:"Messages",
    limit_Tendance:5,
    limit_Suggest:3,

    feedTemplate: null,
    tendanceTemplate:null
  }
},
methods:{    

  
}
,mounted(){


}



}
</script>
<style scoped>

section{
height: 100vh;
overflow-x: hidden;
overflow-y: scroll;
display: flex;
}
.template_Nav{
  flex: 1;
/* width: 30%; */
justify-content: end;
border-right: 1px solid #eff3f4;
padding:  0 0.5rem;
}
.part_right{
  flex: 2.25;

/* width: 70%; */
}

.tfeed_message{

position:relative;
flex: 1;
height: 100vh;
overflow-y: scroll;
scrollbar-width: none;


}
/* ------------- */
.container_Right{

flex: 2;

border-left: 1px solid #eff3f4;

padding:  0 3rem;

height: 100vh;
overflow-y: scroll;
scrollbar-width: none;

}


</style>