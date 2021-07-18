<template>
  <div class="wrapper">
    <Header></Header>
    <main>
      <TheHowItHappensSection></TheHowItHappensSection>
      <ThePriceSection></ThePriceSection>
      <TheAutoparkSection></TheAutoparkSection>
      <TheFeedbackSection></TheFeedbackSection>
      <TheOrderFormSection></TheOrderFormSection>
      <TheContactsSection></TheContactsSection>
    </main>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import Header from "./TheHeader";
import TheFooter from "./TheFooter";
import TheHowItHappensSection from "./TheHowItHappensSection";
import ThePriceSection from "./ThePriceSection";
import TheAutoparkSection from "./TheAutoparkSection";
import TheFeedbackSection from "./TheFeedbackSection";
import TheOrderFormSection from "./TheOrderFormSection";
import TheContactsSection from "./TheContactsSection";

export default {
  name: "Main",
  components: {
    TheContactsSection,
    TheOrderFormSection,
    TheFeedbackSection,
    TheAutoparkSection,
    ThePriceSection,
    TheHowItHappensSection,
    Header, TheFooter
  },
}
</script>

<style scoped>

</style>
