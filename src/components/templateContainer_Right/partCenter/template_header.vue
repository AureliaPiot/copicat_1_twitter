
<template>
  <div class="header_center">

    <header_Feed :title="title" />

  </div>
</template>

<script>
import header_Feed from '@/components/templateContainer_Right/partCenter/header//Header_feed.vue'
export default {
  name: 'templateHeader',
  created() {

  },
  components:{
    header_Feed
  },
  data() {
    return {
      title:"Accueil",
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
position: sticky;
top: 0;
padding: 0 0.6rem;
background: #ffffffed;
-webkit-backdrop-filter: blur(8px);
backdrop-filter: blur(8px);

}
</style>

