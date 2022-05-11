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
import LanguageInput from "./LanguageInput.vue"
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