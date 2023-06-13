<template>
  <ul class="container_nav  ligth-red">
    <li>
      <ul class="container_list ">
        <li id="home" class="d-flex justify-content-start">
          <a href="/"><i class="bi bi-twitter"></i></a>
        </li>
        <li id="nav_accueil">
          <i class="bi bi-house"></i>
          <p>accueil</p>
        </li>
        <li id="nav_explorer">
          <i class="bi bi-hash"></i>
          <p>explorer</p>
        </li>
        <li id="nav_notification ">
          <i class="bi bi-bell"></i>
          <p>notification</p>
        </li>
        <li id="nav_messages">
          <i class="bi bi-envelope"></i>
          <p>messages </p>
        </li>
        <li id="nav_listes">
          <i class="bi bi-card-list"></i>
          <p>listes</p>
        </li>
        <li id="nav_signets">
          <i class="bi bi-bookmark"></i>
          <p>signets</p>
        </li>
        <li id="nav_twitterBlues">
          <i class="bi bi-twitter"></i>
          <p>twitter blues</p>
        </li>
        <li id="nav_profile">
          <i class="bi bi-person"></i>
          <p>profile</p>
        </li>
        <li id="nav_plus">
          <i class="bi bi-three-dots"></i>
          <p>plus</p>
        </li>
        <li id="nav_tweeterAction" class="btn_action--newTweet d-flex justify-content-center text-white rounded-pill bg-primary py-3 fw-bold">
          <p>tweeter</p>
        </li>
      </ul>
    </li>

    <li>
      <ul class="p-0">
        <li id="nav_null" class="d-flex justify-content-center ">
          <p>profile</p>
        </li>
      </ul>
    </li>

   
  </ul>
</template>
  
<script>
export default {
  name: 'templateNav',
  props: {
    //   msg: String
  },
  data(){ return{//ici les proprietes du composant

  }},

  methods: {//ici les methodes

  },

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container_nav  {
  height: 100%;
  width: 43%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}
.container_list{
  width: 100%;
  display: flex;
  gap: 0.7rem;
  flex-direction: column;
  justify-content: flex-start;
}

.btn_action--newTweet{
  padding: 1rem 0 ;
  display: flex;
  justify-content: center;
  font-weight: bold;
  text-transform:capitalize;
  color: white;
  border-radius: 25px;
  background-color: #1d9bf0;
}

li {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  font-weight: 400;
  text-transform: uppercase;
}

li i {
  font-weight: 600;
  font-size: 1.8rem;
}
</style>
  