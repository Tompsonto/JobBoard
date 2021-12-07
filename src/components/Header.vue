<template>
     <v-app-bar
      app
      flat
      class="blue-grey lighten-5"
    >
    <router-link tag="div" to="/" class="d-flex align-center text-h4" >
      Job<b>Board</b>
    </router-link>
      <v-spacer></v-spacer>
      <router-link tag="div" to="/addjob" class="d-flex align-center text-h4" >
            <v-btn
      color="primary"
        elevation="2"
        rounded
        @click="this.openModal"
       
      >Add job</v-btn>
      </router-link>

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
