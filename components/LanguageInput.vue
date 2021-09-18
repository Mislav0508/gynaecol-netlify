<template>
  <div class="lang-dropdown">
      <v-select 
      v-model="$i18n.locale" 
      item-value="code"
      item-text="name"
      :items="items"
      solo
      light
      dense
      @input="switchLocale"
      ></v-select>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data(){
    return {
      items: this.$i18n.locales
    }
  },
  methods: {
    switchLocale: function (e) {
      console.log(e);
      console.log(this.$vuetify.lang.current);
    }
  }
}
</script>
<style scoped>
select{
  color: black;
}
option{
  color: black;
}
</style>