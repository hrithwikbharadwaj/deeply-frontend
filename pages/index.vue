<template>
  
  <!-- Content for Logged in users  -->
  <div v-if="$auth.loggedIn">
    
    <section class="section " >
      <div class="content">
    <h2 class="subtitle home-hero"> Hello {{loggedInUser.name}} </h2>
      </div>
 
      
    </section>
    <div class="container">
<div class="column ">
    <!-- FORM FOR SHORTENING START -->
    

   
    <section>
      <!-- Notifications Start -->
        <b-notification
            v-if="error"
            type="is-danger"
            aria-close-label="Close notification"
            role="alert">
           {{error}}
     </b-notification> 
     <b-notification
            v-if="copiedText"
            type="is-success"
            aria-close-label="Close notification"
            role="alert">
           {{copiedText}}
    </b-notification>
    <b-notification
            v-if="shared"
            auto-close type="is-info is-light"
            aria-close-label="Close notification"
            role="alert">
           {{shared}}
    </b-notification>
 <b-loading  v-model="isLoading" ></b-loading>
<!-- Notification Section END -->

          <b-field label="URL" maxlength="50">
            <b-input required
             v-model="urlData.longURL"
              icon-right="clipboard"
              icon-right-clickable
              @icon-right-click="copyItem"></b-input>
        </b-field>

         <b-field label="Slug(optional)">
            <b-input  v-model="urlData.slug"></b-input>
        </b-field>
        <b-button @click="shortenURL(urlData)" type="is-primary is-light">Shorten</b-button>
        
         
        
    </section>
    
</div>
  </div>
  </div>
  <!-- If not Loged in  -->
<div v-else>
    <section class="section " >
      <div class="content">
        <div class="container">
          <div class="columns">
              <div class="column" animation="fade">
                <h1> Boost Engagement </h1> 
                  <p> on your YouTube Channel with one click </p>
                   <div class="buttons">
           <nuxt-link to="register"> <b-button type="is-danger">Get Started</b-button></nuxt-link>
           </div>
              </div>
              <div class="column" animation="fade" >
                   <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1602691361972/tzUp6E9OQ.gif" alt="" class="home__img">
              </div>
            
          </div>
         
      
        
  
            

         </div>
      </div> 
    </section>
    
</div> 
 
</template>
<style scoped>
.columns.is-vcentered {
 -webkit-box-align: center;
     -ms-flex-align: center;
        align-items: center;
}

body {
  font-family: 'montserrat';
  
  
}
</style>
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
      shared:null,
      copiedText:"",
      isLoading: false,
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
  mounted(){
    if(this.$route.query.videolink!=undefined){
      this.urlData.longURL=this.$route.query.videolink;
      this.shared="Add a slug and press shorten"
    }
    else{
     
    }
  },
  methods:{
    async copyItem(){
      
    
      
        if (!navigator.clipboard) {
          // Clipboard API not available
          return
        }
        try {
          const text = await navigator.clipboard.readText();
          this.urlData.longURL = text
          
        } catch (err) {
          console.error('Failed to copy!', err)
       
     }
    },
  //  async  pasteItem(copiedUrl){
  //     console.log("working copyurl");
  //           if (!navigator.clipboard) {
  //         // Clipboard API not available
  //         return
  //       }
  //       const text = copiedUrl
  //       try {
  //         await navigator.clipboard.writeText(text)
  //         this.copiedText = `Copied ${copiedUrl} to clipboard`;
  //       } catch (err) {
  //         console.error('Failed to copy!', err)
  //       }
  //   },
      
    async shortenURL(urlData){
     try{
       console.log("hello")
       this.isLoading = true
       
      let res=  await  this.$axios.post('url/shorten',urlData)
      
     this.shorturl= res.data.shortUrl
     const text = this.shorturl
     
        try {
          await navigator.clipboard.writeText(text)
          this.isLoading = false
          this.copiedText = `Copied ${this.shorturl} to clipboard`;
        } catch (err) {
          console.error('Failed to copy!', err)
        }
     }
     catch(e){
       this.isLoading = false
         this.error = e.response.data
     }
    }
    },
  }

</script>
