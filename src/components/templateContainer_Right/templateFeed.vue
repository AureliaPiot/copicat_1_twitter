<template>
  <div class="tfeed">

    <FeedNewPost />
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
  // props:[

  // ],
   props: {
   //   msg: String
   }
 }
 </script>

<style scoped>
.tfeed{
  width: 45%;
  height: fit-content;
}

 </style>
