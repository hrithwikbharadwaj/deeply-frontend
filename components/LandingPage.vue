<template>
     <section class="hero  is-fullheight ">
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column" animation="fade">
                <h1 class="title titled is-1 mb-6" style="font-weigt:bold">
                  Boost Engagement
                </h1>
                <h2
                  class=" subtitled subtitle has-text-grey is-4 has-text-weight-normal is-family-sans-serif"
                >
                  on your YouTube Channel with one click.
                </h2>
                <p></p>
                <div class="buttons">
                  <nuxt-link to="register">
                    <b-button size="is-large" type="is-danger"
                      >Get Started</b-button
                    ></nuxt-link
                  >
                </div>
              </div>
              <div class="column" animation="fade">
                <img
                  src="../static/youtubeEngagement.svg"
                  alt=""
                  class="home__img"
                  style="height:300px"
                />
              </div>
            </div>
            <br />
            <br />
            <!-- End of columns  -->
            <div class="box">
              <div class="columns" style="margin-top:30px">
                <div data-aos="fade-right" class="column">
                  <img
                    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1614234210359/9ACtJGsmm.gif"
                    alt=""
                    class="home__img"
                  />
                </div>
                <div class="column">
                  <h3 class="title titled is-5 mb-6">
                    Send users directly to YouTube and Amazon App
                  </h3>
                  <h1 class="title titled is-2 mb-6">
                    resulting in better Engagement,
                  </h1>
                  <h2
                    class=" subtitled subtitle has-text-grey is-4 has-text-weight-bold is-family-Segoe UI"
                  >
                    Sales and Revenue.
                  </h2>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="columns" style="margin-top:60px;boarder-top:4px">
                <div class="column">
                  <h3 class="title titled is-5 mb-6">Get the PWA</h3>
                  <h1 class="title titled is-1 mb-6" style="margin-top:50px">
                    Directly Share Links to the app
                  </h1>
                  <h2
                    class=" subtitled subtitle has-text-grey is-4 has-text-weight-normal is-family-Segoe UI"
                  >
                    and hit Generate
                  </h2>
                </div>
                <div data-aos="fade-right" class="column-right">
                  <img
                    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1614230907803/qyVg9Kczq.gif"
                    alt=""
                    class="home__img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer">
          <div class="content has-text-centered">
            <p>
              Made with ❤️ by
              <a href="https://twitter.com/intent/follow?screen_name=HSBTechYt">
                Hrithwik Bharadwaj</a
              >
            </p>
          </div>
        </footer>
      </section>
</template>


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