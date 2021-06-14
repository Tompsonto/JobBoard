<template>
<v-container>

   <v-container class="mx-auto" max-width="75%"  style="margin-top:25px">
    <div v-for="item in filteredData" :key="item.index" style="display:flex; flex-direction:column">
      <JobItem :items="item"/>
    </div>

</v-container>
</v-container>

</template>

<script>
import {db} from '../firebaseConfig.js'
import JobItem from './JobItem.vue'
export default {
    props:['category','location','level'],
    name: 'JobList',
    data(){
      return{
        items:[],
        filteredItems:null
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
        this.category = 'All'
    this.location = 'All'
    this.level = 'All'
  },

 computed: {
    filteredData: function() {
      let resultData = this.items
      if (this.category !== 'All') {
        resultData = resultData.filter(job => job.category === this.category)
      }
      if (this.location !== 'All') {
        resultData = resultData.filter(job => job.location === this.location)
      }

      if (this.level !== 'All') {
        resultData = resultData.filter(job => job.lvl === this.level)
      }
      return resultData
    },
  }

  
  }
</script>
