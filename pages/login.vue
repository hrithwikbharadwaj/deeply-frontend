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
        <b-field label="Email"
            >
            <b-input type="email"
                value="john@"
                maxlength="30"
                v-model="userInfo.email">
            </b-input>
        </b-field>
   
       

        <b-field label="Password">
            <b-input type="password"
                v-model="userInfo.password"
                password-reveal>
            </b-input>
        </b-field>

       <div class="buttons">
          
            <b-button @click="loginForm(userInfo)" type="is-primary is-light">Login</b-button>
            </div>
    </div>
    </section>
</template>

<script>

    export default {
        
        methods:{
        async loginForm(userInfo){
      try{

          await this.$auth.loginWith('local',{
              data:userInfo
          })
           await this.$router.push('/');
      }
       catch(e){
          
            this.error = e.response.data
       }
}
        },
        data() {
            return {
                userInfo:{

                    name: 'John Silver',
                    email:"hyrdy@gmail.com",
                    password:"test123"
                },
                error:null
            }
        }
    }
</script>