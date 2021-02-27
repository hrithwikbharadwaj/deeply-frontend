<template>
  <!-- Content for Logged in users  -->
  <div v-if="$auth.loggedIn">
    <section class="section ">
      <div class="content">
        <div class="container">
          <center>
            <div class="box">
              <p>
                Create FREE Deep Links which you can share with your audience.
              </p>
              <p>
                Paste your link or click on the clipboard icon to get started.
              </p>
            </div>
          </center>
        </div>
      </div>
    </section>
    
    <GenerateLink/>
    <Footer/>
  </div>

  <!-- Landing Page  -->
  <div v-else>
    <body>
     <LandingPage/>
      
    </body>
  </div>
</template>

<script>
import { mapGetters } from "vuex";



export default {
 
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"])
  }
  
  
 
};
</script>

<style>
.content {
  flex: 1 0 auto;
}
body {
  display: flex;
  flex-direction: column;
}
html,
body {
  height: 100%;
  font-family: Montserrat;
}
footer {
  margin-top: auto;
}
.footer {
  flex-shrink: 0;
}
</style>

