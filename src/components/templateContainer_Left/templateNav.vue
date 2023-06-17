<template>
  <ul class="container_nav  ligth-red">
    <li>
      <ul class="container_list ">
        <li id="home" >
          <a href="http://localhost:8080/#/"><i class="bi bi-twitter"></i></a>
        </li>
        <li id="nav_accueil">
          <a href="http://localhost:8080/#/">
            <i class="bi bi-house"></i>
            <p>accueil</p>
          </a>
        </li>
        <li id="nav_explorer">
          <a href="http://localhost:8080/#/explorer">
            <i class="bi bi-hash"></i>
            <p>explorer</p>
          </a>
        </li>
        <li id="nav_notification ">
          <a href="http://localhost:8080/#/notification">
            <i class="bi bi-bell"></i>
            <p>notification</p>
          </a>
        </li>
        <li id="nav_messages">
          <a href="http://localhost:8080/#/message">
            <i class="bi bi-envelope"></i>
            <p>messages </p>
          </a>
        </li>
        <li id="nav_listes">
          <a href="http://localhost:8080/#/list">
            <i class="bi bi-card-list"></i>
            <p>listes</p>
          </a>
        </li>
        <li id="nav_signets">
          <a href="http://localhost:8080/#/signet">
            <i class="bi bi-bookmark"></i>
            <p>signets</p>
          </a>
        </li>
        <li id="nav_twitterBlues">
          <a href="#">
            <i class="bi bi-patch-check"></i>
            <p>certifé</p>
          </a>
        </li>
        <li id="nav_profile">
          <a href="http://localhost:8080/#/profile">
            <i class="bi bi-person"></i>
            <p>profile</p>
          </a>
        </li>
        <li id="nav_plus">
          <a href="#">
            <i class="bi bi-three-dots"></i>
            <p>plus</p>
          </a>
        </li>
        <li id="nav_tweeterAction" class="btn_action--newTweet d-flex justify-content-center text-white rounded-pill bg-primary py-3 fw-bold">
          <p>tweeter</p>
        </li>
      </ul>
    </li>

    
    <li>
      <!-- <ul class="">
        <li id="nav_null" class="d-flex justify-content-center ">
          <p>profile</p>
        </li>
      </ul> -->
      <TemplateContainerProfile/>
    </li>

   
  </ul>
</template>
  
<script>
import  TemplateContainerProfile from '@/components/templateContainer_Left/TemplateContainerProfile.vue'
export default {
  name: 'templateNav',
  components: {
    TemplateContainerProfile,
  },
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
#home{
  color: #1d9bf0;
}
#nav_plus a i{
  border: 2px solid black;
  border-radius: 22px;
  width: 2rem;
  height: 2rem;
  display: flex;
  font-size: small;
  justify-content: center;
  align-items: center;
}
.container_nav  {
  height: 100%;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}
.container_list{
  width: 100%;
  display: flex;
  gap: 0.3rem;
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
  border-radius: 45px;
  background-color: #1d9bf0;
}

li , a{
  display: flex;
  gap: 1.5rem;
  align-items: center;
  font-weight: 400;
  text-transform: capitalize;
}
li a {
  padding: 0.5rem 0.8rem;
}
a:hover{
  border-radius: 45px;
  background: rgba(15, 15, 32, 0.068);
}

li i {
  font-weight: 600;
  font-size: 1.8rem;
}
</style>
  