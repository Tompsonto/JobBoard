<template>
   <v-card class="mx-auto" max-width="100%" tile>
       <JobItem/>
       <JobItem/>
       <JobItem/>
  </v-card>
</template>

<script>
import JobItem from './JobItem.vue'
export default {
    name: 'JobList',
    components:{
        JobItem
    }
  }
</script>
