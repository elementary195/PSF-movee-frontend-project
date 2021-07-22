<template>
  <footer class="footer bg-main w-100">
    <div class="container">
      <div class="row justify-content-between text-center text-lg-left">
        <div class="col-6 col-lg-3 mr-auto ml-auto mr-lg-0 ml-lg-0 order-first">
          <router-link class="navbar-brand text-uppercase mb-4 mr-0" :to="{name: 'Main'}" href="#0">{{ siteName }}</router-link> <!-- Logotype / Name -->

          <a data-toggle="modal" data-target=".bd-example1-modal-lg" class="d-block my-2" href="#" @click.prevent>Политика конфиденциальности</a> <!-- Button trigger modal -->
          <div class="modal fade bd-example1-modal-lg" id="exampleModalScrollable1" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableLabel1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalCenteredLabel1">Политика конфиденциальности</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, impedit, temporibus. Consequuntur ex, facere iure labore magnam nam possimus soluta! Error, illo labore! Alias aut earum necessitatibus non veniam vitae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequatur cupiditate, doloremque similique veritatis vitae voluptatum. Autem deserunt doloremque error est illum itaque, maxime neque non optio quidem totam vitae.
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                </div>
              </div>
            </div>
          </div> <!-- modal Policy -->

          <a data-toggle="modal" data-target=".bd-example2-modal-lg" class="d-block my-2" href="#" @click.prevent>Соглашение на обработку персональных данных</a> <!-- Button trigger modal -->
          <div class="modal fade bd-example2-modal-lg" id="exampleModalScrollable2" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableLabel2" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalCenteredLabel2">Соглашение на обработку персональных данных</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, impedit, temporibus. Consequuntur ex, facere iure labore magnam nam possimus soluta! Error, illo labore! Alias aut earum necessitatibus non veniam vitae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequatur cupiditate, doloremque similique veritatis vitae voluptatum. Autem deserunt doloremque error est illum itaque, maxime neque non optio quidem totam vitae.
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                </div>
              </div>
            </div>
          </div> <!-- modal Agreement -->
        </div> <!-- Logo/Policy/Agreement -->
        <div class="col-12 col-lg-auto my-2 my-lg-0">
          <nav class="nav flex-column">
            <a class="nav-link" href="#0">Главная</a>
            <a class="nav-link" href="#price">Цена</a>
            <a class="nav-link" href="#autopark">Автопарк</a>
            <a class="nav-link" href="#feedback">Отзывы</a>
            <a class="nav-link" href="#contacts">Контакты</a>
          </nav>
        </div> <!-- nav -->
        <div class="col-12 col-lg-auto d-flex flex-column align-items-center my-4 my-lg-0">
          <div class="mb-2">
            <a :href="sn.link" v-for="sn in socialNetworks"><img :src="sn.icon" :alt="sn.name" class="px-2"></a>
          </div> <!-- social-nets -->
          <u class="font-weight-bold">{{ email }}</u> <!-- e-mail -->
        </div> <!-- contacts -->
        <div class="col-12 col-lg-auto d-flex flex-column align-items-center order-last">
          <a href="#order-form" class="btn btn-outline-secondary p-2 mb-lg-2 w-100">Обратный звонок</a>
          <span class="text-center phone d-none d-lg-block">{{ telNum }}</span>
        </div> <!-- phone -->
      </div>
    </div>
  </footer>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
  name: "Footer",
  computed: {
    ...mapGetters(['siteName']),
    ...mapState(['telNum', 'socialNetworks', 'email']),
  }
}
</script>

<style scoped>
.footer {
  margin-top: -2px;
  padding: 50px 0;
}
p {
  font-size: 18px;
  line-height: 20px;
}
.phone {
  line-height: 29px;
  padding-bottom: 0;
  border-bottom: 1px var(--main-text-color) solid;
}
.nav-link {
  font-weight: bold;
}
</style>
