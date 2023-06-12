<template>
    <div class="lightBlue tfeedNewPost">
    </div>

</template>
   
   <script>
   // @ is an alias to /src

   export default {
     name: 'FeedNewPost',
     props: {
     //   msg: String
     }
   }
   </script>
   
  
   <style scoped>
   .tfeedNewPost{
    display: flex;
    gap: 1rem;
   }
  .post_profile--img{
    width: 3rem;
    height: 3rem;
    background: blue;
    border-radius: 25px;
  }
  .post_header{
    display: flex;

  }
  /* .post_content{

  }
  .post_stat{

  } */
   </style>
   