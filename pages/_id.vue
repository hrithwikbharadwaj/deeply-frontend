<template>
    
<section class="section">
  
        <div class="container">
          <div v-if="isEmpty === true">
               <p> You have not yet created any rich url. Go create now !</p> <br> P.S "It's FREE"😃 <br> <br>  <nuxt-link to="/"> <b-button type="is-danger" rounded>Rounded</b-button></nuxt-link>
           </div>
           <div v-else>
            <b-notification
            v-if="copiedText"
             auto-close
            type="is-success"
            aria-close-label="Close notification"
            role="alert">
           {{copiedText}}
       </b-notification>
            <h2> Here are some of your Links that you have created. </h2>
           <br>
           
            <b-table
            :data="slugDetails.urls"
        
            :striped="isStriped"
           
            :hoverable="isHoverable"
        
            :focusable="isFocusable"
            :mobile-cards="hasMobileCards"
            @click="detailsRedirect"
           >
  
             <b-table-column field="id" label="Host" width="40" numeric v-slot="props"  >
              <!-- <nuxt-link :to="`userLinks/${props.row.slug}`"> -->
                {{ props.row.host }}    
                  <!-- </nuxt-link> -->
            </b-table-column>

           
          
        
            <b-table-column field="first_name" label="Slug" v-slot="props" >
               
                {{ props.row.slug }}
              
            </b-table-column>
        

              <b-table-column field="Deep Link" label="Deep Link" v-slot="props">
                   <a :href="`${props.row.shortUrl }`">
                {{ props.row.shortUrl }}
                   </a>
           </b-table-column>

               <b-table-column field="action" label="Action" v-slot="props">
                 <b-icon icon="clipboard" type="is-primary" icon-clickable  @icon-click="copyItem" @click.native="copyItem( props.row.shortUrl)" /> 
                  
              
                  </b-table-column>
               </b-table>
            

           
          
        
          
               
            
        

             
                  
            
          

 

           

            

        </div> 
           
        </div>
</section>
</template>

<script>
  export default {
     data(){
       
       
        return{
                copiedText:"",
                users:null,
                isStriped: true,
                isHoverable: true,
                isFocusable: true,
                hasMobileCards: true,
                userLinks:null,
                
        }
    },
    methods:{
detailsRedirect(item){
 
  this.$router.push(`userLinks/${item.slug}`);
},


async copyItem(item){
      
     try {
          await navigator.clipboard.writeText(item)
           this.copiedText = `Copied ${this.shorturl} to clipboard`;
          
        } catch (err) {
          console.error('Failed to copy!', err)
        }
     },
    
      
  
    
    },
    middleware: 'auth',
     
    async asyncData({ params, $axios }) {
      const slugDetails = await $axios.$get(`users/${params.id}`);
      let isEmpty=true;
      

      if (slugDetails.urls.length!=0) {
        isEmpty=false;
       
      }
        
        
       
      
       
      
      
      return { slugDetails,isEmpty }
    }
  }
</script>