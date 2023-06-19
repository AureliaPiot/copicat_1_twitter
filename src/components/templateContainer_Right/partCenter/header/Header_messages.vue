
<template>
  <div class="header_message">

    <h1>{{ title }}</h1>
    
    <div class="header_group">
      <i class="bi bi-gear"></i>
      <i class="bi bi-envelope-plus"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header_messages',
  created() {

  },
  data() {
    return {
    }
  },
  props: {
    title : String,
   
  },
  methods: {
   
  },
}
</script>

<style scoped>
.header_message{
  padding: 0.2rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header_group{
  width: 15%;
  display: flex;
  justify-content: space-between;

}
</style>

