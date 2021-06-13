<template>
<div></div>
</template>

<script>
  export default {
    name: 'FilterBar',
    data(){
      return{
        city_select: null,
        lvl_select:null,
        category_select:null,
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
        ]
      }
    },
    methods:{
      filter(){
        this.$emit(this.city_select, this.lvl_select, this.category_select)
      }
    }
  }
</script>
