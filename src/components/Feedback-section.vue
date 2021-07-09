<template>
  <section id="feedback" class="bg-main w-100 my-5">
    <div class="container">
      <h2 class="text-center font-weight-bold py-5">Отзывы</h2>

      <div class="row justify-content-between flex-column flex-lg-row align-items-center align-items-lg-start">
        <FeedbackSelf :data="feedback" :key="feedback.id" :id="'feedback#'+feedback.id" v-for="feedback in feedbacks.slice(-3)"></FeedbackSelf>
      </div> <!-- Feedbacks itself -->

      <div class="d-flex justify-content-center">
        <router-link :to="{name: 'Feedback'}" custom v-slot="{ navigate }">
          <input type="button" value="Все отзывы" class="btn btn-outline-secondary my-4 p-3 w-50" @click="navigate" role="link">
        </router-link>
      </div> <!-- Router to all list of feedbacks -->
    </div>
  </section> <!-- Раздел: Отзывы -->
</template>

<script>
import FeedbackSelf from "./FeedbackSelf";
export default {
  name: "Feedback-section",
  components: {FeedbackSelf},
  data() {
    return {
      feedbacks: [],
    }
  },
  created() {
    axios.get("/static/feedbacks.json").then((response)=> {
      this.feedbacks = response.data.feedback;
    });
  }
}
</script>

<style scoped>

</style>
