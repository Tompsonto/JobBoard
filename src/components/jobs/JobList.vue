<template>
<v-container>

   <v-container class="mx-auto" max-width="75%"  style="margin-top:25px">
   <div v-for="item in items" :key="item.index" style="display:flex; flex-direction:column">
      <JobItem :feed="item"/>
    </div>

</v-container>
</v-container>

</template>

<script>

import JobItem from './JobItem.vue'
export default {
    props:['category','location','level'],
    name: 'JobList',
    data(){
      return{
        items:[],
      }
    },
    components:{
        JobItem
    },

  created(){
    this.$store.dispatch('getAllJobs')
    this.items = this.$store.state.jobs.allJobs
  },


  
  }
</script>
