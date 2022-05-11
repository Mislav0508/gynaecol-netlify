<template>

<div>
  <v-app >
    
    <Sidebar />

    <!-- CONTENT -->
    <Nuxt />
    <!-- CONTENT END -->

    <Footer />
  
</v-app>
</div>


  
</template>

<script>
import Sidebar from "../components/Sidebar.vue"
import Footer from "../components/Footer.vue"
export default {
  components: { Sidebar, Footer },
  }
</script>

<style scoped>


</style>