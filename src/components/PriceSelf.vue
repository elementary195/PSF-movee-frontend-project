<template>
  <div class="col-8 col-lg-3 p-4 mx-4 my-4 text-center prices-section">
    <h4 class="font-weight-bold">{{ data.name }}</h4> <!-- name -->

    <ul class="p-0">
      <li v-for="item in data.desc" class="my-4">{{item}}</li> <!-- desc -->
    </ul>

    <h2 class="mt-5 font-weight-bold">{{ data.price | PlusRubleSymbol }}</h2> <!-- price -->

    <a href="#order-form" class="text-center mt-4 btn yellow-btn">Заказать</a> <!-- btn -->
  </div>
</template>

<script>
export default {
  name: "PriceSelf",
  props: ['data'],
  filters: {
    PlusRubleSymbol(str) {
      return str + ' ₽';
    }
  },
}
</script>

<style scoped>
.prices-section {
  border: 1px solid white;
  width: auto;
  padding: 100px;
  cursor: default;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

}
.prices-section:hover {
  border-color: var(--main-color);
}
</style>
