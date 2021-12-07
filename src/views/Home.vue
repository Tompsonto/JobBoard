<template>
  <div class="blue-grey lighten-5" style="min-height:100vh;">
    <FilterBar />
    <JobList/>
  </div>
</template>

<script>
  
  import FilterBar from '../components/jobs/FilterBar.vue'
  import JobList from '../components/jobs/JobList.vue'

  export default {
    name: 'Home',
    components: {
      FilterBar,
      JobList,
    },
    data(){
      return{}
    }
  }
</script>
