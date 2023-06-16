import { defineStore } from 'pinia'

export const useAppDataStore = defineStore('appdata',  {
    state: () => ({
        usersArray: null,
        PostsArray:null,
        date : new Date(),
        monthName :[
          "janvier", "fevrier", "mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"
        ],
      }),
    getters: { //computed of the store
      // setPostDataElements(state){
        
      // }
    },
    actions: {//methods of the store
      async fetchUser(){
        this.usersArray = require('@/stores/JSONUserData.json');
        return  this.usersArray ;
    },
      async fetchPost(){
        this.PostsArray = require('@/stores/JSONPostData.json');

        this.PostsArray.forEach((element)=>{
          element.userId = Math.round(Math.random()*3)
          element.post_date = this.date.getDate() +" " +this.monthName[this.date.getMonth()],
          element.post_stat.like = Math.round(Math.random()*1000),
          element.post_stat.retweet = Math.round(Math.random()*1000),
          element.post_stat.comment = Math.round(Math.random()*1000),
          element.post_stat.action = Math.round(Math.random()*1000)
        })

        return  this.PostsArray ;
    }
      
    },
})