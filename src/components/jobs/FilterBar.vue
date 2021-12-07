<template>
<v-container>
      <v-row>
        <v-col cols="1">

        </v-col>
        <v-col cols="3" >
          <v-select  :items="depts" label="category"> </v-select>
        </v-col>
        <v-col cols="3">
          <v-select  :items="lvls" label="Level"> </v-select>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'FilterBar',
    data(){
      return{
       depts:{},
       lvls:{},
       exp:'All',
       position:'All'
      }
    },
  mounted(){
    this.depts = this.$store.state.filters.categories,
    this.lvls = this.$store.state.filters.lvl
  },




  }
</script>
