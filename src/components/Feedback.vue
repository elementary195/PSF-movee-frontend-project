<template>
  <div class="wrapper">
    <HeaderNav></HeaderNav>
    <main>
      <section class="my-5">
        <div class="container">
          <h2 class="text-center font-weight-bold mb-5">Отзывы наших клиентов</h2>

          <p class="desc">Наш опыт работы измеряется теплыми отзывами и постоянством наших клиентов, заказывающих услуги по организации переезда в Москве и других городах. Мы гордимся тем, что более половины наших клиентов приходят по рекомендации и обращаются повторно.<br><br>Если вы уже пользовались нашими услугами, вы можете оставить свой отзыв, будем вам признательны. Вопреки бытующему мнению о практике размещения вымышленных отзывов, хочется отметить, что все размещённые на нашем сайте отзывы – отзывы настоящих людей. Мы надеемся, что, став нашим клиентом, и вы искренне захотите поделиться впечатлениями от переезда!</p> <!-- desc -->

          <div class="row my-5 justify-content-center align-items-center">
            <div class="col-auto d-flex flex-column align-items-center">
              <span class="final-rating">{{ averageRating }}</span>
              <star-rating
                :show-rating="false"
                :star-size="20"
                :rating="averageRating"
                :read-only="true"
                active-color="#000000"></star-rating> <!-- stars -->
              <span class="total-counter">Всего:<span class="O3QoBc"></span>{{feedbacks.length}}</span> <!-- total votes -->
            </div> <!-- average rating -->
            <div class="col-auto d-flex flex-column align-items-center">
              <GChart
                type="BarChart"
                :data="chartData"
                :options="chartOptions"
              />
            </div> <!-- chart -->
          </div>

          <template v-for="item in feedbacks">
            <div class="media mb-3">
              <img class="d-flex mr-3" data-src="holder.js/64x64?theme=sky" alt="Generic placeholder image">
              <div class="media-body">
                <h5 class="mt-0">{{item.fullName}}</h5>
                <div class="d-flex align-items-center mb-1">
                  <span class="mr-3">{{ item.date }}</span>
                  <div class="d-inline-flex">
                    <img src="static/svg/Star.svg" alt="star" v-for="n in item.rating" width="16" height="16">
                    <img src="static/svg/star_empty.svg" alt="star0" v-for="n in 5-item.rating" width="16" height="16">
                  </div>
                </div>
                {{item.text}}
              </div>
            </div><hr>
          </template> <!-- feedbacks itself -->

          <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-secondary my-5 w-50" data-toggle="modal" data-target="#exampleModalCentered">
              Оставить отзыв
            </button>
          </div> <!-- Button trigger modal -->
          <div class="modal fade" id="exampleModalCentered" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenteredLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalCenteredLabel">Отзыв</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group">
                      <label for="formGroupExampleInput">Ваше имя<span style="color: red">*</span></label>
                      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Как вас зовут?" required>
                    </div>
                    <div class="form-group">
                      <label for="formGroupExampleInput2">Текст отзыва <small>(Символов осталось: {{ textarea.size - textarea.text.length }})</small><span style="color: red">*</span>
                      </label>
                      <textarea class="form-control" id="formGroupExampleInput2" v-model="textarea.text" :maxlength="textarea.size" placeholder="Напишите Ваше мнение здесь" required></textarea>
                    </div>
                  </form>
                  <strong>Оцените наши услуги по 5-ти бальной шкале</strong><span style="color: red">*</span><star-rating v-model="ratingNew" :show-rating="false" :star-size="20" :glow="2"></star-rating>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                  <button type="submit" class="btn btn-success">Отправить</button>
                </div>
              </div>
            </div>
          </div> <!-- Modal Leave a feedback -->
        </div>
      </section>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import HeaderNav from "./TheHeaderNav";
import Footer from "./TheFooter";
import { GChart } from "vue-google-charts"
import StarRating from 'vue-star-rating';

export default {
  name: "Feedback",
  components: {Footer, HeaderNav, GChart, StarRating},
  data() {
    return {
      feedbacks: [],
      chartData: [
          ['Оценка', 'Количество'],
          ['5', 0],
          ['4', 0],
          ['3', 0],
          ['2', 0],
          ['1', 0],
      ],
      chartOptions: {
        chart: {
          title: 'Rating',
          subtitle: '',
        }
      },
      textarea: {
        size: 500,
        text: '',
      },
      ratingNew: 0,
    }
  },
  computed: {
    averageRating() {
      let sum = 0;
      if (this.feedbacks.length !== 0) {
        for (let item of this.feedbacks) sum += item.rating;
        return (sum / this.feedbacks.length);
      }
    }
  },
  // filters: {
  //   dotComma(str) {
  //     if (str !== undefined) return str.toString().replace('.', ',');
  //   }
  // },
  created() {
    axios.get("/static/feedbacks.json").then((response) => {
      this.feedbacks = response.data.feedback;

      this.chartData.forEach((item, index) => {
        if (index !== 0) {
          item[1] = this.feedbacks.filter(_item => _item.rating === parseInt(item[0])).length;
        }
      });
    });
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;1,300&display=swap');
.final-rating {
  font-size: 70px;
  font-family: 'Open Sans Condensed', sans-serif;
}
.total-counter {
  font-size: 16px;
}
.O3QoBc {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAW0lEQVR4AWP4TwBSTQEIlAuUbyj/D4QbygWwK1gAlITABdgVHIArOECmggC4ggBMBRAlBuUNQGgAE8VU4ACBmApAejfALIB61QBVwQeoBAJ+QFXwHxNSLy4IQAD87f8pWI1e0gAAAABJRU5ErkJggg==) no-repeat center;
  display: inline-block;
  height: 16px;
  width: 16px;
  position: relative;
  top: 3px;
}
h5 {
  font-weight: 600;
  font-size: 1.2rem;
}
textarea {
  resize: none;
  height: 200px;
}
.desc {
  font-family: Roboto, sans-serif;
  font-size: 20px;
}
</style>
