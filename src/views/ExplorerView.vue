<template>

    <!-- <div class="container-fluid "> -->
      <section class="template_Nav lightRed" >
        <templateNav />
      </section>

      <section class="template_Feed lightBlue ">

<!-- part center -->
        <div ref="containerFeed" class="tfeed">
            <templateHeader :title="title"/>

        </div>
<!-- part right -->
        <templateNavTendance ref="tendanceTemplate" />

      </section>
    <!-- </div> -->

</template>

<script>
// @ is an alias to /src
import router from '@/router/';

import templateNav from '@/components/templateContainer_Left/templateNav.vue'
import templateNavTendance from '@/components/templateContainer_Right/templateNavTendance.vue'


export default {
  name: 'ExplorerView',
  router,
  components: {
    templateNav,
    templateNavTendance,
  },
  data(){
    return{
      title:"explorer"
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
.template_Feed{
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