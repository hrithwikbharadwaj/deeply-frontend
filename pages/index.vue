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
    <GeneratePage/>
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
import GeneratePage from '../components/GeneratePage.vue';


export default {
  components: { GeneratePage },
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

<style lang="scss">
// Import Bulma's core
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap");
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #ec5f68;
$primary-light: findLightColor($primary);
$primary-dark: findDarkColor($primary);
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);
$footer-padding: 1.5rem 1.5rem 3rem;
// Lists and maps

$custom-colors: null !default;
$custom-shades: null !default;
$font-family-sans-serif: "Montserrat";
$family-primary: "Montserrat";
$body-background-color: #e5e7eb;
// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: mergeColorMaps(
  (
    "white": (
      $white,
      $black
    ),
    "black": (
      $black,
      $white
    ),
    "light": (
      $light,
      $light-invert
    ),
    "dark": (
      $dark,
      $dark-invert
    ),
    "primary": (
      $primary,
      $primary-invert,
      $primary-light,
      $primary-dark
    ),
    "link": (
      $link,
      $link-invert,
      $link-light,
      $link-dark
    ),
    "info": (
      $info,
      $info-invert,
      $info-light,
      $info-dark
    ),
    "success": (
      $success,
      $success-invert,
      $success-light,
      $success-dark
    ),
    "warning": (
      $warning,
      $warning-invert,
      $warning-light,
      $warning-dark
    ),
    "danger": (
      $danger,
      $danger-invert,
      $danger-light,
      $danger-dark
    )
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
