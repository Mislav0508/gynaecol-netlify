<template>

  <!-- NAVBAR -->

<div>
  <v-app >
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


      <!-- <v-btn icon small class="mr-3">
        <img src="~assets/icons/croatia.svg" alt="hrvatski">
      </v-btn>

      <v-btn icon small class="mr-4">
        <img src="~assets/icons/united-kingdom.svg" alt="english">
      </v-btn> -->

      <v-btn small class="mt-1 red grey lighten-5">
        <LanguageInput />
      </v-btn>
      
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

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- <v-card-text>
      The navigation drawer will appear from the bottom on smaller size screens.
    </v-card-text> -->
  </v-card>

  <!-- CONTENT -->

  <Nuxt />

  <!-- FOOTER -->

  <v-card height="8vh" class="mt-15">
    <v-footer
    color="#702632"
    absolute
    >
      <v-card
        flat
        tile
        width="100%"
        class="text-center"
        color="#702632"
      >
        <v-card-text>
          <NuxtLink :to="localePath('/')" class="link">
            <v-btn
            class="mx-4"
            icon>
              <font-awesome-icon class="white--text onama-icon" :icon="['fas', 'home']"/> 
            </v-btn>
          </NuxtLink>
          <NuxtLink :to="localePath('articles')" class="link">
            <v-btn
            class="mx-4"
            icon>
              <font-awesome-icon class="white--text onama-icon" :icon="['fas', 'newspaper']"/> 
            </v-btn>
          </NuxtLink>
          <NuxtLink :to="localePath('supplements')" class="link">
            <v-btn
            class="mx-4"
            icon>
              <font-awesome-icon class="white--text onama-icon" :icon="['fas', 'folder-plus']"/> 
            </v-btn>
          </NuxtLink>
          <NuxtLink :to="localePath('about')" class="link">
            <v-btn
            class="mx-4"
            icon>
              <font-awesome-icon class="white--text onama-icon" :icon="['fas', 'info-circle']"/> 
            </v-btn>
          </NuxtLink>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Copyright © 2021 gynaecolperinatol | Powered by Media Dev</strong>
        </v-card-text>
      </v-card>
    </v-footer>

  </v-card>
</v-app>
</div>


  
</template>

<script>
import LanguageInput from "../components/LanguageInput.vue"
export default {
  components: { LanguageInput },
  data: () => ({
    drawer: false,
    group: null
  }),

  watch: {
    group () {
      this.drawer = false
    },
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