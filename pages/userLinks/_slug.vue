<template>
    
<section class="section">
   <div class="container">
     
      <div class="box">
          
         <LinkDetails :slugDetails="slugDetails" />
      
      </div>

      <!-- Traffic Details for new users  -->
      <div v-if=slugDetails.trafficByCity.length> 
      <div class="box" >
        <div class="card">
           <div class="card-content">
        
            <div class="content" >
          <center>  <h2> Traffic By City </h2> </center>
        </div>
           </div>
        </div>
       
        <b-table :data=slugDetails.trafficByCity>
       
           <b-table-column label="City" centered v-slot="props" >
           
            {{ props.row[0] }}
            </b-table-column> 
              
             <b-table-column label="Country" centered  v-slot="props" >
               {{ props.row[1] }}
            </b-table-column>
             <b-table-column label="Traffic" centered  v-slot="props" >
                {{ props.row[2] }}
            </b-table-column>
           
        </b-table>
        </div>
      </div>
     
       
      
    
    
          
  </div> 
</section>
</template>

<script>
  export default {
    data(){
      return{
          traffic:[["Mysore","IN",1],["Cleveland","US",1]]
      }
    },
    async asyncData({ params, $axios }) {
      const slugDetails = await $axios.$get(`users/link/${params.slug}`)
      return { slugDetails }
    }
  }
</script>
