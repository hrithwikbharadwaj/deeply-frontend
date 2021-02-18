<template>

  
  <div v-if="$auth.loggedIn">
    <!-- TITLE -->
    <section class="section " >
    <h2 class="subtitle home-hero"> Hello {{loggedInUser.name}} </h2>
 
      
    </section>

    <!-- FORM FOR SHORTENING -->

    <section>
       {{shorturl}}
        <b-notification
            v-if="error"
            type="is-danger"
            aria-close-label="Close notification"
            role="alert">
           {{error}}
     </b-notification> 


          <b-field label="URL" maxlength="50">
            <b-input required v-model="urlData.longURL"></b-input>
        </b-field>

         <b-field label="Slug(optional)">
            <b-input  v-model="urlData.slug"></b-input>
        </b-field>
        <b-button @click="shortenURL(urlData)" type="is-primary is-light">Shorten</b-button>
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
  data(){
    return{
      error:null,
      urlData:{

        longURL:"",
        slug:null,
        
      },
      shorturl:""
    }
  },
  name: 'HomePage',

  components: {
    Card
  },
  methods:{
    async shortenURL(urlData){
     try{
      let res=  await  this.$axios.post('url/shorten',urlData)
      console.log(res.data.shortUrl)
     this.shorturl= res.data.shortUrl
     }
     catch(e){
         this.error = e.response.data
     }
    }
  }
}
</script>
