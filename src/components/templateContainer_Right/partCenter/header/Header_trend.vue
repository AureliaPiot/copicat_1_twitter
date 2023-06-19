
<template>
  <div class="header_trend">

    <div class="header_group">
      <i class="bi bi-arrow-left"></i>
      <h1>Tendances</h1>
    </div>

    <div class="header_group">
      <i class="bi bi-gear"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header_trend',
  created() {

  },
  data() {
    return {
    }
  },
  props: {
    title: String
   
  },
  methods: {
   
  },
}
</script>

<style  scoped>
.header_trend{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}
.header_group{

  display: flex;
  align-items: center;

}
h1{
  padding-left: 2rem;
}

</style>

