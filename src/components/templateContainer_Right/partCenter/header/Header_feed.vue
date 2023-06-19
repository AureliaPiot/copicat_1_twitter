
<template>

  <h1>{{ title }}</h1>

  <div class="header_group">
    <a href="#" @click="setForYou" class="header_group--forYou selected"  ref="header_foryou">
      Pour vous
    </a>
    <a href="#" @click="setFollwed" class="header_group--followed" ref="header_followed">
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
    setForYou:function(){
      // console.log(this.$refs.header_foryou)
      
      if(! this.$refs.header_foryou.classList.contains('selected')){
        this.$refs.header_foryou.classList.add('selected')
        this.$refs.header_followed.classList.remove('selected')
      }
    },
    setFollwed:function(){
      // console.log(this.$refs.header_followed)
      if(! this.$refs.header_followed.classList.contains('selected')){
        this.$refs.header_followed.classList.add('selected')
        this.$refs.header_foryou.classList.remove('selected')

      }
    }
   
  },
}
</script>

<style  scoped>
h1{
  padding: 0.5rem 0;
  padding-left: 0.6rem;
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

