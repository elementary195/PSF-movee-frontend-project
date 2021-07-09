<template>
  <div class="col-10 col-lg-4 mb-lg-0 mb-3">
    <h5>{{ data.fullName }}</h5>

    <div class="d-flex align-items-center mb-1">
      <span class="mr-3">{{ data.date }}</span>
      <div class="d-inline-flex">
        <img src="static/svg/Star.svg" alt="star" v-for="n in data.rating" width="16" height="16">
        <img src="static/svg/star_empty.svg" alt="star0" v-for="n in 5-data.rating" width="16" height="16">
      </div>
    </div> <!-- rating -->

    <div v-if="data.text.length > 255 && !showFull">
      <p class="mt-2">{{ data.text.substring(0,255)+"..." }}</p>
      <a class="mt-4" href="#" @click.prevent="show">Читать полностью</a>
    </div> <!-- feedback-short-text -->

    <p class="mt-2" v-else>{{ data.text }}</p> <!-- feedback-full-text -->

    <hr class="d-block d-lg-none">
  </div>
</template>

<script>
export default {
  name: "FeedbackSelf",
  data() {
    return {
      showFull: false,
    }
  },
  props: ['data'],
  methods: {
    show() {
      this.showFull = true;
    } // show feedback in full
  }
}
</script>

<style scoped>

</style>
