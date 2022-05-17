<template>
  <v-container>
      Blog
      <v-file-input
        truncate-length="15"
        v-model="file"
        ></v-file-input>
        <v-btn @click="uploadFile">Upload</v-btn>
        <v-btn @click="downloadFile">Download</v-btn>
        <v-btn @click="getSupplements">getSupplements</v-btn>
        <v-textarea
          name="input-7-1"
          label="Supplements"
          :value="supplements"
        ></v-textarea>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            file: null,
            filename: '',
            supplements: []
        }
    },
    watch: {
        file(val) {
            const { name } = val
            console.log(name);
            this.filename = name
        }
    },
    mounted() {

    },
    methods: {
        uploadFile: async function() {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer sl.BHy2QZIYQCGFYqCf83Gk35qyGc9DngK1nqHxFwOP_FMIMUNVapiLbEN7H271hx2kUIUZHlLRPv6VadBeZ1xGpgDKexzhHpGg3gtGLQWK5yML6G4kpR6nUJsnzh1BWx2hg8Qv4T-x");
            myHeaders.append("Dropbox-API-Arg", `{\"path\":\"/Gynaecol/Supplements/${this.filename}\"}`);
            myHeaders.append("Content-Type", "application/octet-stream");

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: this.file,
            redirect: 'follow'
            };

            await fetch("https://content.dropboxapi.com/2/files/upload", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        },
        getSupplements: async function() {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer sl.BHy2QZIYQCGFYqCf83Gk35qyGc9DngK1nqHxFwOP_FMIMUNVapiLbEN7H271hx2kUIUZHlLRPv6VadBeZ1xGpgDKexzhHpGg3gtGLQWK5yML6G4kpR6nUJsnzh1BWx2hg8Qv4T-x");
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
            "path": "/Gynaecol/Supplements/"
            });

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            await fetch("https://api.dropboxapi.com/2/files/list_folder", requestOptions)
            .then(response => response.text())
            .then(result => {
                const parsed = JSON.parse(result)
                const { entries } = parsed
                console.log("entries",entries);
                this.supplements = entries.map(x => x.path_lower)
                // console.log(this.supplements);
            })
            .catch(error => console.log('error', error));
        },
        downloadFile: async function() {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer sl.BHy2QZIYQCGFYqCf83Gk35qyGc9DngK1nqHxFwOP_FMIMUNVapiLbEN7H271hx2kUIUZHlLRPv6VadBeZ1xGpgDKexzhHpGg3gtGLQWK5yML6G4kpR6nUJsnzh1BWx2hg8Qv4T-x");
            myHeaders.append("Dropbox-API-Arg", "{\"path\":\"/Gynaecol/Supplements/test.pdf\"}");

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: '',
            redirect: 'follow'
            };

            await fetch("https://content.dropboxapi.com/2/files/download", requestOptions)
            .then(result => {
                console.log(result);
                // const blob = new Blob([result], { type: 'application/pdf' })
                // const link = document.createElement('a')
                // link.href = URL.createObjectURL(blob)
                // link.download = 'testlabel'
                // link.click()
                // URL.revokeObjectURL(link.href)
            })
            .catch(error => console.log('error', error));
        }
    }
}
</script>

<style>

</style>
