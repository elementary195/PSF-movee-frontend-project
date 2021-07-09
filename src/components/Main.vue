<template>
  <div class="wrapper">
    <Header></Header>
    <main>
      <HowItHappensSection></HowItHappensSection>
      <PriceSection></PriceSection>
      <AutoparkSection></AutoparkSection>
      <FeedbackSection></FeedbackSection>
      <OrderFormSection></OrderFormSection>
      <ContactsSection></ContactsSection>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import HowItHappensSection from "./HowItHappens-section";
import PriceSection from "./Price-section";
import AutoparkSection from "./Autopark-section";
import FeedbackSection from "./Feedback-section";
import OrderFormSection from "./OrderForm-section";
import ContactsSection from "./Contacts-section";

export default {
  name: "Main",
  components: {
    ContactsSection,
    OrderFormSection,
    FeedbackSection,
    AutoparkSection,
    PriceSection,
    HowItHappensSection,
    Header, Footer
  },
}
</script>

<style scoped>

</style>
