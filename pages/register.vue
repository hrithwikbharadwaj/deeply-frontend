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
        <b-field label="Name">
            <b-input v-model="userInfo.name"></b-input>
        </b-field>

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

      
          
            <b-button @click="registerForm(userInfo)" type="is-primary is-light">Register</b-button>
            </div>
     
    </section>
</template>

<script>

    export default {
       
        data() {
            return {
                isLoading: false,
                userInfo:{

                    name: 'John Silver',
                    email:"hyrdy@gmail.com",
                    password:"test123"
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
                   this.error = e.response.data
                }

       
        }
    },

    }
</script>