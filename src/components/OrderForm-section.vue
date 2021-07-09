<template>
  <section id="order-form" class="my-5">
    <div class="container d-flex flex-column align-items-center">
      <h2 class="text-center font-weight-bold">Закажи переезд прямо сейчас</h2>
      <h5>Мы перезвоним в течение 10 минут</h5>
      <form class="form-inline mt-4 d-lg-flex d-block text-center">

        <label class="sr-only" for="inlineFormInputName2"></label>
        <input type="text" v-model="order.name" class="form-control mb-2 mb-lg-0 mr-sm-2 text-capitalize" id="inlineFormInputName2" placeholder="Ваше имя" required pattern="^[А-Яа-яЁё\s]+$">

        <label class="sr-only" for="inlineFormInputGroupPhoneNumber2"></label>
        <masked-input v-model="order.phone" class="form-control mb-2 mb-lg-0 mr-sm-2" id="inlineFormInputGroupPhoneNumber2" mask="\+7\ (111) 111-1111" placeholder="Телефон" type="tel" required/>

        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input mx-1 mx-lg-2" id="customCheck1" v-model="isActive">
          <label class="custom-control-label my-2 my-lg-0" for="customCheck1">Даю согласие на обработку персональных данных</label>
        </div>

        <button type="submit" class="btn btn-danger ml-xl-2" :class="{disabled : !isActive}" @click.prevent="sendOrder">Перезвонить мне</button>
      </form>
      <div class="alert alert-success mt-5" role="alert" v-if="sendComplete">
        <strong>Заявка отправлена!</strong> В течение 10 минут с Вами свяжется наш сотрудник.
      </div>
    </div>
  </section> <!-- Раздел: Форма заказа -->
</template>

<script>
import maskedInput from "vue-masked-input";
export default {
  name: "order-form",
  components: {
    maskedInput
  },
  data() {
    return {
      isActive: false,
      sendComplete: false,
      order: {
        name: '',
        phone: ''
      },
    }
  },
  methods: {
    sendOrder() {
      if (this.isActive && this.order.phone.indexOf('_')===-1 && this.order.name) {
        let correctInput = confirm(`${this.order.name}, проверьте правильность ввода номера мобильного телефона: ${this.order.phone} . Если телефон указан верно, нажмите \"OK\" для отправки заявки.`);
        if (correctInput) {
          this.sendComplete = true;
          setTimeout(() => {this.sendComplete = false;}, 3000)
        }
      }
    } // Checking before sending
  },
}
</script>

<style scoped>

</style>
