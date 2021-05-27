<template>
  <v-app-bar>
    <v-form >
    <v-container>
      <v-row>
        <v-col cols="3" >
          <v-select v-model="category_select" :items="categories" label="category"> </v-select>
        </v-col>

        <v-col cols="3">
          <v-select v-model="city_select" :items="cities" label="location"> </v-select>
        </v-col>

        <v-col cols="3">
          <v-select v-model="lvl_select" :items="lvls" label="Level"> </v-select>
        </v-col>

         <v-col cols="1">
           <v-btn>Search</v-btn>
         </v-col>
      </v-row>
    </v-container>
  </v-form>
    </v-app-bar>
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
    }
  }
</script>
