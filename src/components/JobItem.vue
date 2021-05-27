<template>
    <v-list-item two-line>
      <v-list-item-content>
        <v-row>
        <v-col cols="2" >
            <v-img src="http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png" 
              max-height="250"
              max-width="250"></v-img>
        </v-col>

        <v-col cols="3">
          <v-row>
            <v-col cols="12">
            Junior Manual tester
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
            Warszawa
            </v-col>
            </v-row>
        </v-col>

        <v-col cols="3">
          2500 
        </v-col>

         <v-col cols="1">
          5 days ago
         </v-col>
      </v-row>
      
      </v-list-item-content>
    </v-list-item>
</template>

<script>
  export default {
    name: 'JobItem',

  }
</script>
