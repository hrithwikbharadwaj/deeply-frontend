<template>

  
  <div v-if="$auth.loggedIn">
    <section class="section is-medium" >
    <h2> hello {{loggedInUser.name}} </h2>
    </section>
  </div>
  
  <div v-else>
    <section>
      <h1> rich url </h1> 
      <p> Create Deep Links in seconds </p>
  <div class="buttons">
    
           <nuxt-link to="register"> <b-button type="is-primary">Get Started</b-button></nuxt-link>
   </div>
    </section>

    </div> 
 
</template>

<script>
import { mapGetters } from 'vuex'
import Card from '~/components/Card'

export default {
   computed:{
  ...mapGetters(['isAuthenticated', 'loggedInUser']) 

  },
  name: 'HomePage',

  components: {
    Card
  }
}
</script>
