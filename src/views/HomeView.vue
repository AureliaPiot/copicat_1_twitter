<template>

    <!-- <div class="container-fluid "> -->
      <section class="template_Nav lightRed" >
        <templateNav />
      </section>

      <section class="template_Feed lightBlue " @scroll="handleScroll">
        <templateFeed ref="feedTemplate"/>
        <templateNavTendance ref="tendanceTemplate" />

      </section>
    <!-- </div> -->

</template>

<script>
// @ is an alias to /src
import templateNav from '@/components/templateContainer_Left/templateNav.vue'
import templateNavTendance from '@/components/templateContainer_Right/templateNavTendance.vue'
import templateFeed from '@/components/templateContainer_Right/templateFeed.vue'


export default {
  name: 'HomeView',
  components: {
    templateNav,
    templateNavTendance,
    templateFeed
  },
  data(){
    return{
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
    this.feedTemplate = this.$refs.feedTemplate.$refs.containerFeed;
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
  padding:  0 3rem;
}
.template_Feed{
  width: 70%;
}




</style>