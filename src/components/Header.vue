<template>
     <v-app-bar
      app
      flat
    >
    <router-link tag="div" to="/" class="d-flex align-center text-h4" >
      Job<b>Board</b>
    </router-link>
      <v-spacer></v-spacer>
      <v-btn
      color="primary"
        elevation="2"
        rounded
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
