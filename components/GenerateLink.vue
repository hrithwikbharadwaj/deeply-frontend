<template>
    <div class="container">
      <div class="column ">
        <!-- FORM FOR SHORTENING START -->

        <section>
          <!-- Notifications Start -->
          <b-notification
            v-if="error"
            type="is-danger"
            auto-close
            aria-close-label="Close notification"
            role="alert"
          >
            {{ error }}
          </b-notification>
          <b-notification
            v-if="copiedText"
            auto-close
            type="is-success"
            aria-close-label="Close notification"
            role="alert"
          >
            {{ copiedText }}
          </b-notification>
          <b-notification
            v-if="shared"
            auto-close
            type="is-success is-light"
            aria-close-label="Close notification"
            role="alert"
          >
            {{ shared }}
          </b-notification>
          <b-loading v-model="isLoading"></b-loading>
          <!-- Notification Section END -->

          <!-- Form input begin -->

          <div class="box">
            <b-field label="URL" maxlength="50">
              <b-input
                required
                v-model="urlData.longURL"
                size="is-medium"
                type="is-primary"
                pack="ionicons"
                icon-right="clipboard "
                icon-right-clickable
                @icon-right-click="copyItem"
              ></b-input>
            </b-field>

            <b-field label="Custom Slug(optional)">
              <b-input v-model="urlData.slug" size="is-medium"></b-input>
            </b-field>

            <div class="column is-vcentered">
              <b-button
                @click="shortenURL(urlData)"
                type="is-primary is-light is-medium"
                >Generate</b-button
              >
            </div>
          </div>

          <!-- Form input END -->
         
        </section>
      </div>
    </div>
    
</template>

<script>

export default {
 
  data() {
    return {
      error: null,
      shared: null,
      // deferredPrompt:null,
      copiedText: "",
      isLoading: false,
      urlData: {
        longURL: "",
        slug: null
      },
      shorturl: ""
    };
  },
  name: "HomePage",


  mounted() {
    /// Get the data to the parameters from share target api 
    if (this.$route.query.videolink != undefined) {
      this.urlData.longURL = this.$route.query.videolink;
      this.shared = "Link Added 🎉. Please add a slug and press Generate";
    }
  },
  methods: {
  
    async copyItem() {
      if (!navigator.clipboard) {
        // Clipboard API not available
        return;
      }
      try {
        const text = await navigator.clipboard.readText();
        this.urlData.longURL = text;
      } catch (err) {
        console.error("Failed to copy!", err);
      }
    },

    async shortenURL(urlData) {
      try {
        this.isLoading = true;

        let res = await this.$axios.post("url/shorten", urlData);

        this.shorturl = res.data.shortUrl;
        const text = this.shorturl;

        try {
          await navigator.clipboard.writeText(text);
          this.isLoading = false;
          this.copiedText = `Copied ${this.shorturl} to clipboard`;
        } catch (err) {
          console.error("Failed to copy!", err);
        }
      } catch (e) {
        this.isLoading = false;
        this.error = e.response.data;
      }
    }
  }
};
</script>