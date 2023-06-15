<template>

    <!-- <div class="container-fluid "> -->
      <section class="template_Nav lightRed" >
        <templateNav />
      </section>

      <section class="template_Feed lightBlue ">
      </section>
    <!-- </div> -->

</template>

<script>
// @ is an alias to /src
import templateNav from '@/components/templateContainer_Left/templateNav.vue'


export default {
  name: 'ExplorerView',
  components: {
    templateNav
  },
  data(){
    return{

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
  padding:  0 3rem;
}
.template_Feed{
  width: 70%;
}

</style>