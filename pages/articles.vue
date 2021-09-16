<template>
  <v-container>
    <v-col class="d-flex align-center justify-center">
      <h1 class="custom-title">{{ $t('articles_title') }}</h1>
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
      height="60vh"
      class="mb-5"
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
import axios from "axios"
export default {
  head: {
  title: `Articles page`,
  meta: [
    {
      hid: 'Gynaecologia et perinatologia | Articles',
      name: 'Gynaecologia et perinatologia | Articles',
      content: 'Gynaecologia et perinatologia | Articles'
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
        { text: 'Type', value: 'type' },
        { text: 'Pdf', value: 'pdf' },
      ],
      items: [],
      loading: true
    }
  },
  methods: {
    fetchAllMagazines: async function() {
      // http://localhost:5000/articles
      // https://gynaecol-db.herokuapp.com/articles
      const response = await axios.get("https://gynaecol-db.herokuapp.com/articles")
      const data = response.data
      let final = data.map((item) => {
        return ({id: item.id, title: item.title, volume: item.volume, page: item.page, date: item.date, author: item.author, language: item.language, type: item.type, pdf: item.pdf})
      })
      console.log(final);
      this.items = final
      this.loading = false
    },
    handleClick: function(row) {
      console.log("row articles", row);
      window.open('https://api.gynaecolperinatol.hr/pdf/' + row.pdf + ".pdf", '_blank');
    },
  },
  mounted() {
    this.fetchAllMagazines()
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