
<template>
  <div class="header_center">
    <h1>{{ title }}</h1>
   
  </div>
</template>

<script>
export default {
  name: 'templateHeader',
  created() {

  },
  data() {
    return {
      title:"accueil",
    }
  },
  props: {
   
  },
  methods: {
   
  },
}
</script>

<style scoped>
.header_center{
width: 100%;
position: fixed;
background: aquamarine;

}
</style>

