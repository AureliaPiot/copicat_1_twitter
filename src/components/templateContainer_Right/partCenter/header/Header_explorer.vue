
<template>

<div class="header_group">

  <form class="header_explorer--form">
    <label for="header_explorer--input"><i class="bi bi-search"></i></label>
    <input type="text" name="header_explorer--input" id="header_explorer--input" placeholder="Recherche Twitter">
  </form>
  <div class="header_explorer--parameters">
    <i class="bi bi-gear"></i>
  </div>
</div>

</template>

<script>
export default {
  name: 'Header_explorer',
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
.header_group{
  padding: 0.2rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header_explorer--form{
  width: 90%;
  height: 3rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;

  border-radius: 55px;
  background-color: #eff3f4;
}
.header_explorer--form:focus-within{
  outline: 1px solid #1d9bf0;

}
.header_explorer--form:focus-within label{
  color: #1d9bf0;
}
.header_explorer--form label{
  margin-right: 1rem;
}
.header_explorer--form input{
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
}
</style>


