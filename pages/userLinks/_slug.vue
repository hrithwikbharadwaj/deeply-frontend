<template>
    
<section class="section">
   <div class="container">
     
      <div class="box">
          
         <LinkDetails :slugDetails="slugDetails" />
      
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
