
<template>
  <div class="header_center">

    <header_Feed :title="title" v-if="title === 'Accueil'"/>
    <header_explorer :title="title" v-if="title === 'Explorer'"/>
    <header_messages :title="title" v-if="title === 'Messages'"/>
    <header_trend :title="title" v-if="title === 'Trend'"/>



  </div>
</template>

<script>
import header_Feed from '@/components/templateContainer_Right/partCenter/header/Header_feed.vue'
import header_explorer from '@/components/templateContainer_Right/partCenter/header/Header_explorer.vue'
import header_messages from '@/components/templateContainer_Right/partCenter/header/Header_messages.vue'
import header_trend from '@/components/templateContainer_Right/partCenter/header/Header_trend.vue'

export default {
  name: 'templateHeader',
  created() {

  },
  components:{
    header_Feed,
    header_explorer,
    header_messages,
    header_trend,



  },
  data() {
    return {
    }
  },
  props: {
    title: String
   
  },
  methods: {
   
  },
  mounted(){
    console.log(this.title)
  }
}
</script>

<style scoped>
.header_center{
position: sticky;
top: 0;
/* padding: 0 0.6rem; */
background: #ffffffed;
-webkit-backdrop-filter: blur(8px);
backdrop-filter: blur(8px);

}
</style>

