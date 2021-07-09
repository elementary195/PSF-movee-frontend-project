<template>
  <section id="autopark" class="my-5">
    <div class="container">
      <h2 class="text-center font-weight-bold">Автопарк</h2>
      <h4 class="text-center">10 видов автомобилей от 800 кг до 10 тонн</h4>

      <div class="car-select-btn d-none d-lg-flex align-items-center justify-content-lg-center my-4">
        <button type="button" :value="item" class="btn mx-5 my-2 p-2 px-4" v-for="item in getAutoTypes" @click="filterArray(item)">{{item}}&nbsp;<span class="badge badge-secondary">{{carCounter(item)}}</span></button>
      </div> <!-- filter-buttons -->

      <div class="row align-items-center justify-content-around">
        <div class="col-1 col-lg-1 text-center">
          <button class="border-0 bg-white p-2" @click.prevent="previousSlide"><img src="static/svg/symbolLeft.svg" alt="<"></button>
        </div> <!-- symbol < -->

        <div class="col-6 col-lg-3 d-lg-block d-flex flex-column align-items-center text-center text-lg-left">
          <h4 class="font-weight-bold mt-4 mt-lg-0">{{ activeCar && activeCar.name }}</h4> <!-- Наименование авто -->
          <ul class="car-desc my-4">
            <li>Ширина: {{activeCar && activeCar.width}} м</li>
            <li>Высота: {{activeCar && activeCar.height}} м</li>
            <li>Объём: {{activeCar && activeCar.width * activeCar.height * activeCar.length}} м³</li>
            <li>Грузоподъёмность: {{activeCar && activeCar.capacity}} т</li>
          </ul> <!-- Описание размеров авто -->
          <a href="#order-form" class="btn yellow-btn">Заказать</a>
        </div> <!-- desc -->

        <div class="col-lg-7 d-none d-lg-block car-img">
          <img :src="activeCar && activeCar.img" :alt="activeCar && activeCar.type" width="641" height="453">
        </div> <!-- img -->

        <div class="col-1 col-lg-1 text-center">
          <button class="border-0 bg-white p-2" @click.prevent="nextSlide"><img src="static/svg/symbolRight.svg" alt=">"></button>
        </div> <!--symbol > -->
      </div>

    </div>
  </section> <!-- Раздел: Автопарк -->
</template>

<script>
export default {
  name: "Autopark-section",
  data() {
    return {
      autopark: [],
      filteredArray: [],
      sliderStep: 0,
    }
  },
  created() {
    axios.get("/static/autopark.json").then((response) => {
      this.autopark = response.data.autopark;
      this.filteredArray = this.autopark;
    });
  },
  computed: {
    getAutoTypes: function () {
      let new_array = new Set();
      this.autopark.forEach((item) => {
        new_array.add(item.type);
      })
      return new_array;
    }, //Getting car types from JSON
    activeCar: function () {
      if (this.filteredArray.length > 0) return this.filteredArray[this.sliderStep];
    }, //Array of cars from filtered list
  },
  methods: {
    nextSlide() {
      (this.sliderStep+1 > this.filteredArray.length-1)?this.sliderStep=0:this.sliderStep = this.sliderStep+1;
    }, //Next slide
    previousSlide() {
      (this.sliderStep-1 < 0)?this.sliderStep=this.filteredArray.length-1:this.sliderStep = this.sliderStep-1;
    }, //Previous slide
    filterArray(value) {
      this.sliderStep=0;
      this.filteredArray=this.autopark.filter(item => item.type === value);
    }, //Filtering by type
    carCounter: function (value) {
      return this.autopark.filter(item => item.type === value).length;
    }//Filtered array length
  },
  watch: {

  }
}
</script>

<style scoped>
.car-select-btn input {
  width: 150px;
  background: none;
  border: 1px solid #EBEBEB;
}
.car-select-btn input:hover {
  border-color: var(--main-color);
}
.car-desc {
  padding-left: 0;
}
.car-desc li {
  list-style-image: url("/static/svg/Tick.svg");
  list-style-position: inside;
  line-height: 50px;
}
.car-img img {
  padding: 50px;
}
</style>
