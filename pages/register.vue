<template>
    <section class="section">
        <div class="container">
            <b-notification
            v-if="error"
            type="is-danger"
            aria-close-label="Close notification"
            role="alert">
           {{error}}
    </b-notification>   
    <br> 
           <div class="box box-shadow-lift" style="box-shadow: #ffffff 0 7px 25px 0;">
                 <div class="columns is-multiline">
                    <div class="column">
                    <div class="columns">
                        <div class="column left" style="boarder-right:4px">
                         
                              <h1 class="title is-1">Send Users to YouTube app in one click</h1>
                              <br>
                               <h3 class=" subtitled subtitle has-text-grey is-5 has-text-weight-normal is-family-Segoe UI">
            Sign up for absolutely free
            </h3>
                        </div>
                    
        
        
         <div class="column right ">

             <b-field >
            <b-input v-model="userInfo.name"
            
            icon="account"
             required
             placeholder="Enter your Full Name"></b-input>
                 </b-field>

        <b-field >
           
            <b-input type="email"
                value="john@"
                maxlength="30"
                icon="email"
                 required=true
                placeholder="Enter your Email"
                v-model="userInfo.email">
            </b-input>
        </b-field>
           <b-field>
            <b-input type="password"
                icon="lock"
                 required
                v-model="userInfo.password"
                placeholder="Create a strong password"
                password-reveal>
            </b-input>
        </b-field>
   
       

        

      
          
            <b-button @click="registerForm(userInfo)" type="is-primary is-light">Register</b-button>
            </div>
        </div>
        </div>
        </div>
                    </div>
                    </div>
                   
     
    </section>
</template>

<script>

    export default {
       
        data() {
            return {
                isLoading: false,
                userInfo:{

                    name: null,
                    email:null,
                    password:null
                },
                error:null,
                 }   
            },
        methods:{
            async registerForm(userInfo){
                
                try{
                    this.isLoading = true;
                    await this.$axios.post('users/signup',userInfo)

                    await this.$auth.loginWith('local',{
                            data:userInfo
                        })
                     this.isLoading = false;

                    this.$router.push('/')
                }
                catch(e){
                     this.isLoading = false;
                     if(e.response.data.error){
                         return this.error = e.response.data.error
                     }
                   this.error = e.response.data
                }

       
        }
    },

    }
</script>

<style scoped>
    
    
        
    
    .left {
      border-right: 5px solid black;
    }
      @media only screen and (max-width: 600px) {
          .left {
      border-right: 0px;
    }
      }  
    .left .title {
      font-weight: 800;
      letter-spacing: -2px;
    }

    .left .colored {
      color: var(--brandColor);
      font-weight: 500;
      margin-top: 1rem !important;
      letter-spacing: -1px;
    }

    .left p {
      color: var(--textLight);
      font-size: 1.15rem;
    }
</style>