<template>
  <section class="my-5">
    <div class="container">
      <h2 class="text-center font-weight-bold">Как это происходит?</h2>
      <div class="row mt-5 justify-content-lg-around justify-content-center">

        <HowItHappensSelf :number="'01'">
          <h5 slot="title">Оценка объема предстоящих работ</h5>
          <p slot="desc" class="d-none d-lg-block">Стоимость переезда зависит от количества комнат, вещей и мебели.</p>
        </HowItHappensSelf>
        <HowItHappensSelf :number="'02'">
          <h5 slot="title">Упаковка вещей</h5>
          <p slot="desc" class="d-none d-lg-block">Упаковываем вещи в коробки, подписываем. Габаритное и деликатное,  упаковываем отдельно.</p>
        </HowItHappensSelf>
        <HowItHappensSelf :number="'03'">
          <h5 slot="title">Погрузка и транспортировка вещей</h5>
          <p slot="desc" class="d-none d-lg-block">В нашем автопарке имеются машины, подходящие для мебели любых габаритов.</p>
        </HowItHappensSelf>
        <HowItHappensSelf :number="'04'">
          <h5 slot="title">Распаковка и расстановка мебели</h5>
          <p slot="desc" class="d-none d-lg-block">Опытные грузчики быстро расставят мебель и уберут мусор от распаковки.</p>
        </HowItHappensSelf>

      </div>
    </div>
  </section> <!-- Раздел: Как это происходит? -->
</template>

<script>
import HowItHappensSelf from "./HowItHappensSelf";
export default {
  name: "HowItHappens-section",
  components: {HowItHappensSelf}
}
</script>

<style scoped>

</style>
