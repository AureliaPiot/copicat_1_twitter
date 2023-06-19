<template>
  <div ref="containerFeed" class="tfeed">
    <templateHeader/>

    <FeedNewPost/>
    <FeedThread />
  
  </div>
</template>
 
 <script>
 // @ is an alias to /src
import templateHeader from  '@/components/templateContainer_Right/partCenter/template_header.vue';

  import FeedThread from '@/components/templateContainer_Right/partCenter/TFeedThread.vue';
  import FeedNewPost from '@/components/templateContainer_Right/partCenter/TFeedNewPost.vue';


 export default {
   name: 'templateFeed',
   components: {
    templateHeader,
    FeedThread,
    FeedNewPost
  },
   props: {
   //   msg: String
   },
   methods: {//ici les methodes
    },
  //  mounted(){
  //       console.log(this)
  //   }
 }
 </script>

<style scoped>
.tfeed{
  /* width: 45%; */
  /* height: fit-content; */
  position:relative;
  flex: 1;
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;


}


 </style>
