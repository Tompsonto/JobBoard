<template>


 <router-link tag="div" v-bind:to="'job/'+items.id" class="item-div" >
          <td> 
            <v-img src="http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png" 
              max-height="250"
              max-width="250"></v-img>
          </td>
          <td> 
            {{items.position_name}}
          </td>
          <td>  
            {{items.location}}
          </td>
          <td> 
            {{items.salary[0]}} - {{items.salary[1]}} 
          </td>
          <td>
             5 days ago
          </td>
   </router-link>  
</template>

<script>
  export default {
    name: 'JobItem',
     props: ['items'],
  }
</script>

<style scoped>
.item-div{
  width:100%;
      justify-content: space-between;
    display: flex;
    align-items: center;
}

</style>