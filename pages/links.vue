<template>
    
<section class="section">
     
        <div class="container">
           <h2> Here are some of your Links that you have created.</h2>
           <br>
            <b-table
            :data="loggedInUser.urls"
        
            :striped="isStriped"
           
            :hoverable="isHoverable"
        
            :focusable="isFocusable"
            :mobile-cards="hasMobileCards">

            <b-table-column field="id" label="Host" width="40" numeric v-slot="props">
                {{ props.row.host }}    
            </b-table-column>

          
        
            <b-table-column field="first_name" label="Slug" v-slot="props" >
                <nuxt-link :to="props.row.slug">
                {{ props.row.slug }}
                </nuxt-link>
            </b-table-column>
        

              <b-table-column field="Deep Link" label="Deep Link" v-slot="props">
                {{ props.row.shortUrl }}
            </b-table-column>


           

            

        </b-table>
 
        </div>
</section>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        
        return{
                users:null,
                isStriped: true,
                isHoverable: true,
                isFocusable: true,
                hasMobileCards: true,
                userLinks:null
        }
    },
    computed:{
    ...mapGetters(['isAuthenticated', 'loggedInUser']) 
    
    },
    methods:{   
        
    },
    created(){
       
    // try{
    //     this.$axios.$get(`users/${this.loggedInUser._id}`).then(res=>{
        
    //     this.users=res.url
    //     console.log(this.users)
    //     }).catch()
    // }
    // catch(error){
    //   console.log(error.message)
    // }
}
}
</script>
                
                
               
              
            