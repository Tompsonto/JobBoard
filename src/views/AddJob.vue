<template>
  <div class="text-center">    
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="job.companyName"
            label="Company name"
            required></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-col cols="12 image">
            <img class="preview" v-if="temp" :src="temp" />
            <img class="preview"  v-else />
           <input type="file" />
          </v-col>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4">
        <v-text-field
            v-model="job.positionName"
            label="Position name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="3">
            <v-select required v-model="job.dept" :items="depts" label="category"> </v-select>
        </v-col>
        <v-col cols="3">
            <v-select required v-model="job.lvl" :items="lvls" label="category"> </v-select>
        </v-col>
      </v-row>

      <v-row>
              <v-col cols="12">
             <vue-editor v-model="job.desc" style="height:80%"></vue-editor>
          </v-col>
      </v-row>
    </v-container>
     <v-btn color="secondary" elevation="2" rounded >Cancel</v-btn>
     
      <v-btn color="primary" elevation="2" rounded @click="addJob">Add job</v-btn>
  </div>
</template>

<script>
import {db} from '../firebaseConfig.js'
import { VueEditor } from "vue2-editor";


  export default {
    name: 'AddJob',
    data(){
      return{
        depts:[],
        lvls:[],
        job:{
          companyName:null,
          img:null,
          positionName:null,
          dept:null,
          lvl:null,
          desc:''
        },
        temp:null,
        file:null
      }
    },
    components: {
      VueEditor
    },
  mounted(){
    this.depts = this.$store.state.filters.categories,
    this.lvls = this.$store.state.filters.lvl
  },
  methods:{
   async addJob(){
      await db.collection("jobs").add(this.job)
      .then(function(){
        console.log("Success");
      })
      .catch(function(error) {
        console.error('error', error )
      })
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
