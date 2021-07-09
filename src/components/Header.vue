<template>
  <header class="header" id="0">
    <HeaderNav></HeaderNav>
    <section class="header-next p-3 bg-main w-100" style="z-index: 0;">
      <div class="container">
        <div class="row">
          <div class="col col-lg-5 d-flex flex-column align-items-center align-items-lg-start">
            <div class="text-center">
              <h1 class="text-center text-lg-left">Квартирные переезды</h1>
              <h4 class="text-center text-lg-left">По Москве и области</h4>
            </div> <!-- desc -->
            <img :src="FirstHeaderImg.path" :alt="SecondHeaderImg.alt" class="d-block d-lg-none first-header-img"/>
            <a href="#order-form" class="btn red-btn my-0 my-lg-5 p-2">Заказать</a> <!-- order btn -->
            <div class="d-none d-lg-inline-flex icon-row">
              <div class="mr-2 d-flex align-items-center">
                <img src="static/svg/truck.svg" alt="">
                <p class="mb-0 pl-2">Более 800 переездов</p>
              </div>
              <div class="mr-2 d-flex align-items-center">
                <img src="static/svg/triggerTwo.svg" alt="">
                <p class="mb-0 pl-2">Бережная упаковка</p>
              </div>
              <div class="mr-2 d-flex align-items-center">
                <img src="static/svg/money.svg" alt="">
                <p class="mb-0 pl-2">Фиксированная цена</p>
              </div>
            </div> <!-- icons of advantages -->
          </div>

          <div class="col-lg-4 d-none d-lg-block">
            <img :src="FirstHeaderImg.path" :alt="FirstHeaderImg.alt" class="first-header-img-lg"/>
          </div> <!-- Image 1 -->

          <div class="col-lg-3 d-none d-lg-block">
            <img :src="SecondHeaderImg.path" :alt="SecondHeaderImg.alt" class="second-header-img"/>
          </div> <!-- Image 2 -->
        </div>
      </div>
    </section>
  </header>
</template>

<script>
import HeaderNav from "./HeaderNav";
export default {
  name: "Header",
  data() {
    return {
      FirstHeaderImg: {
        path: 'static/images/ManBox.png',
        alt: 'ManBox'
      },
      SecondHeaderImg: {
        path: 'static/images/YellowCar.png',
        alt: 'YellowCar'
      }
    }
  },
  components: {
    'HeaderNav': HeaderNav
  }
}
</script>

<style scoped>
.header-next h1 {
  font-weight: bold;
  /*font-size: 70px;*/
}
@media (max-width: 991px) {
  h1 {
    font-size: 40px;
  }
}
@media (min-width: 992px) {
  h1 {
    font-size: 70px;
  }
}
/*.header-next h4 {*/
/*  font-size: 5vmin;*/
/*}*/
@keyframes btn-anim {
  50%, 100% {
    transform: rotateY(0deg);
  }
  25%, 75% {
    transform: rotateY(90deg);
  }
}
.red-btn {
  width: 70%;
  height: auto;
  background-color: var(--color1);
  color: white;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
}
.red-btn:hover {
  box-shadow: 0 0 20px rgb(255,53,43);
  color: white;
}
.icon-row div img:hover {
  animation: trambling-animation 1.2s ease-in-out 0s normal none infinite;
}
@keyframes trambling-animation {
  0%, 50%, 100% {
    transform: rotate(0deg);
  }
  10%, 30% {
    transform: rotate(-10deg);
  }
  20%, 40% {
    transform: rotate(10deg);
  }
}
.first-header-img {
  position: relative;
  width: 248px;
  height: 396px;
  bottom: -1px;
  z-index: 1;
}
.first-header-img-lg {
  position: absolute;
  bottom: -1rem;
  z-index: 1;
}
.second-header-img {
  position: absolute;
  right: 10%;
  top: 25%;
  z-index: 0;
}
</style>
