<template>
  <v-card class="mx-auto" max-width="100%" tile>
 <v-simple-table>
    <template v-slot:default>
      <tbody>
        <tr>
         <td> 
             <v-img src="http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png" 
              max-height="250"
              max-width="250"></v-img>
         </td>
         <td> 
           <div class="text-h2"> {{feed.position_name}}</div>
          </td>
          <td> 
            {{feed.location}}
          </td>
          <td>
             {{feed.createdOn}}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <v-container>
    {{feed.desc}}
  </v-container>
  <v-btn>Apply</v-btn>
  </v-card>
</template>

<script>
import {db} from '../firebaseConfig.js'
export default {
    name: 'Job',
    data(){
      return{
        page:this.$route.params.id,
        feed:null
      }
    },
    mounted(){
      db.collection("products").doc(this.page)
      .get()
      .then((doc) =>{
        this.feed = doc.data()
      })

    }
  
  
  }
</script>
