<template>

    <div class="container-fluid ">
      <section class="template_Nav lightRed" >
        <templateNav />
      </section>

      <section class="template_Feed lightBlue ">
        <templateFeed />
        <templateNavTendance />

      </section>
    </div>

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
  border-left: 1px solid rgb(202, 202, 202);
  padding:  0 3rem;
}
.template_Feed{
  width: 70%;
}


.lightRed{
  background-color: rgba(255, 0, 0, 0.144);

}
.lightBlue{
  background-color: rgba(0, 0, 255, 0.151);
}
</style>