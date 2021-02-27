<template>
    
  <section class="section">
    
          <div class="container">
              <div v-if="isEmpty === true">
                <div class="box">

                  <p> You have not yet created any rich url. Go create now !</p> <br> P.S "It's FREE"😃 <br> <br>  
                  <nuxt-link to="/"> <b-button type="is-danger" rounded>Home</b-button></nuxt-link>
                </div>
              
              </div>

              <div v-else>
                <ListLinks :values="slugDetails.urls" />
                </div> 
          </div>
  </section>
</template>

<script>
  export default {
     
    
    middleware: 'auth',
     
    async asyncData({ params, $axios }) {
      const slugDetails = await $axios.$get(`users/${params.id}`);
      let isEmpty=true;
      

      if (slugDetails.urls.length!=0) {
        isEmpty=false;
       
      }
      return { slugDetails,isEmpty }
    }
  }
</script>
        
        
       
      
       
      
      