<template>

    <!-- <div class="container-fluid "> -->
      <section class="template_Nav " >
        <templateNav />
      </section>

      <section class="part_right " @scroll="handleScroll">
        
<!-- part center -->
        <div ref="containerFeed" class="tfeed">
          <templateHeader :title="title"/>

          <FeedNewPost/>
          <FeedThread />

        </div>
<!-- part right -->


        <templateNavTendance ref="tendanceTemplate" />

      </section>
    <!-- </div> -->

</template>

<script>
// @ is an alias to /src
import templateNav from '@/components/templateContainer_Left/templateNav.vue'
// --
import templateHeader from  '@/components/templateContainer_Right/partCenter/template_header.vue';
import FeedNewPost from '@/components/templateContainer_Right/partCenter/home/Compo_FeedNewPost.vue';
import FeedThread from '@/components/templateContainer_Right/partCenter/home/Compo_FeedThread.vue';
// --
import templateNavTendance from '@/components/templateContainer_Right/templateNavTendance.vue'
// import templateFeed from '@/components/templateContainer_Right/templateFeed_Center.vue'
 



export default {
  name: 'HomeView',
  components: {
    templateNav,
    // --
    templateHeader,
    FeedNewPost,
    FeedThread,
    // --
    templateNavTendance,

  },
  data(){
    return{
      title:"Accueil",
      
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
    // recupe des containers enfants a partir du parent
    this.feedTemplate = this.$refs.containerFeed;
    console.log(this.feedTemplate)

    this.tendanceTemplate = this.$refs.tendanceTemplate.$refs.containerTendance;
    console.log(this.tendanceTemplate)

  }



}
</script>
<style scoped>
.container-fluid{
  width: 100Vw;
  display: flex;
}
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


</style>