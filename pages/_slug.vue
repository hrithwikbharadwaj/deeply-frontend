<template>
    
<section class="section">
     
        <div class="container">
            {{slugDetails}}
            Hello from apka jags
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