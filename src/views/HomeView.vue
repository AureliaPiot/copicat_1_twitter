<template>


      <section class="template_Nav " >
        <templateNav />
      </section>

      <section class="part_right " @scroll="handleScroll">
        
<!-- part center --------------------------------------------->

        <div ref="containerFeed" class="tfeed">
          <templateHeader :title="title"/>

          <FeedNewPost/>
          <FeedThread />

        </div>

<!-- part right --------------------------------------------->


        <div class="lightBlue tNavTendance " ref="containerTendance">

          <div class="container_Tendance">

            <searchBar/>


            <templateNavTendanceContainerList :limit='limit_Tendance'/>

            <templateNavSuggestion :limit='limit_Suggest'/>


            <ContainerLinkMetaData/>

          </div> <!-- container_Tendance -->
        </div>

      </section>


</template>

<script>
// @ is an alias to /src
import templateNav from '@/components/templateContainer_Left/templateNav.vue'

// --

import templateHeader from  '@/components/templateContainer_Right/partCenter/template_header.vue';
import FeedNewPost from '@/components/templateContainer_Right/partCenter/home/Compo_FeedNewPost.vue';
import FeedThread from '@/components/templateContainer_Right/partCenter/home/Compo_FeedThread.vue';

// --

import templateNavSuggestion from '@/components/templateContainer_Right/partRight/suggestion.vue';
import templateNavTendanceContainerList from '@/components/templateContainer_Right/partRight/containerTendance.vue';
import ContainerLinkMetaData from '@/components/templateContainer_Right/partRight/ContainerLinkMetaData.vue'
import searchBar from '@/components/templateContainer_Right/partRight/SearchBar.vue'




export default {
  name: 'HomeView',
  components: {
    templateNav,
    // --
    templateHeader,
    FeedNewPost,
    FeedThread,
    // --

    templateNavTendanceContainerList,
    templateNavSuggestion,
    ContainerLinkMetaData,
    searchBar
  },
  data(){
    return{
      title:"Accueil",
      limit_Tendance:5,
      limit_Suggest:3,

      feedTemplate: null,
      tendanceTemplate:null
    }
  },
  methods:{    
    handleScroll(event){

      // this.tendanceTemplate.scrollTop = event.target.scrollTop;
      this.tendanceTemplate.scrollTop = this.feedTemplate.scrollTop;

      console.log(this.tendanceTemplate )
      console.log(this.tendanceTemplate.scrollTop )

      console.log(this.feedTemplate )
      console.log(this.feedTemplate.scrollTop )

      console.log(event.target.scrollTop )



    }
  }
  ,mounted(){

    this.feedTemplate = this.$refs.containerFeed;
    console.log(this.feedTemplate)

    this.tendanceTemplate = this.$refs.containerTendance;
    console.log(this.tendanceTemplate)

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

.tfeed{

  position:relative;
  flex: 1;
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;


}
/* ------------- */
.tNavTendance{

flex: 1;


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

</style>