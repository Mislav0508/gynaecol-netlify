<template>
  <div class="contact-container">
    <div class="contact-title-container">
      <h2 class="contact-title">{{ $t('Contact') }}</h2>
      <div class="underline"></div>
    </div>
    <div class="contact-grid">
      <input v-model="message.name" type="text" placeholder="Ime" class="grid-name"/>
      <input v-model="message.lastName" type="text" placeholder="Prezime" class="grid-prezime"/>
      <input v-model="message.subject" type="text" placeholder="Predmet" class="grid-predmet" />
      <input v-model="message.email" type="email" placeholder="Email" class="grid-email"/>
      <textarea v-model="message.comment" type="text" placeholder="Komentar" class="grid-komentar"/>
      <button type="submit" class="grid-submit-btn" @click="sendMessage">{{ $t('Send') }}</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data: () => ({
    message: {
      name: "",
      lastName: "",
      subject: "",
      email: "",
      comment: ""
    }
  }),
  methods: {
    /* eslint-disable */
    sendMessage: function() {
      console.log(this.message);
      if(this.message.name && this.message.lastName && this.message.subject && this.message.email && this.message.comment) {
        axios.post("http://localhost:5000/", this.message) //change URI when deploying app.
        .then((result) => {
          let message = JSON.parse(result.config.data)
          alert(`Thank you ${message.name} for contacting us! We will respond as soon as possible. Have a great day!`)
          this.$mail.send({
            from: `mislav0508@hotmail.com`, //ovo mora bit moj mail
            subject: `${message.subject}`,
            text: `${message.comment}`,
          })
        })
        .catch(err => console.log(err))
        this.message = {}
      } else {
        console.log("please fill out all fields!")
        alert("please fill out all fields!")
      }
    }
  }
}
</script>

<style scoped>
.contact-container{
  padding: 3rem;
  margin: 2rem 0;
  min-height: 20rem;
  min-width: 60vw;
}
.contact-title-container{
  background: #FFFFFA;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.contact-title{
  line-height: 35px;
  color: #702632;
  text-align: center;
}
/* GRID */
.contact-grid{
  min-width: 100%;
  margin: 1rem 0;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 35px 35px 120px auto;
  grid-template-areas: 
  "n n e e"
  "s s p p"
  "m m m m"
  "b b b b";
}
.grid-name{
  grid-area: n;
}
.grid-prezime{
  grid-area: e;
}
.grid-predmet{
  grid-area: s;
}
.grid-email{
  grid-area: p;
}
.grid-komentar{
  grid-area: m;
}
.grid-submit-btn{
  grid-area: b;
  padding: 10px;
  width: 50%;
  margin: 0 auto;
  cursor: pointer;
  background-color: #702632;
  color: #FFFFFA;
  border-radius: 15px;
  transition: all 0.3s ease-in;
}
.grid-submit-btn:hover{
  opacity: 0.8;

}
input,textarea{
  background: #FFFFFA;
  border: 1.5px solid #702632;
}
@media screen and (max-width: 600px){
  .contact-grid{
    grid-template-columns: 1fr;
    grid-template-rows: 35px 35px 35px 35px 5rem;
    grid-template-areas: 
    "n"
    "e"
    "s"
    "p"
    "m"
    "b";
  }
  .contact-container{
    min-width: 100%;
    padding: 2rem;
    margin: 2rem 0;
    min-width: 90vw;
  }
}
</style>