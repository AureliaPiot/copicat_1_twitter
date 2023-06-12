<template>
  <div ref="containerFeed" class="tfeed">

    <FeedNewPost/>
    <FeedThread />
  
  </div>
</template>
 
 <script>
 // @ is an alias to /src
  import FeedThread from '@/components/templateContainer_Right/feed/TFeedThread.vue';
  import FeedNewPost from '@/components/templateContainer_Right/feed/TFeedNewPost.vue';


 export default {
   name: 'templateFeed',
   components: {
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
  flex: 1;
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;


}


 </style>
