<template>
  <div class="contact-container">
    <div class="contact-title-container">
      <h2 class="contact-title">{{ $t('Contact') }}</h2>
      <div class="underline"></div>
    </div>

    <form  
    id="contactForm"
    class="contact-grid"
    name="contactForm"
    method="POST" 
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="sendMessage"
    >

      <input type="hidden" name="form-name" value="contactForm">

      <label class="grid-name">
        <input id="grid-name" type="text" name="name" :placeholder="$t('Name')" required/>
      </label>

      <label class="grid-prezime">
        <input id="grid-prezime" type="text" name="lastName" :placeholder="$t('LastName')" required/>        
      </label>

      <label class="grid-predmet">
        <input id="grid-predmet" type="text" name="subject" :placeholder="$t('Subject')" required/>
      </label>

      <label class="grid-email">
        <input id="grid-email" type="email" name="email" placeholder="Email" required/>
      </label>

      <label class="grid-komentar">
        <textarea id="grid-komentar" type="text" name="comment" :placeholder="$t('Comment')" required/>
      </label>

      <button type="submit" class="grid-submit-btn">{{ $t('Send') }}</button>

      <v-alert
      v-if="successAlert"
      class="grid-alert"
      type="success"
      >{{ $t('Form_Success_Alert') }}</v-alert>

    </form>

  </div>
</template>

<script>
// import axios from "axios"

export default {
  data: () => ({
    successAlert: false
  }),
  methods: {
    /* eslint-disable */
    // https://gynaecolperinatol.hr
    // https://gynaecol-db.herokuapp.com/
    encode: function(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    },
    sendMessage: function(event) {
      this.successAlert = true
      const { name, lastName, subject, email, comment } = Object.fromEntries(new FormData(event.target))
      let message = { name, lastName, subject, email, comment }
      fetch(
        "/", 
        {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "contactForm",
          ...message
          })
      }).then(() => {
        console.log("form was submittet");
        document.getElementById("contactForm").reset();
        setTimeout(() => {
          this.successAlert = false
        }, 3500)
      }).catch(error => alert(error))
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
  "b b b b"
  "a a a a";
}
#grid-name,#grid-prezime,#grid-predmet,#grid-email,#grid-komentar{
  width: 100%;
  height: 100%;
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
.grid-alert{
  grid-area: a;
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
    "b"
    "a";
  }
  .contact-container{
    min-width: 100%;
    padding: 2rem;
    margin: 2rem 0;
    min-width: 90vw;
  }
}
</style>