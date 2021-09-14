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
      :loading="loading"
      :headers="headers"
      :items="items"
      :search="search"
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
        { text: 'Id', value: 'id'},
        { text: 'Title', value: 'title' },
        { text: 'Volume', value: 'volume' },
        { text: 'Page', value: 'page' },
        { text: 'Date', value: 'date' },
        { text: 'Author', value: 'author' },
        { text: 'Language', value: 'language' },
        { text: 'Pdf', value: 'doc' }
      ],
      items: [],
      loading: true
    }
  },
  methods: {
    fetchAllSupplements: function() {
      axios.get("http://localhost:5000/supplements") //change URI when deploying app.
        .then((result) => {
          let final = result.data.map((item, index) => {
            return ({id: item.id, title: item.title, volume: item.volume, page: item.page, date: item.date, author: item.author, language: item.language, type: item.type, doc: item.pdf})
          })
          console.log("final",final);
          this.items = final
          this.loading = false
        })
        .catch(err => console.log(err))
    },
    handleClick: function(row) {
      console.log("row supplements", row)
      window.open('https://api.mislavcrnkovic.com/pdf/' + row.doc + ".pdf", '_blank');
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