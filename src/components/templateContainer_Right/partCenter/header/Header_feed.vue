
<template>

  <h1>{{ title }}</h1>

  <div class="header_group">
    <a href="#" class="header_group--forYou selected">
      Pour vous
    </a>
    <a href="#" class="header_group--followed">
      Abonnement
    </a>

  </div>
</template>

<script>
export default {
  name: 'header_feed',
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

<style  scoped>
h1{
  padding: 0.5rem 0;
}
.header_group{
  display: flex;
}
.header_group--forYou , .header_group--followed{
  flex: 1;
  text-align: center;
  padding: 1rem;
}
.header_group--forYou:hover , .header_group--followed:hover{
background: rgba(36, 36, 36, 0.082);
}
.selected{
  font-weight: 800;
  position: relative;
}
.selected::after{
  content: "";
  display: block;
  width: 40%;
  height: 7px;
  position: absolute;
  bottom: 0;
  right: 30%;
  background: #1d9bf0;
  border-radius: 55px;
}


</style>

