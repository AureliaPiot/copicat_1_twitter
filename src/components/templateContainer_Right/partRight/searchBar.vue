
<template>
  
    <form class="tendance_search">
        <div class="tendance_search--group-input">
          <label for="tendance_search--input"><i class="bi bi-search"></i></label>
          <input id="tendance_search--input" type="text" placeholder=" Recherche Twitter">
        </div>
      </form>

</template>

<script>
export default {
  name: 'searchBar',
  created() {

  },
  data() {
    return {
    }
  },
  props: {
   
  },
  methods: {
   
  },
}
</script>

<style  scoped>
.tendance_search{
  position: fixed;
  top: 0;
  width: 20%;
  /* margin: 0.2rem; */
  padding: 0.3rem;
  background-color: #ffffff;
}
.tendance_search--group-input  input:focus-visible{
  outline: none;
}
.tendance_search--group-input:focus-within {
  outline: 1px solid #1d9bf0;
}
.tendance_search--group-input:focus-within label{
  color: #1d9bf0;
}
.tendance_search--group-input{
  width: 100%;
  border-radius: 25px;
  background-color: #eff3f4;
  padding: 0 1rem;
}

.tendance_search input{
  padding: 0.6rem 0 0.6rem 1rem;

  font-size: 1.1rem;
  background: transparent;
  border: none;
}
</style>

