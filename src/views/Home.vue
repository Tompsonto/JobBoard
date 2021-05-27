<template>
  <div>
    <AddModal/>
    <FilterBar/>
    <JobList/>
  </div>
</template>

<script>
  
  import FilterBar from '../components/FilterBar.vue'
  import JobList from '../components/JobList.vue'
  import AddModal from '../components/AddModal.vue'
  export default {
    name: 'Home',

    components: {
      FilterBar,
      JobList,
      AddModal
    },
  }
</script>
