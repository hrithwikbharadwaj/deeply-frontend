<template>
    
<section class="section">
      Works bro
        <div class="container">
           
            <h2> Here are some of your Links that you have created.</h2>
           <br>
            <b-table
            :data="slugDetails.urls"
        
            :striped="isStriped"
           
            :hoverable="isHoverable"
        
            :focusable="isFocusable"
            :mobile-cards="hasMobileCards">

            <b-table-column field="id" label="Host" width="40" numeric v-slot="props" >
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
  export default {
      data(){
        const data = [
                { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016/10/15 13:43:27', 'gender': 'Male' },
                { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016/12/15 06:00:53', 'gender': 'Male' },
                { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016/04/26 06:26:28', 'gender': 'Female' },
                { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016/04/10 10:28:46', 'gender': 'Male' },
                { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016/12/06 14:38:38', 'gender': 'Female' }
            ]
        return{
                users:null,
                isStriped: true,
                isHoverable: true,
                isFocusable: true,
                hasMobileCards: true,
                userLinks:null
        }
    },
    async asyncData({ params, $axios }) {
      const slugDetails = await $axios.$get(`users/${params.id}`)
      return { slugDetails }
    }
  }
</script>