<template>
    <article class="post_template">
        <div class="post_part-left">
            <div class="post_profile--img" 
            :style="{ backgroundImage: `url( ${require('@/assets/img/profile/' +this.userPostInfo[0].userData.user_img)} )` }"></div>
        </div>

        <div class="post_part-right">
            <div class="post_header">
                <div class="post_header--data">

                    <p>{{this.userPostInfo[0].userData.user_pseudo}}</p>
                    <p>@{{this.userPostInfo[0].userData.user_tag}}</p>

                    <p>{{this.dataInfo.post_date}}</p>
                </div>
                <div class="post_header--action">
                    <p>...</p>
                </div>
            </div><!-- post_header -->
<!-- ---- -->
            <div class="post_content">
                <p>{{this.dataInfo.post_content}}</p>    
            </div>
<!-- ---- -->

            <div class="post_media--container"  v-if="this.dataInfo.post_image !== null">
                <img :src="require(`@/assets/img/post/${this.dataInfo.post_image}`)" alt="illustration">
            </div>
<!-- -----    -->
            <div class="post_stat">
                <ul>
                    <li class="post_stat--comment">
                        <i class="bi bi-chat"></i>
                        <p>{{ this.dataInfo.post_stat.comment }}</p>
                    </li>
                    <li class="post_stat--retweet">
                        <i class="bi bi-crop"></i>
                        <p>{{ this.dataInfo.post_stat.retweet }}</p>

                    </li>
                    <li class="post_stat--like">
                        <i class="bi bi-heart" v-if="this.dataInfo.post_stat.like %2 == 0"></i>
                        <i class="bi bi-heart-fill" v-else></i>
                        <p>{{ this.dataInfo.post_stat.like }}</p>
                        
                    </li>
                    <li class="post_stat--action">
                        <i class="bi bi-reception-3"></i>
                        <p>{{ this.dataInfo.post_stat.action }}</p>

                    </li>
                    <li class="post_stat--share">
                        <i class="bi bi-share"></i>
                    </li>
                </ul>
                
            </div>

        </div>
    </article>


</template>
   
   <script>

   // @ is an alias to /src

   export default {
     name: 'templatePost',
     props: {
      dataInfo: Object,
      userPostInfo : Object,
     },
     computed:{

      },
     mounted(){
        // console.log(this.dataInfo)

        // console.log(this.dataInfo.post_image)
     }

   }
   </script>
   
  
   <style scoped>

  .post_template{
    display: flex;
    gap: 1rem;
    padding: 10px 16px;
    border-top: 1px solid #eff3f4;
    border-bottom: 1px solid #eff3f4;

   }
   .post_part-right{
       flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
   }
   .post_profile--img{
    width: 3rem;
    height: 3rem;
    border-radius: 25px;
    background-size: contain;
  }
   .post_header{
    display: flex;
    justify-content: space-between;
   }
   .post_header--data{
    display: flex;
   }

   .post_media--container{
    max-height: 510px;
    width: fit-content;
    border-radius: 25px;
    overflow: hidden;
   }
   .post_media--container >img{
    max-height: inherit;
    height: 100%;
    width: auto;
   }


   .post_stat{
    margin-top: 10px;
   }
   .post_stat ul {
    max-width: 425px;
    display: flex;
    justify-content: space-between;
   }
   .post_stat ul>li {
    display: flex;
    gap: 1rem;
   }
   </style>
   