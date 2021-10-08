<template>
  <v-container class="text-center">
    <!-- <v-card> -->
      <v-row class="d-flex align-center justify-center my-lg-10 my-xl-10">
        <h3 class="custom-title mt-15">{{ $t('About') }}</h3>
      </v-row>
      <v-row class="d-flex flex-column">
        <!-- LEFT COLUMN -->
        <v-col>
          <v-row class="d-flex justify-center text-center mb-3">
          <h4 class="custom-subtitle mb-5"><b>{{ $t('about_subtitle_1') }}</b></h4>
          </v-row>
          <v-row >
            <v-col class="d-flex align-center justify-center mb-4">
              <span class="icon is-left">
                <font-awesome-icon class="onama-icon" :icon="['fas', 'map-marker-alt']"/>
              </span>
              <h4 class="m-0">{{ $t('Address') }}</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex align-center justify-center mb-4">
              <span class="icon is-left">
                <font-awesome-icon class="onama-icon" :icon="['fas', 'fax']"/>
              </span>
              <h4 class="m-0">{{ $t('Fax') }}</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex align-center justify-center mb-4">
              <span class="icon is-left">
                <font-awesome-icon class="onama-icon" :icon="['fas', 'envelope']"/>
              </span>
              <h4 class="m-0">{{ $t('Email') }}</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex align-center justify-center mb-4">
              <span class="icon is-left">
                <font-awesome-icon class="onama-icon" :icon="['fas', 'phone']"/>
              </span>
              <h4 class="m-0">{{ $t('Phone') }}</h4>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-column">
            <v-col>
              <h3 class="custom-subtitle">
                {{ $t('about_subtitle_2') }}
              </h3>
            </v-col>
            <v-col>
              <p>{{ $t('about_label_1') }}</p>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-column">
            <v-col>
              <h3 class="custom-subtitle">
                {{ $t('about_subtitle_3') }}
              </h3>
            </v-col>
            <v-col>
              <p>{{ $t('about_label_2') }}</p>
            </v-col>
          </v-row>
        </v-col>
        <!--  RIGHT COLUMN  -->
        <v-col class="text-justify d-flex flex-column align-center justify-space-around">
          <v-card
          elevation="2"
          class="pa-2">
            <h3 class="custom-subtitle text-center "><b>{{ $t('home_subtitle_1') }}</b></h3>
            <v-row class="d-flex justify-center">
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
          </v-card>
        </v-col>

      </v-row>
      <!-- SECOND (Table) ROW -->
      <h3 class="custom-subtitle mt-10">
        <b>{{ $t('about_subtitle_4') }}</b>
      </h3>
      <v-row class="d-flex justify-center my-10">
        <table class="table">
          <tbody>
            <tr>
              <td>Damir Babić, Zagreb</td>
              <td>Dubravko Habek, Zagreb</td>
              <td>Angela Napoli, Milano</td>
            </tr>
            <tr>
              <td>Vlado Banović, Zagreb</td>
              <td>Mislav Herman, Zagreb</td>
              <td>Attila Pál, Szeged</td>
            </tr>
            <tr>
              <td>Igor But, Maribor</td>
              <td>Moshe Hod, Tel Aviv</td>
              <td>Tanja Premru Sršen, Ljubljana</td>
            </tr>
            <tr>
              <td>Lilijana Cerar-Kornhauser, Ljubljana</td>
              <td>Emilja Juretić, Zagreb</td>
              <td>Igor Prpić, Rijeka</td>
            </tr>
            <tr>
              <td>Srećko Ciglar, Zagreb</td>
              <td>Držislav Kalafatić, Zagreb</td>
              <td>Velena Radošević, Zagrebo</td>
            </tr>
            <tr>
              <td>Željko Duić, Zagreb</td>
              <td>Deni Karelović, Split</td>
              <td>Milan Stanojević, Zagreb</td>
            </tr>
            <tr>
              <td>S. Hauguel de Mouzon, Cleveland</td>
              <td>Milan Kos, Zagreb</td>
              <td>Vito Starčević, Zagreb</td>
            </tr>
            <tr>
              <td>Gernot Desoye, Graz</td>
              <td>Vlastimir Kukura, Zagreb</td>
              <td>Snježana Škrablin-Kučić, Zagreb</td>
            </tr>
            <tr>
              <td>Vesna Elveđi Gašparović, Zagreb</td>
              <td>Višnja Latin, Zagreb</td>
              <td>Bito Tamas, Budimpešta</td>
            </tr>
            <tr>
              <td>Ulf Erricson, Upsalla</td>
              <td>Vesna Mahovlić, Zagreb</td>
              <td>Tomaž Tomaževič, Ljubljana</td>
            </tr>
            <tr>
              <td>Ivan Fistonić, Zagreb</td>
              <td>Yoram Meir, Bassano del Grappa</td>
              <td>Vajdana Tomić, Mostar</td>
            </tr>
            <tr>
              <td>Goran Grubišić, Zagreb</td>
              <td>Helena Meden-Vrtovec, Ljubljana</td>
              <td>Gordan Zlopaša, Zagreb</td>
            </tr>
          </tbody>
        </table>
      </v-row>
      <!-- LOWER ROW -->
      <v-row class="text-center ma-5" id="onama-lower-row">
        <v-col>
          <p class="mt-2">{{ $t('about_box_1') }}: Josip Đelmiš</p>
          <p>{{ $t('about_box_2') }}: Anita Horvatin i Marina Horvatiček</p>
          <p>{{ $t('about_box_3') }}: »GREDICE«, Zagreb</p>
          <p>{{ $t('about_box_4') }}: »PRINTERA«, Sveta Nedelja</p>
          <p>{{ $t('about_box_5') }}: 1100 primjeraka</p>
        </v-col>
      </v-row>
      <p class="text-justify ma-5 mb-10">
      {{ $t('about_footer') }}
      </p>
    <!-- </v-card> -->
  </v-container>
</template>

<script>

export default {
  head: {
    title: `Gynaecologia et perinatologia | About`,
    meta: [
      {
        hid: 'About',
        name: 'About',
        content: 'Gynaecologia et perinatologia | About'
      },
      {
        hid: `keywords`,
        name: 'keywords',
        keywords: 'ginekologija, perinatologija, about'
      }
    ],
  }
}
</script>

<style scoped>
.custom-title{
  margin: 2rem 0;
  line-height: 35px;
  color: #702632;
  text-align: center;
  font-size: 3rem;
}
.custom-subtitle{
  margin: 1rem 0;
  font-size: 1.4rem; 
  line-height: 35px;
  color: #702632;
  text-align: center; 
}
.onama-icon{
  transform: scale(1.5);
  margin: 0 1rem;
  color: #702632;
}
#onama-lower-row{
  border: 3px solid #702632;
  margin: 1rem 0;
}
.home-icon{
  max-width: 5rem;
  margin-bottom: 1rem;
}
li{
  font-weight: 800;
  transition: 0.5s ease;
}
li:hover{
  color:#702632;
}
td{
  padding: .75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}
@media only screen and (max-width: 600px) {
  .custom-title{
    font-size: 2rem;
    margin: 2rem 0;
  }
  .custom-subtitle{
    font-size: 1.1rem;
    margin: 1rem 0;
  }
}
</style>