<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Form</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  v-model="modalData.title"
                  label="Title*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  v-model="modalData.volume"
                  type="number"
                  label="Volume*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  v-model="modalData.page"
                  label="Page*"
                  hint="Example: 1 - 162"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6"
                md="4">
                <v-text-field
                  v-model="modalData.date"
                  label="Date*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="modalData.author"
                  label="Author*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  v-model="modalData.language"
                  :items="['EN', 'HR', 'EN/HR']"
                  label="Language*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  v-model="modalData.type"
                  :items="['supplement', 'article']"
                  label="Type*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  v-model="modalData.pdf"
                  label="PDF file name*"
                  hint="Example: supl_PD_2016"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="save"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
data: () => ({
    dialog: false,
    modalData: {      
      title: 'XXX',
      volume: 99,
      page: '1 - 500',
      date: 'August 5',
      author: 'Mislav',
      language: 'EN/HR',
      type: 'supplement',
      pdf: 'mypdf'
    }
  }),
  methods: {
    save () {
      this.dialog = false
      this.$emit("modal-data", this.modalData)
    }
  }
}
</script>

<style>

</style>