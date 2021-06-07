<template>
 <div class="text-center">
    <v-dialog
      v-model="this.$store.state.add"
      width="700"
      @click:outside="this.openModal">

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
             <img class="preview" v-if="job.image" :src="job.image" />
             <img class="preview"  v-else />
           <input type="file" @change="uploadImage" />
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
import {fb,db} from '../firebaseConfig.js'
import { VueEditor } from "vue2-editor";

  export default {
    name: 'AddModal',
    data(){
      return{
        job:{
            company_name:null,
            image:null,
            position_name:null,
            category:null,
            logo:null,
            location:null,
            salary: [1000, 5000],
            desc:null,
            createdOn: new Date(),
        },
        file:null
      }
    },
    components: {
      VueEditor
    },
    methods:{
      openModal(){
        this.$store.commit("addModal")
      },

      uploadImage(e){
         this.file = e.target.files[0];
         this.job.image = URL.createObjectURL(this.file);
        //let storageRef = fb.storage().ref('logos/'+file.name);

      // let uploadTask =  storageRef.put(file);
      },

      addJob(){
          db.collection("products").add(this.job)
            .then(function() {
                console.log("Document successfully written!");
                })
            .catch(function(error) {
                console.error("Error writing document: ", error);
              });

            
            const storageRef = fb.storage().ref(`${this.file.name}`).put(this.file);
            storageRef.on(`state_changed`, snapshot=>{
              this.uploadValue = (snapshot.bytesTranferred/snapshot.totalBytes)*100;
            }, error=>{
              console.log(error.message)},
            ()=>{this.uploadValue=100;
              storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                this.job.image = url
              });
              }
              );
      
   
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
  object-fit: cover;
  margin:15px;
  background: gray;
}

</style>
