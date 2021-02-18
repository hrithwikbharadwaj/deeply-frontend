<template>
    
<section class="section">
     
        <div class="container">
          <div class="card">
  <div class="card-content">
    <div class="content">
      Original URL : {{slugDetails.longURL}}
    </div>
     
  </div>
</div>
 
<br>
        <div class="card">
        <div class="card-content">
            <div class="content">
            Short URL : {{slugDetails.shortUrl}}
            </div>
            
        </div>
        </div>
      </div>
             
          
       
</section>
</template>

<script>
  export default {
    async asyncData({ params, $axios }) {
      const slugDetails = await $axios.$get(`users/link/${params.slug}`)
      return { slugDetails }
    }
  }
</script>