<template>
    
<section class="section">
   <div class="container">
     
      <div class="box" id="stylePad">
          
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
       
        <b-table 
        :paginated="isPaginated"
        :per-page="perPage"
        :data=slugDetails.trafficByCity
        :sort-icon="sortIcon"
        :sort-icon-size="sortIconSize"
        :default-sort=slugDetails.trafficByCity[0]>
       
           <b-table-column label="City" centered  v-slot="props">
           
            {{ props.row[0] }}
            </b-table-column> 
              
             <b-table-column label="Country" centered  v-slot="props" >
               {{ props.row[1] }}
            </b-table-column>
             <b-table-column label="Traffic" centered  v-slot="props"  >
                {{ props.row[2] }}
            </b-table-column>
           
        </b-table>
        </div>
      </div>

     
     
       
      
    
    
          
  </div> 
</section>
</template>
<style scoped>
#stylePad{
  padding: 100px;
}
@media only screen and (max-width: 600px) {
          #stylePad{
  padding: 0px;
}
}
</style>
<script>


  export default {
   data() {
      return{
                isPaginated: true,
                perPage: 5,
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
  }
},
    async asyncData({ params, $axios }) {
      const slugDetails = await $axios.$get(`users/link/${params.slug}`)
      
      return { slugDetails }
     
    }
  }
</script>
