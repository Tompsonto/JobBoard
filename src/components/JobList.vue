<template>
<v-container>
<v-container>
      <v-row>
        <v-col cols="1">

        </v-col>
        <v-col cols="3" >
          <v-select v-model="select_category" :items="categories" label="category"> </v-select>
        </v-col>

        <v-col cols="3">
          <v-select v-model="select_city" :items="cities" label="location"> </v-select>
        </v-col>

        <v-col cols="3">
          <v-select v-model="select_lvl" :items="lvls" label="Level"> </v-select>
        </v-col>

         <v-col cols="2">
           <v-btn @click="filter">Search</v-btn>
         </v-col>
      </v-row>
  </v-container>
  
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
    name: 'JobList',
    data(){
      return{
        select_category:null,
        select_city:null,
        select_lvl:null,
        categories:[
          'Frontend',
          'Backend',
          'Tester'
        ],
        cities: [
          'Warszawa',
          'Wroclaw',
          'Łodz',
          'Poznan',
        ],
        lvls:[
          'Intern',
          'Junior',
          'Mid',
          'Senior'
        ],
        orders:[
          'Created at',
          'Job title',
          'Company name'

        ],
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
  },
 computed: {
    filteredData: function() {
      let resultData = this.items
      if (this.select_category) {
        resultData = resultData.filter(job => job.category === this.select_category)
      }
      if (this.select_city) {
        resultData = resultData.filter(job => job.location === this.select_city)
      }

      if (this.select_lvl) {
        resultData = resultData.filter(job => job.lvl === this.select_lvl)
      }
      return resultData
    },
    
  }

  
  }
</script>
