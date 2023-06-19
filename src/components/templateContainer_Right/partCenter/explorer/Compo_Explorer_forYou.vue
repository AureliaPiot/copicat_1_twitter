
<template>
<ul class="container_liste">
    <li class="Explorer_list--title">
      <h5 >Tendance pour vous</h5>
    </li>
    <li class="Explorer_list--item" v-for="element in elements" :key="element">
      <a class="Explorer_list--link" :href="'http://localhost:8080/#/explorer/'+element.tendance_name">       
        <span class="Explorer_span--type">{{ element.tendance_type }}</span>
        <span class="Explorer_span--name">{{ element.tendance_name }}</span>
        <span class="Explorer_span--number">{{ element.tweet_number }}K Tweet</span>
      </a>
      
    </li>
    <li class="Explorer_list--more">
        <a href="#">
          <p>Voir plus</p>
        </a>
    </li>
</ul>
</template>

<script>
export default {
  name: 'Compo_Explorer_forYou',
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
h5{
  font-size: large;
  font-weight: bold;
}
.Explorer_list--title {
  font-weight: 900 !important;
  padding: 0.45rem 1rem;

}

.Explorer_list--item a{
  display: flex;
  flex-direction: column;
  padding: 0.45rem 1rem;

  /* text-align: initial; */
}
a:hover{
  background: rgba(0, 0, 0, 0.055);
}

.Explorer_list--more > a{
    color: #1d9bf0;
    display: block;
    padding: 12px ;
 }

.Explorer_span--type , .Explorer_span--number{
  font-size: small;
  font-weight: 300;
}
.Explorer_span--name{
  /* font-size: larger; */
  font-weight: 700;
}
</style>

