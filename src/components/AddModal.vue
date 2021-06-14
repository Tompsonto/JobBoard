<template>
 <div class="text-center">
    <v-dialog
      v-model="this.$store.state.add"
      style="width:90vw"
      @click:outside="this.openModal">

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Add new Job!
        </v-card-title>

<v-container>
  <v-form 
    v-model="valid"
    lazy-validation
    @submit.prevent>
    <v-row>
      <v-col cols="5">
        <v-row>
          <v-col cols="12">
             <p class="text-h4 position">Company details</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
             <v-text-field
            v-model="job.company_name"
            :rules="companyNameRule"
            label="Company name"
            required
          ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
           <v-col cols="12 image">
             <img class="preview" v-if="temp" :src="temp" />
             <img class="preview"  v-else />
           <input type="file" @change="uploadImage" />
        </v-col>
       </v-row>
      <v-row>
          <v-col cols="12">
             <p class="text-h4 position">Offer details</p>
          </v-col>
        </v-row>
       <v-row>
         <v-col cols="12">
            <v-text-field
            v-model="job.position_name"
            label="Position name"
            required
          ></v-text-field>
         </v-col>
       </v-row>

        <v-row>
         <v-col cols="12">
            <v-select required v-model="job.category" :items="this.$store.state.categories" label="category"> </v-select>
         </v-col>
       </v-row>

        <v-row>
         <v-col cols="12">
             <v-select required v-model="job.lvl" :items="this.$store.state.lvl" label="Lvl"> </v-select>
         </v-col>
       </v-row>

        <v-row>
         <v-col cols="12">
            <v-select required v-model="job.location" :items="this.$store.state.locations" label="Location"> </v-select>
         </v-col>
       </v-row>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="5">
        <v-row>
          <v-col cols="12">
             <p class="text-h4 position">Offer describtion</p>
          </v-col>
        </v-row>
         <v-row>
          <v-col cols="12">
             <vue-editor v-model="job.desc" style="height:100%"></vue-editor>
          </v-col>
        </v-row>
        
      </v-col>
    </v-row>
  </v-form>
</v-container>


 <!-- <v-container>
    <v-form @submit.prevent >
     <v-row>
        <v-col cols="3">
        </v-col>

        <v-col cols="6" >
         
        </v-col>

        <v-col cols="3"> 
        </v-col>
 
      </v-row>

      <v-row>
        <v-col cols="3">
        </v-col>

        <v-col cols="6 image">
             <img class="preview" v-if="temp" :src="temp" />
             <img class="preview"  v-else />
           <input type="file" @change="uploadImage" />
        </v-col>

        <v-col cols="3">
        </v-col>

      </v-row>
    
    <v-row>
        <v-col cols="5" >
         <v-text-field
            v-model="job.position_name"
            label="Position name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="4">
            <v-select required v-model="job.category" :items="this.$store.state.categories" label="category"> </v-select>
        </v-col>

        <v-col cols="3">
            <v-select required v-model="job.lvl" :items="this.$store.state.lvl" label="Lvl"> </v-select>
        </v-col>
      </v-row>

   <v-row>
        <v-col cols="4" >
          <v-select required v-model="job.location" :items="this.$store.state.locations" label="Location"> </v-select>
        </v-col>


        <v-col cols="1">
         <span>
            {{job.salary[0]}}
          </span>
        </v-col>
        <v-col cols="6">
       
          <v-range-slider
          hint="Salary range"
           step="10"
          max="50000"
          min="500"
          v-model="job.salary"
         
          >
          </v-range-slider>
           
        </v-col>
        <v-col cols="1">
         <span>
            {{job.salary[1]}}
          </span>
        </v-col>
      </v-row>
    
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
        </v-card-actions>-->
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {fb, db} from '../firebaseConfig.js'
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
            location:null,
            salary: [1000, 5000],
            desc:null,
            createdOn: new Date(),
        },
        temp:null,
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
        this.temp = URL.createObjectURL(this.file);
      },

    async addJob(){
        let storageRef = fb.storage().ref('logos/'+this.file.name);
        let uploadTask = storageRef.put(this.file)

      await uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=>{
          this.job.image = downloadURL
          console.log(downloadURL)
        })
          
       await db.collection("jobs").add(this.job)
          .then(function() {
            console.log("Document successfully written!");
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          })

          this.openModal
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
