<template>
 <div class="text-center">
    <v-dialog
    v-model="this.$store.state.add"
      width="700"
      @click:outside="this.openModal"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Add new Job!
        </v-card-title>

  <v-container>
    <v-form @submit.prevent >
    <!--company fields-->
      <v-row>
        <v-col cols="3">
        </v-col>

        <v-col cols="6" >
         <v-text-field
            v-model="job.company_name"
            label="Company name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="3"> 
        </v-col>
 
      </v-row>

      <v-row>
        <v-col cols="3">
        </v-col>

        <v-col cols="6 image">
          <div class="preview"></div>
           <input type="file" />
        </v-col>

        <v-col cols="3">
        </v-col>

      </v-row>
    
   <!--position basics-->  
      <v-row>
        <v-col cols="5" >
         <v-text-field
            v-model="job.position_name"
            label="Position name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="4">
            <v-select v-model="job.category" :items="this.$store.state.categories" label="category"> </v-select>
        </v-col>

        <v-col cols="3">
            <v-select v-model="job.lvl" :items="this.$store.state.lvl" label="Lvl"> </v-select>
        </v-col>
      </v-row>

     <!--position details-->  
      <v-row>
        <v-col cols="4" >
          <v-select v-model="job.location" :items="this.$store.state.locations" label="Location"> </v-select>
        </v-col>

        <v-col cols="8">
          <v-range-slider
          hint="Salary range"
          max="50000"
          min="500"
          v-model="job.salary"
          ></v-range-slider>
        </v-col>
      </v-row>
      <!--full desc-->
      <v-row>
        <v-col cols="12">
         <vue-editor v-model="job.desc"></vue-editor>
        </v-col>
      </v-row>
  </v-form>
  </v-container>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="this.addJob"
          >
            Add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {db} from '../firebaseConfig.js'
import { VueEditor } from "vue2-editor";
  export default {
    name: 'AddModal',
    data(){
      return{
        job:{
            company_name:null,
            url:null,
            position_name:null,
            category:null,
            lvl:null,
            location:null,
            salary: [1000, 5000],
            desc:null
        }
      }
    },
    components: {
      VueEditor
    },
    methods:{
      openModal(){
        this.$store.commit("addModal")
      },

      onFileChange(e) {
        const file = e.target.files[0];
        this.job.url = URL.createObjectURL(file);
      },
      addJob(){
          db.collection("products").add(this.job)
            .then(function() {
                console.log("Document successfully written!");
                })
            .catch(function(error) {
                console.error("Error writing document: ", error);
              });
      }
    }
  }
</script>

<style>
.image{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image .preview{
  width:100px;
  height:100px;
  background: gray;
  margin:15px;
}

</style>
