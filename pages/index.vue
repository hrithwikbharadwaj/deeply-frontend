<template>
  
  <!-- Content for Logged in users  -->
  <div v-if="$auth.loggedIn">
    
    <section class="section " >
       
      <div class="content">
        <div class="container">
          <center> 
         <div class="box">

         <p>
            Create FREE Deep Links which you can share with your audience.
           </p>
            <p> Paste your link or click on the clipboard icon to get started.    </p>
         </div></center>
        </div>
     
      </div>
 
      
    </section>
    <div class="container">
<div class="column ">
    <!-- FORM FOR SHORTENING START -->
    

   
    <section >
      <!-- Notifications Start -->
        <b-notification
            v-if="error"
            type="is-danger"
             auto-close
            aria-close-label="Close notification"
            role="alert">
           {{error}}
     </b-notification> 
     <b-notification
            v-if="copiedText"
             auto-close
            type="is-success"
            aria-close-label="Close notification"
            role="alert">
           {{copiedText}}
    </b-notification>
    <b-notification
            v-if="shared"
            auto-close type="is-success is-light"
            aria-close-label="Close notification"
            role="alert">
           {{shared}}
    </b-notification>
 <b-loading  v-model="isLoading" ></b-loading>
<!-- Notification Section END -->

<!-- Form input begin -->


  
<div class="box">
          <b-field label="URL" maxlength="50">
            <b-input required
             v-model="urlData.longURL"
              size="is-medium"
              type="is-primary"
              pack="ionicons"
              icon-right="clipboard "
              icon-right-clickable
             
              @icon-right-click="copyItem"></b-input>
        </b-field>

         <b-field label="Custom Slug(optional)">
            <b-input  v-model="urlData.slug"
             size="is-medium"></b-input>
        </b-field>

        <div class="column is-vcentered">
        <b-button @click="shortenURL(urlData)" type="is-primary is-light is-medium">Generate</b-button>
</div>
        </div>

 <!-- Form input END -->
        
         
        
    </section>
    <div class="dummyBody">
    </div>
    
</div>
  </div>
  </div>






  <!-- Landing Page  -->
<div v-else>
  <body>
    <section class="hero  is-fullheight ">
     <div class="hero-body">
        <div class="container">
          <div class="columns">
              <div class="column" animation="fade">
               <h1 class="title titled is-1 mb-6">
              Boost Engagement
            </h1>
             <h2 class=" subtitled subtitle has-text-grey is-4 has-text-weight-normal is-family-sans-serif">
              on your YouTube Channel with one click.
            </h2>
                  <p> </p>
                   <div class="buttons">
           <nuxt-link to="register"> <b-button  size="is-large" type="is-danger">Get Started</b-button></nuxt-link>
           </div>
              </div>
              <div class="column" animation="fade" >
                   <img src="../static/youtubeEngagement.svg" alt="" class="home__img" style="height:300px">
              </div>
              
             </div> 
             <br>
             <br>
         <!-- End of columns  -->
          <div class="columns">
               <div data-aos="fade-right" class="column">
                   <img src="../static/socialmedia.svg" alt="" class="home__img" style="height:300px">
              </div>
                <div class="column"  >
                  <h3 class="title titled is-5 mb-6" > Install as an PWA </h3>
                  <h1 class="title titled is-1 mb-6"> Directly Share Links
to the app </h1>
   <h2 class=" subtitled subtitle has-text-grey is-4 has-text-weight-normal is-family-Segoe UI">
              on your YouTube Channel with one click.
            </h2>
               <b-button @click="install()" size="is-large" type="is-danger">Install app</b-button>
                </div>
          </div>
      
        
 
            

         </div>
      </div> 
    </section>
  </body>
    
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
      shared:null,
      deferredPrompt:null,
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
  created(){
  
window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
      console.log("am i ther")
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
    });window.addEventListener("appinstalled", () => {
      this.deferredPrompt = null;
    });
  },
  mounted(){
    if(this.$route.query.videolink!=undefined){
      this.urlData.longURL=this.$route.query.videolink;
      this.shared="Link Added 🎉. Please add a slug and press Generate"
    }
    
  },
  methods:{
    async dismiss() {
      this.deferredPrompt = null;
    },
    async install() {
      console.log("came here")
      this.deferredPrompt.prompt();
    },
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

      
    async shortenURL(urlData){
     try{
       
       this.isLoading = true;
       
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




<style lang="scss">
// Import Bulma's core
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,600&display=swap');
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #ec5f68;
$primary-light: findLightColor($primary);
$primary-dark: findDarkColor($primary);
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);
$footer-padding:1.5rem 1.5rem 3rem;
// Lists and maps
$custom-colors: null !default;
$custom-shades: null !default;
$body-background-color:#e5e7eb;
// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: mergeColorMaps(
    (
        "white": (
            $white,
            $black,
        ),
        "black": (
            $black,
            $white,
        ),
        "light": (
            $light,
            $light-invert,
        ),
        "dark": (
            $dark,
            $dark-invert,
        ),
        "primary": (
            $primary,
            $primary-invert,
            $primary-light,
            $primary-dark,
        ),
        "link": (
            $link,
            $link-invert,
            $link-light,
            $link-dark,
        ),
        "info": (
            $info,
            $info-invert,
            $info-light,
            $info-dark,
        ),
        "success": (
            $success,
            $success-invert,
            $success-light,
            $success-dark,
        ),
        "warning": (
            $warning,
            $warning-invert,
            $warning-light,
            $warning-dark,
        ),
        "danger": (
            $danger,
            $danger-invert,
            $danger-light,
            $danger-dark,
        ),
    ),
    $custom-colors
);


// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

</style>

