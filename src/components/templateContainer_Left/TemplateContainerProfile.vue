
<template>
      <ul class="nav_profile">
        <li class="nav_profile--container">

          <div class="nav_profile--imgProfile"></div>

          <div class="nav_profile--userName">
            <p class="nav_profile--userName--pseudo">profile_pseudo</p>
            <p class="nav_profile--userName--tag">@ profile_tag</p>
          </div>

          <div class="nav_profile--action">
            <i class="bi bi-three-dots"></i>
          </div>

        </li>
      </ul>
</template>

<script>
export default {
  name: 'TemplateContainerProfile',
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

<style scoped>
.nav_profile{
  margin: 1rem 0;
  width: 100%;
  cursor: pointer;
 }
 .nav_profile--container{
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem 0.8rem;
 }
 .nav_profile--container:hover{
  border-radius: 45px;
  background: rgba(15, 15, 32, 0.068);
}
 .nav_profile--imgProfile{
   height: 2.3rem;
   width: 2.3rem;
   border-radius: 25px;
   background-color: #1d9bf0;
 }
 .nav_profile--userName--pseudo{
  font-weight: 700;
 }
 .nav_profile--action{
  align-self: center;
  font-weight: 900;
  margin-left: auto;
 }
</style>

