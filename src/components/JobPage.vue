<template>
  <v-card max-width="95%" tile style="margin: 45px auto">
  <v-container>
    <v-row align="center" justify="left">
      <v-col cols="1"></v-col>
      <v-col cols="2" >
        <v-img :src="feed.image" 
              max-height="100"
              max-width="100"></v-img>
      </v-col>
      <v-col cols="4"  >
        <p class="text-h4 position">{{feed.position_name}}</p>  
        <p class="text-h6 green--text salary">{{feed.salary[0]}} - {{feed.salary[1]}} PLN </p>
      </v-col>
      <v-col cols="4" >
        <p class="text-h5 position">{{feed.location}}</p>  
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-container>
         <p v-html="feed.desc"></p> 
        </v-container>
      </v-col>
    </v-row>
  </v-container>
  <v-btn color="primary" large >Apply</v-btn>
  </v-card>
</template>

<script>
import {db} from '../firebaseConfig.js'
export default {
    name: 'Job',
    data(){
      return{
        page:this.$route.params.id,
        feed:null
      }
    },
    mounted(){
      db.collection("jobs").doc(this.page)
      .get()
      .then((doc) =>{
        this.feed = doc.data()
      })

    }
  
  
  }
</script>
