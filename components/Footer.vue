<template>
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
</template>

<script>
export default {

}
</script>

<style scoped>

</style>