import Vue from 'vue'
import Router from 'vue-router'
import Feedback from "../components/Feedback";
import Main from "../components/Main";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/feedback',
      name: 'Feedback',
      component: Feedback
    },
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
