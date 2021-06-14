<template>
<v-container>
      <v-row>
        <v-col cols="1">

        </v-col>
        <v-col cols="3" >
          <v-select v-model="category_select" :items="categories" v-on:change="$emit('category', category_select)" label="category"> </v-select>
        </v-col>

        <v-col cols="3">
          <v-select v-model="city_select" :items="cities" v-on:change="$emit('city', city_select)" label="location"> </v-select>
        </v-col>

        <v-col cols="3">
          <v-select v-model="select_lvl" :items="lvls" v-on:change="$emit('lvl', select_lvl)" label="Level"> </v-select>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'FilterBar',
    data(){
      return{
        city_select: 'All',
        lvl_select:'All',
        category_select:'All',
        categories:[
          'Frontend',
          'Backend',
          'Tester',
          'All'
        ],
        cities: [
          'Warszawa',
          'Wroclaw',
          'Łodz',
          'Poznan',
          'All'
        ],
        lvls:[
          'Intern',
          'Junior',
          'Mid',
          'Senior',
          'All'
        ]
      }
    },





  }
</script>
