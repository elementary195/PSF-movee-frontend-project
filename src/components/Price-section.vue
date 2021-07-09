<template>
  <section id="price" class="my-5">
    <div class="container">
      <h2 class="text-center font-weight-bold">Цены</h2>
      <h4 class="text-center">Фиксированная стоимость на переезд под ключ</h4>
      <div class="row mt-5 justify-content-around">
        <PriceSelf :data="price" v-for="price in priceList" :key="price.name"></PriceSelf> <!-- price cards -->
      </div>
    </div>
  </section> <!-- Раздел: Цены -->
</template>

<script>
import PriceSelf from "./PriceSelf";
export default {
  name: "Price-section",
  components: {PriceSelf},
  data() {
    return {
      priceList: []
    }
  },
  created() {
    axios.get("/static/price_list.json").then((response) => {
      this.priceList = response.data.price_list;
    });
  }
}
</script>

<style scoped>

</style>
