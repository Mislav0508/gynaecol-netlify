<template>
  <v-container>
    Blog
    <Modal @modal-data="modalData"/>
    <v-btn @click="authenticate">authorize and load</v-btn>
    <v-btn @click="execute()">execute</v-btn>
    <v-file-input
      truncate-length="15"
      v-model="file"  
      @change="logFile"    
    ></v-file-input>
    <v-btn @click="uploadFile">Upload File</v-btn>
    <v-btn @click="downloadFile">Download File</v-btn>
  </v-container>
</template>

<script>
import Modal from "../components/Modal.vue"
export default {
  components: { Modal },
  data() {
    return {
      file: null,
      fileName: 'my file',
      fileId: ''
    }
  },
  mounted() {
    gapi.load("client:auth2", function() {
      gapi.auth2.init({
          client_id: process.env.OAUTH_CLIENT_ID,
          plugin_name: "chat"
        });
    });
  },
  methods: {
    modalData: function(val) {
      console.log("val",val);
    },
    logFile: function() {
      console.log(this.file.name);
    },
    authenticate: function () {
      return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); })
        .then(function () {
          gapi.client.setApiKey(process.env.GOOGLE_API_KEY);
          return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/drive/v3/rest")
              .then(function() { console.log("GAPI client loaded for API"); },
                function(err) { console.error("Error loading GAPI client for API", err); });
        })
    },
    execute: function () {
      return gapi.client.drive.files.list({
        q: "mimeType='application/vnd.google-apps.folder'",
        name: 'Supplements'
      })
      .then(function(response) {
          // Handle the results here (response.result has the parsed body).
          console.log("Response", response);
        },
        function(err) { console.error("Execute error", err); });
    },
    uploadFile: async function () {
      var file = new Blob([this.file], {type: "application/pdf"});
      var metadata = {
          "description": "my description",
          "name": this.file.name,
          "mimeType": "application/pdf",
          "parents": ["1q6vk6gLa29cL1x9Oe42yRO-7ArkdVuYZ"], // Google Drive folder id
      };
      var accessToken = gapi.auth.getToken().access_token;
      var form = new FormData();
      form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
      form.append('file', file);

      fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&supportsAllDrives=true", {
          method: 'POST',
          headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }),
          body: form,
      }).then((res) => {
          return res.json();
      }).then(function(val) {
          console.log(val);
          // CALL NETLIFY FUNTION TO STORE DATA TO FAUNADB, ADD GOOGLE DRIVE ID

          // END NETLIFY FUNCTION
      }).catch(err => console.log(err))

      
    },
    downloadFile: async function () {
      var accessToken = gapi.auth.getToken().access_token;
      var filename = gapi.client.drive.files.get({
        fileId: '1i9aOEKf9Zp7UHqhFe1G6RaVdkLv9WHKl'
      }).then(async (response,rawData)=>{
        console.log(response.result.name);
        return response.result.name
      }).catch(err => console.log(err))
      console.log(filename.Ne);

      fetch(`https://www.googleapis.com/drive/v3/files/1i9aOEKf9Zp7UHqhFe1G6RaVdkLv9WHKl?alt=media`, {
          method: 'GET',
          headers: new Headers({ 'Authorization': 'Bearer ' + accessToken })
      }).then((res) => {
          console.log(res);
          return res.blob();
      }).then(function(val) {
          console.log(val);
          const file = new File([val], 'test', {type: "application/pdf"})
          const elem = window.document.createElement('a');
          elem.href = window.URL.createObjectURL(file);
          elem.download = filename.Ne;        
          document.body.appendChild(elem);
          elem.click();        
          document.body.removeChild(elem);
      }).catch(err => console.log(err))

    }
  }
}
</script>

<style>

</style>