<template>
  <div class="col-10 col-lg-5 row mb-5">

    <div class="col-4 col-lg-2 mt-1 text-center">
      <img :src="`static/svg/${number}_s.svg`" :alt="number" class="position-absolute numeration-shadow"> <!-- shadow -->
      <img :src="`static/svg/${number}.svg`" :alt="number" class="position-relative"> <!-- svg-number -->
    </div> <!-- numeration -->
    <div class="col-8 col-lg-9">
      <slot name="title"></slot> <!-- Заголовок -->
      <slot name="desc"></slot> <!-- Описание -->
    </div> <!-- text -->

  </div>
</template>

<script>
export default {
  name: "HowItHappensSelf",
  props: ['number']
}
</script>

<style scoped>
.numeration-shadow {
  display: inline;
  margin-left: 1.5px;
  z-index: 0;
}
</style>
