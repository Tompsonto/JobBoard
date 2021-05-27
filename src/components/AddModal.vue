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
      <v-form >
    <!--company fields-->
      <v-row>
        <v-col cols="3">

        </v-col>
        <v-col cols="6" >
         <v-text-field
            v-model="firstname"
            :rules="nameRules"
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
            v-model="firstname"
            :rules="nameRules"
            label="Position name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="4">
            <v-select v-model="category_select" :items="this.$store.state.categories" label="category"> </v-select>
        </v-col>

        <v-col cols="3">
            <v-select v-model="category_select" :items="this.$store.state.lvl" label="Lvl"> </v-select>
        </v-col>
      </v-row>

     <!--position details-->  
      <v-row>
        <v-col cols="4" >
          <v-select v-model="category_select" :items="this.$store.state.locations" label="Location"> </v-select>
        </v-col>

        <v-col cols="8">
          <v-range-slider
          hint="Im a hint"
          max="100"
          min="-100"
          ></v-range-slider>
        </v-col>
      </v-row>
      <!--full desc-->
      <v-row>
        <v-col cols="12">
         <vue-editor ></vue-editor>
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
            @click="this.openModal"
          >
            Add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
  export default {
    name: 'AddModal',
    data(){
      return{
        url:null
      }
    },
    components: {
      VueEditor
    },
    methods:{
      openModal(){
        this.$store.commit("addModal")
      }
    },
     onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
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
