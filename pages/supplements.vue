<template>
  <v-container>
    <v-col class="d-flex align-center justify-center">
      <h1 class="custom-title">{{ $t('supplements_title') }}</h1>
    </v-col>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
      class="mb-5"
      :loading="loading"
      :headers="headers"
      :items="items"
      :search="search"
      height="50vh"
      @click:row="handleClick"
      ></v-data-table>
    </v-card>

  </v-container>
</template>

<script>
/* eslint-disable */
import axios from "axios"
export default {
  head: {
  title: `Gynaecologia et perinatologia | Supplements`,
  meta: [
    {
      hid: 'Supplements',
      name: 'Gynaecologia et perinatologia | Supplements',
      content: 'Gynaecologia et perinatologia | Supplements'
    },
    {
      hid: `keywords`,
      name: 'keywords',
      keywords: 'ginekologija, perinatologija, supplements'
    }
    ],
  },
  data () {
    return {
      search: '',
      headers: [
        { text: 'Title', value: 'title' },
        { text: 'Volume', value: 'volume' },
        { text: 'Page', value: 'page' },
        { text: 'Date', value: 'date' },
        { text: 'Author', value: 'author' },
        { text: 'Language', value: 'language' },
        // { text: 'Pdf', value: 'doc' }
      ],
      items: [],
      loading: true
    }
  },
  methods: {
    fetchAllSupplements: async function() {
      const response = await axios.get("/.netlify/functions/getMagazines", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/x-www-form-urlencoded'
          }
      })
      const data = response.data
      let final = data.map((item, index) => {
        return ({title: item.title, volume: item.volume, page: item.page, date: item.date, author: item.author, language: item.language, type: item.type, pdf: item.pdf})
      })
      this.items = final.filter((item) => item.type == "supplement")
      console.log(this.items);
      this.loading = false
    },
    handleClick: function(row) {
      console.log("row supplements", row)
      window.open('https://api.gynaecolperinatol.hr/pdf/' + row.pdf + ".pdf", '_blank');
    }
  },
  mounted() {
    this.fetchAllSupplements()
  }
}
</script>


<style scoped>
.custom-title{
  margin: 2rem 0;
  line-height: 35px;
  color: #702632;
  text-align: center;
}
.keyword-lighten {
  color: #000;
  background-color: #FFFF00;
}
</style>