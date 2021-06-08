<template>
   <v-container class="mx-auto" max-width="75%"  style="margin-top:25px">
    <div v-for="item in items" :key="item.index" style="display:flex; flex-direction:column">
      <JobItem :items="item"/>
    </div>


  </v-container>
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

  mounted(){
    db.collection("jobs").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) =>{
        let job = doc.data()
        job.id = doc.id
        this.items.push(job)

      })
    }).catch(function(error) {
    console.log("Error getting document:", error);
  });
 }
  
  
  }
</script>
