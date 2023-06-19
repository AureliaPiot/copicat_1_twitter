<template>
    <div class="lightBlue feedthread">
        <templatePost :userPostInfo="arrayUser.filter(user => user.id === post.userId)"  :dataInfo="post" v-for="post in arrayPost" :key="post.post_id" />

    </div>
</template>
   
   <script>
// @ is an alias to /src
import templatePost from  '@/components/templateContainer_Right/partCenter/template_post.vue';
import { useAppDataStore } from '@/stores/appData.js'


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
       
      }
     },//data
     computed:{
      storeAppData(){
        return useAppDataStore()
      },
      arrayUser(){
        return this.storeAppData.usersArray
      },
      arrayPost(){
        return this.storeAppData.PostsArray
      },
      // setPost(){
      //  let array = [];
      //   this.arrayPost.forEach((element)=>{
      //     console.log(element.userId)
      //     console.log(this.arrayUser.filter(user => user.id === element.post_id))
      //     array.push(element)
      //   })
      //   return array;

      // },
      
     },
     mounted(){

    },

    beforeMount(){

      // setTimeout(()=>{
      //   // console.log(this.arrayPost)
      //   // console.log(this.arrayUser)
      //   // this.setPost;
      // },300)
      }

   }
   </script>
   
  
   <style scoped>
  
   </style>
   