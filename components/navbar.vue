<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../static/richurl.png"
                    alt="Create Deep Links for YouTube"
                >
            </b-navbar-item>
        </template>
        

        <template #end>
            <b-navbar-item tag="div">
                <div v-if="isAuthenticated">
                    <a href="https://twitter.com/intent/tweet?text=Check%20out%20https%3A%2F%2Frichurl.tech%2Fcreate%20by%20%40HSBTechYt%20which%20helps%20you%20create%20deep%20links%20for%20%40YouTube%20and%20%40amazon%20for%20FREE!">
                       <b-button class="button is-link"> <strong>Share on Twitter</strong></b-button>
                    </a>
                    <nuxt-link :to="`/${loggedInUser._id}`">
                     <b-button class="button is-primary"> My Links </b-button>
                    </nuxt-link>
                    
        
    
                     <b-button @click="logout" class="logoutStyle"> Logout </b-button>
                 
                </div>

                <div v-else>
                <div class="buttons">
                    <nuxt-link to ="/register">
                  
                       <b-button class="button is-danger"> <strong>Sign up</strong></b-button>
                    
                    </nuxt-link>
                    
                    <nuxt-link to ="/login">
                       <b-button class="button is-light" style="margin-left: 20px;"> Log in</b-button> 
                   
                    </nuxt-link>
                    
                </div>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template> 
<style scoped>

     @media only screen and (max-width: 600px) {
          .logoutStyle {
      margin-top: 20px;
    }
    
}
</style>
<script>
import { mapGetters } from 'vuex'


export default {
   computed:{
  ...mapGetters(['isAuthenticated', 'loggedInUser']) 

  },
  data(){
    return{
      
  }
  },
  methods:{
      async logout(){
          console.log('here')
          try{

              await this.$auth.logout();
               this.$router.push('/');
          }
          catch(e){
              console.log(e)
          }
          
      }
  }
  
  
}
</script>
