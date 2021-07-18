<template>
  <section class="bg-main w-100">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-main px-0" style="z-index: 1;">

        <router-link class="navbar-brand text-uppercase" :to="{name: 'Main'}" href="#0">{{ SiteName }}</router-link> <!-- Logo/Name -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> <!-- collapse btn -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent"> <!-- nav -->
          <ul class="navbar-nav mr-auto ml-auto" v-if="main">
            <li class="nav-item">
              <a class="nav-link" href="#price">Цены</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#autopark">Автопарк</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#feedback">Отзывы</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contacts">Контакты</a>
            </li>
          </ul> <!-- nav for initial route -->

          <ul class="navbar-nav mr-auto ml-auto" v-else>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'Main'}" href="#price">Цены</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'Main'}" href="#autopark">Автопарк</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'Main'}" href="#feedback">Отзывы</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'Main'}" href="#contacts">Контакты</router-link>
            </li>
          </ul> <!-- nav for any other route -->

          <span class="navbar-text font-weight-bold phone">{{ phoneNumber }}</span> <!-- phone number -->
        </div>

      </nav>
    </div>
  </section>
</template>

<script>
import {constants} from "../config";

export default {
  name: "HeaderNav",
  data() {
    return {
      SiteName: constants.SITENAME,
      phoneNumber: constants.PHONE,
    }
  },
  computed: {
    main() {
      return this.$route.path === '/';
    }
  }
}
</script>

<style scoped>
.navbar ul li {
  padding: 0 10px;
}
.nav-link {
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: var(--main-text-color);
}
.phone {
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  padding-bottom: 0;
  border-bottom: 2px var(--main-text-color) solid;
}
/*.navbar-toggler:hover {*/
/*  animation: btn-anim 3s ease-in-out normal infinite;*/
/*}*/
/*@keyframes btn-anim {*/
/*  50%, 100% {*/
/*    transform: rotateY(0deg);*/
/*  }*/
/*  25%, 75% {*/
/*    transform: rotateY(90deg);*/
/*  }*/
/*}*/
</style>
