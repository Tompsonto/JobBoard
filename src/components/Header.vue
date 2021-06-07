<template>
     <v-app-bar
      app
      color="primary"
      dark
    >
    
         <router-link tag="div" to="/" class="d-flex align-center" >
          JobBoard
         </router-link>
      

      <v-spacer></v-spacer>
      <v-btn
      color="primary"
        elevation="2"
        @click="this.openModal"
      >Add job</v-btn>
    </v-app-bar>
</template>

<script>


  export default {
    name: 'Header',
    methods:{
      openModal(){
        this.$store.commit("addModal")
      },
    }
  }
</script>
