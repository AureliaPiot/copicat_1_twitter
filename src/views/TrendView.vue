<template>


    <section class="template_Nav " >
      <templateNav />
    </section>
  
    <section class="part_right " @scroll="handleScroll">
      
  <!-- part center --------------------------------------------->
  
      <div ref="containerFeed" class="tfeed">
        <templateHeader :title="title"/>
  
        <templateNavTendanceContainerList :limit='limit_Tendance'/>

  
      </div>
  
  <!-- part right --------------------------------------------->
  
  
      <div class="lightBlue tNavTendance " ref="containerTendance">
  
        <div class="container_Tendance">
  
          <!-- <searchBar/> -->
  
  
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
  import templateNavTendanceContainerList from '@/components/templateContainer_Right/partRight/containerTendance.vue';
  
  // --
  
  // import searchBar from '@/components/templateContainer_Right/partRight/SearchBar.vue'
  import templateNavSuggestion from '@/components/templateContainer_Right/partRight/suggestion.vue';
  import ContainerLinkMetaData from '@/components/templateContainer_Right/partRight/ContainerLinkMetaData.vue'
  
  
  
  
  export default {
  name: 'HomeView',
  components: {
  templateNav,
  // --
  templateHeader,
  
  templateNavTendanceContainerList,
  
  // --
  
  
  // searchBar,
  templateNavSuggestion,
  ContainerLinkMetaData,
  },
  data(){
  return{
    title:"Explorer",
    limit_Tendance:20,
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
  width: 30%;
  justify-content: end;
  border-right: 1px solid #eff3f4;
  padding:  0 0.5rem;
  }
  .part_right{
  width: 70%;
  }
  
  .tfeed{
  
  position:relative;
  flex: 1;
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
  
  
  }
  .tfeed .container_liste{
    background: transparent;
    border-radius: 0;
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