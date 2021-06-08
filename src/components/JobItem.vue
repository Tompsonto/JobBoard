<template>
<v-card
  elevation="2" style="margin-top:15px; padding:15px"
  outlined
  tile>
  <router-link tag="div" v-bind:to="'job/'+items.id">
  
    <v-row align="center" justify="left">
      <v-col cols="1"></v-col>
      <v-col cols="2" >
        <v-img :src="items.image" 
              max-height="100"
              max-width="100"></v-img>
      </v-col>
      <v-col cols="5"  >
        <p class="text-h4 position">{{items.position_name}}</p>  
        <p class="text-h6 green--text salary">{{items.salary[0]}} - {{items.salary[1]}} PLN </p>
      </v-col>
      <v-col cols="4" >
        <p class="text-h5 position">{{items.location}}</p>  
      </v-col>
    </v-row>
  </router-link>
</v-card>

 <!--<router-link tag="v-card" v-bind:to="'job/'+items.id" class="mx-auto" >
          <td> 
            <v-img src="http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png" 
              max-height="250"
              max-width="250"></v-img>
          </td>
          <td> 
            {{items.position_name}}
          </td>
          <td>  
            {{items.location}}
          </td>
          <td> 
            {{items.salary[0]}} - {{items.salary[1]}} 
          </td>
          <td>
             5 days ago
          </td>
   </router-link>  -->
</template>

<script>
  export default {
    name: 'JobItem',
     props: ['items'],
  }
</script>

<style scoped>
.salary, .position{
  margin:0px;
}
</style>