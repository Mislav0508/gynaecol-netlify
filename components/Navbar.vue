<template>

  <div>
    <div class="navbar-top">
      <div class="container d-flex justify-content-center">
          <v-icon class="navbar-top-icon">mdiPhone </v-icon>
          <!-- <img src="" alt="phone" class="navbar-top-icon"/> -->
          <h6>Kontakt telefon +385 98 660 485</h6>
        </div>
      <div class="container d-flex justify-content-end mr-3">
        <NuxtLink to="/" class="language-link">
          <li class="eng mb-2"></li>
        </NuxtLink>
        <NuxtLink to="/" class="language-link">
          <li class="hrv"></li>
        </NuxtLink>
      </div>
    </div>
    <div class="navbar-bottom">
      <div class="logo-container">
        <img src="~assets/logo/BANNER_GEP.svg" alt="logo" class="logo-image"/>
      </div>
      <div class="navbar-list-container" ref="navbarListContainerRef">
        <ul class="navbar-list" ref="navbarListRef">
          <NuxtLink to="/" class="nav-link"><li>Naslovnica</li></NuxtLink>
          <NuxtLink to="articles" class="nav-link"><li>O nama</li></NuxtLink>
          <NuxtLink to="supplements" class="nav-link"><li>Članci</li></NuxtLink>
          <NuxtLink to="about" class="nav-link"><li>Suplementi</li></NuxtLink>
        </ul>
      </div>
      <v-icon 
      class="hamburger-btn"
      @click="showNavbar">mdiMenu</v-icon>
      <!-- <GiHamburgerMenu class="hamburger-btn" onClick={()=>setShowNavbar(!showNavbar)}/> -->
    </div>
    <v-container>
      <Nuxt />
    </v-container>
  </div>

  
</template>

<script>

  export default {
    data: () => ({
      showNavbar: false
    }),

    watch: {
      showNavbar () {
        const navbarListHeight = this.$refs.navbarListRef.current.getBoundingClientRect().height
        if(this.showNavbar){
          this.$refs.navbarListContainerRef.current.style.height = `${navbarListHeight}px`
        }else{
          this.$refs.navbarListContainerRef.current.style.height = "0px"
        }
      },
    },
  }
</script>

<style scoped>
/* NAVBAR TOP */

.navbar-top{
  min-height: 5vh;
  color: #FFFFFA;
  background: #702632;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
}
.navbar-top-icon{
  margin-left: 1rem;
}
.navbar-top h6{
  font-size: small;
  margin: 0;
  padding-left: 0.5rem;
}
.eng{
  list-style: none;
  text-decoration: none;
  color: #FFFFFA;
  margin-right: 1.2rem;
  list-style-image: url("~assets/icons/united-kingdom.svg");
  transform: scale(3.2);
}
.hrv{
  list-style: none;
  text-decoration: none;
  color: #FFFFFA;
  margin: 0 0.2rem;
  list-style-image: url("~assets/icons/croatia.svg");
  transform: scale(3.2);
}


/* NAVBAR BOTTOM */

.navbar-bottom{
  min-height: 15vh;
  border-bottom: 1px solid #702632;
  background: #FFFFFA;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}
.logo-container{
  overflow: hidden;
}
.logo-image{
  max-width: 20rem;
  
}
.navbar-list-container{
  min-height: 3rem;
}
.navbar-list{
  list-style: none;
  display: flex;
}
.nav-link{
  color: #080705;
  list-style: none;
}
.hamburger-btn{
  transform: scale(2);
  color: #080705;
  cursor: pointer;
  display: none;
}
@media screen and (max-width: 960px){
  .hamburger-btn{
    position: absolute;
    display: block;
    top:7%;
    right: 5%;
  }
  .navbar-list{
    display: flex;
    flex-direction: column;
  }
  .navbar-bottom{
    flex-direction: column;
    overflow: hidden;
  }
  .navbar-list-container{
    transition: all 0.3s ease;
  }
  .navbar-list-container{
    min-height: 0rem;
  }
}
@media screen and (max-width: 340px){
  .hamburger-btn{
    top:10%
  }
}

</style>