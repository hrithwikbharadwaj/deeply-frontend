<template>
   <section class="section " >
       
      <div class="content">
        <div class="container">
    <div v-if="error.statusCode === 404">
      <center>
       <img src="../static/404.svg" alt="" class="home__img" style="height:500px; margin-left:20px">
       <h1 class="title titled is-1 mb-6">
              404
            </h1>
             <h3 class="title titled is-3 mb-6" style="font-weight:bold">
              URL not found
            </h3>
            </center>
      </div>
    
    <h1 v-else>An error occurred</h1>
    <center>

     <b-button  @click="redirect()" size="is-large" type="is-danger">Home Page</b-button>
    </center>
  </div>
      </div>
   </section>
</template>

<script>
  export default {
    methods:{
      redirect(){
         this.$router.push('/');
      }
    },
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>
