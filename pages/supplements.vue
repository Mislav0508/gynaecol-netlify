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
  title: `Supplements page`,
  meta: [
    {
      hid: 'Gynaecologia et perinatologia | Supplements',
      name: 'Gynaecologia et perinatologia | Supplements',
      content: 'Gynaecologia et perinatologia | Supplements'
    }
    ],
  },
  data () {
    return {
      search: '',
      headers: [
        // { text: 'Id', value: 'id'},
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
      // http://localhost:5000/supplements
      // https://gynaecol-db.herokuapp.com/supplements
      const response = await axios.get("https://gynaecol-db.herokuapp.com/supplements", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/x-www-form-urlencoded'
          }
      })
      const data = response.data
      let final = data.map((item, index) => {
        return ({id: item.id, title: item.title, volume: item.volume, page: item.page, date: item.date, author: item.author, language: item.language, type: item.type, doc: item.pdf})
      })
      console.log(final);
      this.items = final
      this.loading = false
    },
    handleClick: function(row) {
      console.log("row supplements", row)
      window.open('https://api.gynaecolperinatol.hr/pdf/' + row.doc + ".pdf", '_blank');
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