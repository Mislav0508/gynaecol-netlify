<template>
  <div class="lang-dropdown">
      <v-select 
      v-model="$i18n.locale" 
      item-value="code"
      item-text="name"
      :items="items"
      solo
      light
      height="10px"
      ></v-select>
  </div>
</template>
<script>
export default {
  /* eslint-disable */
  data(){
    return {
      items: this.$i18n.locales
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