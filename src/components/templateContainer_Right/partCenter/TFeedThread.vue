<template>
    <div class="lightBlue h-100 tfeedthread">
        <templatePost :dataInfo="posts" v-for="n in 20" :key="n" />
    </div>
</template>
   
   <script>
// @ is an alias to /src
import templatePost from  '@/components/templateContainer_Right/partCenter/template_post.vue';


   export default {
     name: 'FeedThread',
     components:{
      templatePost
     },
     props: {
     //   msg: String
     },
     data(){
      return{
        date : new Date(),
        monthName :[
          "janvier", "fevrier", "mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"
        ],
        postData : {
          userData : {
            user_img:null,
            user_pseudo:null,
            user_tag:null,
          },
          post_date :null,
          post_content : null,
          post_stat :{
            like:null,
            retweet:null,
            comment:null,
            action:null
          }
        }
      }
     },//data
     computed:{
      posts(){
        return{
              userData : {
                user_img:null,
                user_pseudo:"blabla",
                user_tag:"blublu",
              },
              post_date :this.date.getDate() +" " +this.monthName[this.date.getMonth()],
              post_content :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum illo praesentium eum velit! Voluptate repellendus, quasi a ab corrupti cupiditate culpa vero tenetur dolorum mollitia iste nobis quibusdam molestias minus",
              post_stat :{
                like:Math.round(Math.random()*1000),
                retweet:Math.round(Math.random()*1000),
                comment:Math.round(Math.random()*1000),
                action:Math.round(Math.random()*1000)
              }
            }
          
      }//posts
     }

   }
   </script>
   
  
   <style scoped>
  
   </style>
   