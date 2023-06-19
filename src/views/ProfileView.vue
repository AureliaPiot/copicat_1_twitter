<template>


      <section class="template_Nav " >
        <templateNav />
      </section>

      <section class="template_Feed ">
      </section>


</template>

<script>
// @ is an alias to /src
import templateNav from '@/components/templateContainer_Left/templateNav.vue'


export default {
  name: 'ProfileView',
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
  flex: 1;
  justify-content: end;
  border-right: 1px solid #eff3f4;
  padding:  0 0.5rem;
}

.template_Feed{
  flex: 2.25;

}

</style>