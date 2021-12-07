<template>
<v-card
  elevation="2" style="margin-top:15px; padding:15px"
  outlined
  tile>
  <router-link tag="div" v-bind:to="'job/'">
    <v-row align="center" justify="left">
      <v-col cols="1"></v-col>
      <v-col cols="2" >
        <v-img src="https://i.imgur.com/pUu50ym.png" 
              max-height="100"
              max-width="100"></v-img>
      </v-col>
      <v-col cols="5"  >
        <p class="text-h4 position">{{feed.positionName}}</p>  
        <p class="text-h6 position">Warsaw</p>  
      </v-col>
      <v-col cols="4" >
        
        <p class="text-h5 green--text salary">100- 500 PLN </p>
      </v-col>
    </v-row>
  </router-link>
</v-card>
</template>

<script>
  export default {
    name: 'JobItem',
     props: ['feed'],
  }
</script>

<style scoped>
.salary, .position{
  margin:0px;
}
</style>