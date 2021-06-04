<template>
   <v-card class="mx-auto" max-width="100%" tile>
     <div v-for="item in items" :key="item.index">
       <JobItem :items="item"/>
     </div>

  </v-card>
</template>

<script>
import {db} from '../firebaseConfig.js'
import JobItem from './JobItem.vue'
export default {
    name: 'JobList',
    data(){
      return{
        items:[]
      }
    },
    components:{
        JobItem
    },
    created(){
      db.collection("products").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) =>{
      this.items.push(doc.data());
    })
    }).catch(function(error) {
    console.log("Error getting document:", error);
    });
  }
  
  }
</script>
