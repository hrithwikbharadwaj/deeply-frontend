<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <nuxt-link to ="/register">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    </nuxt-link>
                    <nuxt-link to ="/login">
                    <a class="button is-light">
                        Log in
                    </a>
                    </nuxt-link>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template> 
