<template>
  <v-card
    class="mx-auto overflow-hidden"
    width="100%"
    >

    <v-app-bar
      color="#702632"
      dark
      prominent      
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="d-flex justify-center align-center">
        <NuxtLink :to="localePath('/')" class="link d-flex justify-center align-center">
          <img src="~assets/logo/BANNER_GEP.svg" alt="gynaecologia" class="logo-image"/>
        </NuxtLink>
      </v-toolbar-title>

      <!-- <img src="~assets/logo/BANNER_GEP.svg" alt="mag" class="logo-image"/> -->
      
      <v-spacer></v-spacer>

    <v-col 
    v-if="$vuetify.breakpoint.smAndUp"
    class="d-flex justify-end"
    cols="1"
    >
        <LanguageInput />
    </v-col>
      
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
        <NuxtLink :to="localePath('/')" class="link">
          <v-list-item > 
            <font-awesome-icon class="onama-icon" :icon="['fas', 'home']"/>              
            {{ $t('navbar_home') }}      
          </v-list-item>        
        </NuxtLink>

        <NuxtLink :to="localePath('articles')" class="link">
          <v-list-item>
            <font-awesome-icon class="onama-icon" :icon="['fas', 'newspaper']"/>    
            {{ $t('navbar_articles') }}
          </v-list-item>            
        </NuxtLink>

        <NuxtLink :to="localePath('supplements')" class="link">
          <v-list-item>  
            <font-awesome-icon class="onama-icon" :icon="['fas', 'folder-plus']"/>         
            {{ $t('navbar_supplements') }}
          </v-list-item>            
        </NuxtLink>

        <NuxtLink :to="localePath('about')" class="link">
          <v-list-item>
            <font-awesome-icon class="onama-icon" :icon="['fas', 'info-circle']"/> 
            {{ $t('navbar_about') }}
          </v-list-item>            
        </NuxtLink>

        <client-only>
          <div class="flex justify-center mt-10">
            <template v-if="user">
              <v-list-item @click.prevent="onLogout">
                  <font-awesome-icon class="onama-icon" :icon="['fas', 'key']"/> 
                  Logout
              </v-list-item> 
            </template>
            <template v-else>
              <v-list-item @click.prevent="openLogin">
                  <font-awesome-icon class="onama-icon" :icon="['fas', 'key']"/> 
                  Login
              </v-list-item> 
              <v-list-item @click.prevent="openSignup">
                  <font-awesome-icon class="onama-icon" :icon="['fas', 'user']"/> 
                  Sign up
              </v-list-item> 
            </template>
          </div>
        </client-only>

        <LanguageInput v-if="$vuetify.breakpoint.xsOnly" class="mt-5"/>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- <v-card-text>
      The navigation drawer will appear from the bottom on smaller size screens.
    </v-card-text> -->
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LanguageInput from "./LanguageInput.vue"
export default {
  components: { LanguageInput },
  data: () => ({
    drawer: false,
    group: null
  }),
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },
  watch: {
    group () {
      this.drawer = false
    },
  },
  methods: {
    onLogout() {
      this.logout()
      if (this.$route.path !== '/') {
        this.$router.push('/')
      }
    },
    ...mapActions({
      openLogin: 'auth/openLogin',
      openSignup: 'auth/openSignup',
      logout: 'auth/logout'
    })
  },
}
</script>

<style scoped>
.link{
  text-decoration: none;
}
.onama-footer{
background: #702632;
min-height: 7vh;
color: #FFFFFA;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
}
.onama-icon{
  transform: scale(1.5);
  margin: 0 1rem;
  color: #702632;
}
.logo-image{
  max-width: 17rem;  
}
</style>