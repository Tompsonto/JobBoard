<template>
  <div class="blue-grey lighten-5" style="min-height:100vh;">
    <AddModal/>
    <FilterBar v-on:category="cat = $event" v-on:city="loc = $event" v-on:lvl="levl = $event" />
    <JobList :category="cat" :location="loc" :level="levl"/>
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
    data(){
      return{
        cat:null,
        levl:null,
        loc:null,
      }
    }
  }
</script>
