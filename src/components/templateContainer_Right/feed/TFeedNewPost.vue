<template>
    <div class="lightBlue tfeedNewPost">
      <div>
        <div class="post_profile--img"></div>
      </div>
      <div>
        <div class="post_header">
          <p>User Name</p>
          <p>@User Tag</p>
          <p>date</p>
        </div>

        <div class="post_content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint sapiente provident dignissimos! Cumque numquam exercitationem sed sapiente doloremque labore modi, repudiandae excepturi tempore enim quod qui officia velit molestias?</p>
        </div>

        <div class="post_stat">

        </div>
      </div>
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
  .post_content{

  }
  .post_stat{

  }
   </style>
   