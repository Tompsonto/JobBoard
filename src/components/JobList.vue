<template>
   <v-card class="mx-auto" max-width="100%" tile>
    <div v-for="item in items" :key="item.index" style="display:flex; flex-direction:column">
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

  mounted(){
    db.collection("products").orderBy('createdOn').onSnapshot(snapshot =>{
      snapshot.forEach(doc =>{
        let job = doc.data()
        job.id = doc.id
        this.items.push(job)
      })
    })
  }
  
  }
</script>
