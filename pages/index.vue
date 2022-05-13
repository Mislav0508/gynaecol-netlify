<template>
  <v-container class="text-center">
    <!-- <v-card> -->
      <v-row class="d-flex justify-center my-lg-10 my-xl-10 my-10 custom-title-container">
        <h2 class="custom-title">GYNAECOLOGIA ET PERINATOLOGIA</h2>
      </v-row>
      <v-row class="d-flex justify-center mt-lg-10 mt-xl-10">
        <v-col cols="12" lg="5" md="5" sm="12" xs="12">
          <h3 class="d-flex justify-center custom-title2">
              {{ $t('home_title') }}
          </h3> 
          <p class="px-2"><b>{{ $t('home_label_1_bold') }} </b>{{ $t('home_label_1') }}</p>
          <div class="col d-flex align-items-center justify-center">
            <img src="~assets/icons/magazine.svg" alt="mag" class="home-icon"/>
          </div>
          <p class="px-2">
            <b>{{ $t('home_label_2_bold') }} </b>{{ $t('home_label_2') }}
          </p>
          <div class="col d-flex align-items-center justify-center">
            <img src="~assets/icons/vaginal-speculum.svg" alt="mag" class="home-icon"/>
          </div>
          <p class="px-2"><b>{{ $t('home_label_3_bold') }} </b> {{ $t('home_label_3') }}</p>
        </v-col>
        <v-col cols="12" lg="5" md="5" sm="12" xs="12" class="d-flex justify-center">
          <img src="~assets/images/pocetna.png" alt="mag" class="home-img"/>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center my-5">
        <v-col cols="12" lg="5" md="5" sm="12" xs="12" class="d-flex justify-center">
          <img src="~assets/images/pocetna2.png" alt="mag" class="home-img"/>
        </v-col>
        <v-col cols="12" lg="5" md="5" sm="12" xs="12">
          <v-col class="text-start my-5 d-flex justify-space-around flex-column ml-lg-5">
            <h3 class="custom-subtitle text-center"><b>{{ $t('home_subtitle_1') }}</b></h3>
            <v-row class="d-flex align-items-center justify-center">
              <img src="~assets/icons/editor.svg" alt="mag" class="home-icon mr-4"/>
              <img src="~assets/icons/editor2.svg" alt="mag" class="home-icon ml-4"/>
            </v-row>
            <p><b>{{ $t('Editor-in-Chief') }}</b> Josip Đelmiš</p>
            <p>{{ $t('Materno-fetal_medicine') }}</p>
            <p>{{ $t('Obstetrics') }}</p>
            <p>{{ $t('Neonatology') }}</p>
            <p>{{ $t('Reproductive_Medicine') }}</p>
            <p>{{ $t('Oncology') }}</p>
            <p>{{ $t('Endoscopy') }}</p>
            <p>{{ $t('Urogynaecology') }}</p>
            <p>{{ $t('Ultrasound_Diagnostics') }}</p>
          </v-col>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center my-lg-15">
        <v-col cols="12" lg="8" md="10" sm="12" xs="12" class="d-flex justify-center align-center flex-column text-justify my-5 px-xs-5">   
            <h3 class="custom-subtitle">{{ $t('home_label_4') }}</h3>     
            <p class="px-2">{{ $t('home_paragraph') }}</p>
        </v-col>
      </v-row>
      <v-col cols="12" class="d-flex justify-center my-xl-5 my-lg-5 my-md-5">
        <v-card
        elevation="2"
        class="mb-5">
          <Contact />
        </v-card>
      </v-col>
    <!-- </v-card> -->
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  nuxtI18n: {
    paths: {
      en: '/', 
      hr: '/'
    }
  },
  head() {
    return {
      title: this.$t('meta_home_name'),
      meta: [
        {
          hid: 'home_name_hid',
          name: this.$t('meta_home_name'),
          content: this.$t('meta_home_name')
        },
        {
          hid: `home_keywords_hid`,
          name: 'keywords',
          keywords: this.$t('meta_keywords_home')
        }
      ],
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },
  methods: {
    ...mapActions({
      openLogin: 'auth/openLogin',
      openSignup: 'auth/openSignup',
      logout: 'auth/logout'
    })
  }
}
</script>

<style>
.custom-title-container{
  margin: 2rem 0;
  /* line-height: 35px; */
  color: #702632;
  text-align: center;
  font-size: 1.5rem;
}
.custom-title{
  font-size: 3rem;
  margin: 3rem 0;
}
.custom-title2{
  margin: 2rem 0;
  line-height: 35px;
  color: #702632;
  text-align: center;
}
.custom-subtitle{
  margin: 1rem 0;
  line-height: 35px;
  color: #702632;
  text-align: center;  
}
.home-icon{
  max-width: 5rem;
  margin-bottom: 1rem;
}
.home-img{
  max-width: 100%;
  min-width: 25rem;
  max-height: 35rem;
  margin: 1rem;
  border-radius: 15px;
  border: 2px solid #702632;
  box-shadow: 0.5rem 0.5rem 0.5rem grey;
}
@media only screen and (max-width: 600px) {
  .custom-title-container {
    margin: 0;
    font-size: 1.2rem;
  }
  .custom-title{
    font-size: 2rem;
    margin: 1rem 0;
  }
  .home-img{
    max-width: 98%;
    min-width: 10rem;
    max-height: 35rem;
  }
}

</style>
